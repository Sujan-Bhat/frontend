import { Outlet, Link, useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../redux/api/userApi";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../redux/api/authApi";
import "../Components/styles/homepage.css";
import logo from "../Components/assets/pizza.png";

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
      <div className="upperh">
        <header className="header">
          <img src={logo} alt="logo" />
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
                        <Link to="/">Cart</Link>
                      </li>
                    </>
                  )
                )}
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
      </div>
      <main className="main">
        <div className="order">
          <button className="ordernow">Order now</button>
        </div>
      </main>
      <div className="lowerh">
        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
