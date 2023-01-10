import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'ppppp', author:'Rita', id:1 },
        { title: 'Welcome party!', body: 'ppppp', author:'Mark', id:2 },
        { title: 'Happy new year!!', body: 'ppppp', author:'Abby', id:3 }
    ]);
    
    
    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
