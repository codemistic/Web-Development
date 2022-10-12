import axios from 'axios';
// eslint-disable-next-line
import  {useState, useEffect, useRef} from "react";

const UseAxios = (param) => {
    const [response, setResponse]  = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1)

    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            if(currentPage === 1){
                setResponse(res.data.results);
            }
            else{
                //setResponse((prev) => [...prev, ...res.data.results]);
                setResponse([...res.data.results])
            }
            setTotalPages(res.data.total_pages);
        } catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData(param);
        // eslint-disable-next-line
    },[param])

    return {
        response,
        isLoading,
        error,
        fetchData : url => fetchData(url),
        currentPage,
        setCurrentPage,
        totalPages,
    }
}

export default UseAxios;
