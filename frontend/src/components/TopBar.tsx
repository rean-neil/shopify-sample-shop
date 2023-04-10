import { UserContext } from "../context/user.context";
import { useContext } from "react";

const TopBar = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="logo">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/online-shopping.png"}
            alt="Logo"
          />
          <p className="hide-mobile">MyShop</p>
        </div>
        {user && (
          <div className="profile-container">
            <div className="profile hide-mobile">
              <img className="logo" src={user?.avatar_url} alt="Logo" />
              {user?.login}
            </div>
            <div>
              <button onClick={handleLogout}>
                <img src={process.env.PUBLIC_URL + "/trolley.png"} alt="Logo" />
              </button>
              <button onClick={handleLogout}>
                <img src={process.env.PUBLIC_URL + "/logout.png"} alt="Logo" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
