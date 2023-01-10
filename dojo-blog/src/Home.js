import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'ppppp', author:'Rita', id:1 },
        { title: 'Welcome party!', body: 'ppppp', author:'Mark', id:2 },
        { title: 'Happy new year!!', body: 'ppppp', author:'Rita', id:3 }
    ]);
    
    
    return (  
        <div className="home">
            <BlogList blogs={blogs} title={'All Blog'}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Rita')} title="Rita's Blogs"/>

        </div>
    );
}
 
export default Home;
