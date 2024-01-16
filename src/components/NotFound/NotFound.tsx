import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfoundtitle">
      <h1 className="text">Page Not Found</h1>
      <Link to="/customers/1">Click to get customers page</Link>
    </div>
  );
};

export default NotFound;
