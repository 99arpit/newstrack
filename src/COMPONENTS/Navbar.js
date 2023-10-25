import React from "react";
import "../CSS/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsApproval from "./News-Approval";
import images from "./Image/1.jpg";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* <div className="navbarcontainer bg-dark"> */}
      {/* <img src="\images\newspaperwala logo (1).png" className="newslogo" />

        <Link to={"/dashboard"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            MAIN DASHBOARD
          </p>
        </Link> */}

      {/* REGISTRATION DROPDOWN START  */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            REGISTRATION
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/role">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                ROLE BASED USER
              </p>
            </Link>
            <Link to="/vendor">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                VENDOR REGISTRATION
              </p>
            </Link>
          </div>
        </div> */}

      {/* REGISTRATION DROPDOWN END  */}

      {/* POST NEWS DROPDOWN START  */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            POST NEWS
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           
            <Link
              to={"/news-approval"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              APPROVE NEWS
            </Link>
            <Link
              to={"/addNewsArticle"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              ADD NEWS ARTICLE
            </Link>
          
          </div>
        </div>  */}

      {/* POST NEWS DROPDOWN END  */}

      {/* AD MANAGEMENT DROPDOWN START  */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AD MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              to={"/create-ad"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              CREATE AN AD
            </Link>
          </div>
        </div> */}

      {/* AD MANAGEMENT DROPDOWN END  */}

      {/* ROLES DROPDOWN START  */}
      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ROLES
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
         
            <Link
              to={"/RoleManagement"}
              className="dropdown-item"
              style={{ fontFamily: "Roboto" }}
            >
              ROLES MANAGEMENT
            </Link>
            
          </div>
        </div> */}

      {/* ROLES DROPDOWN END  */}

      {/* E-PAPER DROPDOWN START  */}

      {/* <div className="dropdown dropdowns">
          <Link to={"/epaper"}>
            <p style={{ fontFamily: "Roboto" }} className="epaper">
              E-PAPER
            </p>
          </Link>
          
        </div> */}

      {/* E-PAPER DROPDOWN END  */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MASTER
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/categorys">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Category
              </p>
            </Link>
            <Link to="/tags">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Tags
              </p>
            </Link>
            <Link to="/location">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Location
              </p>
            </Link>
          </div>
        </div> */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            LISTING
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/rolebaseduserlist">
              {" "}
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Role Based User List
              </p>
            </Link>
            <Link to="/vendorregistrationlist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Vendor Registration List
              </p>
            </Link>
            <Link to="/categorylist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Category List
              </p>
            </Link>
            <Link to="/taglist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Tag List
              </p>
            </Link>
            <Link to="/advertisementlist">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Advertisement List
              </p>
            </Link>
          </div>
        </div> */}

      {/* <div className="dropdown dropdowns">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            SETTING
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/templatesett">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Template
              </p>
            </Link>
            <Link to="/advertisement">
              <p style={{ fontFamily: "Roboto" }} className="dropdown-item">
                Advertisement Setting
              </p>
            </Link>
           
          </div>
        </div> */}

      {/* <Link to={"/Template_selection"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            TEMPLATE SELECTION
          </p>
        </Link> */}

      {/* <Link onClick={logout} to={"/"}>
          <p style={{ fontFamily: "Roboto" }} className="dashboard">
            LOGOUT
          </p>
        </Link>
      </div> */}

      <ul>
        <li>
          <a href="#" style={{ marginBottom: "52px" }}>
            <i
              class="fa-solid fa-audio-description"
              style={{ display: "block", marginTop: "54px" }}
            ></i>
            <span class="nav-text">
              <img src={images} className="newslogo px-2" />
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-home nav-icon"></i>
            <span class="nav-text">
              {" "}
              <Link to={"/dashboard"}>
                <p style={{ fontFamily: "Roboto" }} className="dashboard">
                  MAIN DASHBOARD
                </p>
              </Link>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-image nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  REGISTRATION
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/role">
                    {" "}
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      ROLE BASED USER
                    </p>
                  </Link>
                  <Link to="/vendor">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      VENDOR REGISTRATION
                    </p>
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-newspaper nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  POST NEWS
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to={"/news-approval"}
                    className="dropdown-item"
                    style={{ fontFamily: "Roboto" }}
                  >
                    APPROVE NEWS
                  </Link>
                  <Link
                    to={"/addNewsArticle"}
                    className="dropdown-item"
                    style={{ fontFamily: "Roboto" }}
                  >
                    ADD NEWS ARTICLE
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-pen nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  AD MANAGEMENT
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to={"/create-ad"}
                    className="dropdown-item"
                    style={{ fontFamily: "Roboto" }}
                  >
                    CREATE AN AD
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-envelope nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ROLES
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to={"/RoleManagement"}
                    className="dropdown-item"
                    style={{ fontFamily: "Roboto" }}
                  >
                    ROLES MANAGEMENT
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-bell nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <Link to={"/epaper"}>
                  <p style={{ fontFamily: "Roboto" }} className="epaper">
                    E-PAPER
                  </p>
                </Link>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa-solid fa-layer-group nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MASTER
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/categorys">
                    {" "}
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Category
                    </p>
                  </Link>
                  <Link to="/tags">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Tags
                    </p>
                  </Link>
                  <Link to="/location">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Location
                    </p>
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa-solid fa-list nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  LISTING
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/allRole">
                    {" "}
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Role List
                    </p>
                  </Link>
                  <Link to="/rolebaseduserlist">
                    {" "}
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Role Based User List
                    </p>
                  </Link>
                  <Link to="/vendorregistrationlist">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Vendor Registration List
                    </p>
                  </Link>
                  <Link to="/categorylist">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Category List
                    </p>
                  </Link>
                  <Link to="/taglist">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Tag List
                    </p>
                  </Link>
                  <Link to="/advertisementlist">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Advertisement List
                    </p>
                  </Link>
                  <Link to="/locationlist">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Location List
                    </p>
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa-solid fa-gear nav-icon"></i>
            <span class="nav-text">
              <div className="dropdown dropdowns">
                <p
                  style={{ fontFamily: "Roboto" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SETTING
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/templatesett">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Template
                    </p>
                  </Link>
                  <Link to="/advertisement">
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="dropdown-item"
                    >
                      Advertisement Setting
                    </p>
                  </Link>
                </div>
              </div>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa-solid fa-folder nav-icon"></i>
            <span class="nav-text">
              <Link to={"/Template_selection"}>
                <p style={{ fontFamily: "Roboto" }} className="dashboard">
                  TEMPLATE SELECTION
                </p>
              </Link>
            </span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa-solid fa-right-to-bracket nav-icon"></i>
            <span class="nav-text">
              <Link onClick={logout} to={"/"}>
                <p style={{ fontFamily: "Roboto" }} className="dashboard">
                  LOGOUT
                </p>
              </Link>
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
