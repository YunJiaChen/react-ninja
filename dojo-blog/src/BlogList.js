const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="BlogList">
           {blogs.map((blog) => (
            <div className="blogPreview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author}</p>
            </div>
        ))} 
        </div> 
        
     );
}
 
export default BlogList;