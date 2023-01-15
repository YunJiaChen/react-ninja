import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'ppppp', author:'Rita', id:1 },
        { title: 'Welcome party!', body: 'ppppp', author:'Mark', id:2 },
        { title: 'Happy new year!!', body: 'ppppp', author:'Abby', id:3 }
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect ran');
    },[]);
    return (  
        <div className="home">
            <BlogList blogs={blogs} title={'All Blog'} handleDelete={ handleDelete }/>

        </div>
    );
}
 
export default Home;
