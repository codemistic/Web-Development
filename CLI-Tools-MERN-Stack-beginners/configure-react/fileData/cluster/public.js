const indexHTML = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using configure-react Package"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App Created by configure-react</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;

const manifestJSON = () => `
{
    "short_name": "React App",
    "name": "Create React App Sample",
    "icons": [
      {
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "logo192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "logo512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
  }
  
`;

const robotsTXT = () => `# https://www.robotstxt.org/robotstxt.html
User-agent: *
`;

module.exports = {
  indexHTML,
  manifestJSON,
  robotsTXT,
};
