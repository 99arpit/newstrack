import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const NewsApproval = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [style, setStyle] = useState("main-menu");
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const back = () => {
    navigate(-1);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/UserRoleList`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (_id) => {
    axios
      .delete(`http://174.138.101.222:8080/${_id}/deleteUserRole/`)
      .then((r) => {
        console.log(r);
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === "main-menu") {
        setStyle("main-menu-1");
      } else setStyle("main-menu");
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav className={style}>
        <Navbar />
      </nav>
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span style={{ fontFamily: "Rooboto" }}>Role Based User List</span>
        </h1>

        {/* Add a search input field */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by First Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ fontFamily: "Rooboto" }}>User Name</th>
              <th style={{ fontFamily: "Rooboto" }}>First Name</th>
              <th style={{ fontFamily: "Rooboto" }}>Middle Name</th>
              <th style={{ fontFamily: "Rooboto" }}>Last Name</th>
              <th style={{ fontFamily: "Rooboto" }}>Department</th>
              <th style={{ fontFamily: "Rooboto" }}>User Role</th>
              <th style={{ fontFamily: "Rooboto" }}>Email</th>
              <th style={{ fontFamily: "Rooboto" }}>Mobile</th>
              <th style={{ fontFamily: "Rooboto" }}>Residential Address</th>
              <th style={{ fontFamily: "Rooboto" }}>Edit</th>
              <th style={{ fontFamily: "Rooboto" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td style={{ fontFamily: "Rooboto" }}>{index + 1}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.first_name}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.middle_name}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.last_name}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.department}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.user_role}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.email_1}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.mobile_1}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.address}</td>
                  <td style={{ fontFamily: "Rooboto" }}>
                    <div>
                      <span
                        className="pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/updaterolebaseduserlist", {
                            state: item,
                          });
                        }}
                      >
                        <FaEdit />
                      </span>
                    </div>
                  </td>
                  <td style={{ fontFamily: "Rooboto" }}>
                    <FaTrash onClick={() => deleteUser(item._id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pagination" style={{ paddingLeft: "42%" }}>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
            style={{color:'black',backgroundColor:'white'}}
              key={number}
              onClick={() => paginate(number)}
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsApproval;
