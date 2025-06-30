import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="nav_bar">
            <Link to='/' id='prev'></Link>
            <a href='#' id='basket'></a>
        </div>
    )
}  
export default Header;