import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogss')//blogs多加1個s讓載入Data產生錯誤
            .then(res =>{
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err =>{
                setError(err.message);
                setIsLoading(false);
            })
        },1000);//模擬從遠端server載入資料的時間
       
    },[]);
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blog'}/>}

        </div>
    );
}
 
export default Home;
