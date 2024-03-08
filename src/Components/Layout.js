import { Outlet, Link, useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../redux/api/userApi";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../redux/api/authApi";
import "../Components/styles/homepage.css";

const Layout = () => {
  const navigate = useNavigate();

  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  return (
    <div className="body-of-layout">
      <header className="header">
        <img src="" alt="logo"></img>
        <div className="navi">
          <nav className="navigation-bar">
            <ul className="listu">
              <li className="list">
                <Link to="/">Home</Link>
              </li>
              <li className="list">
                <Link to="">Menu</Link>
              </li>
              {user ? (
                <>
                  <Link>{user?.name}</Link>
                  <br />
                  <Link to="/" onClick={logoutHandler}>
                    Logout
                  </Link>
                </>
              ) : (
                !isLoading && (
                  <>
                    <li className="list">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="list">
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <main></main>
    </div>
  );
};

export default Layout;
