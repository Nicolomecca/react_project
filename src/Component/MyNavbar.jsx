import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation } from "react-router-dom";
const MyNavbar = () => {
  const location = useLocation();
  console.log("mostra ", location);
  return (
    <nav
      className="navbar navbar-expand-lg "
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <Link to="/" className="nav-link">
          <img
            src="./logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              to="/"
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/tv-shows"
              className={`nav-link${
                location.pathname === "/tv-shows" ? " active" : ""
              }`}
            >
              Tv-Shows
            </Link>
            <Link
              to="/Movies"
              className={`nav-link${
                location.pathname === "/Movies" ? " active" : ""
              }`}
            >
              Movies
            </Link>
            <Link
              to="/Recently Added"
              className={`nav-link${
                location.pathname === "/Recently Added" ? " active" : ""
              }`}
            >
              Recently Added
            </Link>
            <Link
              to="/MyList"
              className={`nav-link${
                location.pathname === "/MyList" ? " active" : ""
              }`}
            >
              MyList
            </Link>
          </ul>
          <div className="d-flex align-items-center text-white">
            <i className="bi bi-search icons text-white"></i>
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons text-white"></i>
            <i className="bi bi-person-circle icons text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
