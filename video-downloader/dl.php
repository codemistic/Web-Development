<?php 
class VidClearDownloader
{
    protected $headers = array();
    protected $headers_sent = false;

    protected $debug = false;

    protected function sendHeader($header)
    {
        if ($this->debug) {
            var_dump($header);
        } else {
 
            header($header);
        }
    }

    public function decode($pData)
    {
        $encryption_key = 'themeluxurydotcom';

        $decryption_iv = '9999999999999999';

        $ciphering = "AES-256-CTR"; 
        
        $pData = str_replace(' ','+', $pData);

        $decryption = openssl_decrypt($pData, $ciphering, $encryption_key, 0, $decryption_iv);

        return $decryption;
    }

    public function headerCallback($ch, $data)
    {
        if (preg_match('/HTTP\/[\d.]+\s*(\d+)/', $data, $matches)) {
            $status_code = $matches[1];

            if ($status_code == 200 || $status_code == 206 || $status_code == 403 || $status_code == 404) {
                $this->headers_sent = true;
                $this->sendHeader(rtrim($data));
            }

        } else {

            $forward = array('content-type', 'content-length', 'accept-ranges', 'content-range');

            $parts = explode(':', $data, 2);

            if ($this->headers_sent && count($parts) == 2 && in_array(trim(strtolower($parts[0])), $forward)) {
                $this->sendHeader(rtrim($data));
            }
        }

        return strlen($data);
    }

    public function bodyCallback($ch, $data)
    {
        if (true) {
            echo $data;
            flush();
        }

        return strlen($data);
    }

    public function stream($url)
    {
        $ch = curl_init();

        $headers = array();
        $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0';

        if (isset($_SERVER['HTTP_RANGE'])) {
            $headers[] = 'Range: ' . $_SERVER['HTTP_RANGE'];
        }

        curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
        curl_setopt($ch, CURLOPT_FRESH_CONNECT, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_HEADERFUNCTION, [$this, 'headerCallback']);
        curl_setopt($ch, CURLOPT_WRITEFUNCTION, [$this, 'bodyCallback']);
        $ret = curl_exec($ch);
        $error = ($ret === false) ? sprintf('curl error: %s, num: %s', curl_error($ch), curl_errno($ch)) : null;
        curl_close($ch);
        return;
    }
}

if ( !empty($_GET['token']) ) {

    $video = new VidClearDownloader();

    $token = $video->decode($_GET['token']);

    $deJson = json_decode($token);

    header('Content-Disposition: attachment; filename="'.$deJson->filename.'-'.time().'.'.$deJson->type.'"');
    
    $video->stream($deJson->url);

} else echo 'Silence is Golden!';