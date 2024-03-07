import { Outlet, Link,useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../redux/api/userApi";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../redux/api/authApi";


const Layout = () => {

  const navigate = useNavigate();

  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    logout();
    navigate(0)
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            {user?(
              <><Link>{user?.name}</Link>
              <br />
              <Link to="/" onClick={logoutHandler}>Logout</Link></>

            ):!isLoading &&(
              <><li>
                <Link to="/login">Login</Link>
              </li><li>
                  <Link to="/register">Register</Link>
                </li>
                </>
            )}
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;