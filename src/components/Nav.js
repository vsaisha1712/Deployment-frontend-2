import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link to="/" class="navbar-brand text-primary"><b>CRUD operations</b></Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link"><b>Create student</b></Link>
                <Link to="/student-list" class="nav-link"><b>Student List</b></Link>
            </div>
        </nav>
    )
}
export default Nav;
