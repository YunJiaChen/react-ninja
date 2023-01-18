import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That Page cannot be found</p>
            <Link to="/">Back to the homepages...</Link>
        </div>
    );
}
 
export default NotFound;