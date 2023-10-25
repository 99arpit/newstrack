import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const NewsApproval = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const back = () => {
    navigate(-1);
  };

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/listadvertisements`
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////delete api ////////////////////////////////
  function deleteUser(_id) {
    axios
      .delete(`http://174.138.101.222:8080/${_id}/delete-advertisements/`)
      .then((r) => {
        console.log(r);
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //////////////////////////////delete api end ////////////////////////////////

  //////////////// Pagination Functions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <nav className="main-menu">
        <Navbar />
      </nav>
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span style={{ fontFamily: "Rooboto" }}>Advertisement List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th style={{ fontFamily: "Rooboto" }}>S.No.</th>
              <th style={{ fontFamily: "Rooboto" }}>Vendor Name</th>
              <th style={{ fontFamily: "Rooboto" }}>Template</th>
              <th style={{ fontFamily: "Rooboto" }}>Page Location</th>
              <th style={{ fontFamily: "Rooboto" }}>Images</th>
              <th style={{ fontFamily: "Rooboto" }}>Edit</th>
              <th style={{ fontFamily: "Rooboto" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td style={{ fontFamily: "Rooboto" }}>
                    {index + 1 + indexOfFirstItem}
                  </td>
                  <td style={{ fontFamily: "Rooboto" }}>
                    {item.publisher_name}
                  </td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.templates}</td>
                  <td style={{ fontFamily: "Rooboto" }}>
                    {item.page_location}
                  </td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.image}</td>

                  <td style={{ fontFamily: "Rooboto" }}>
                    <div>
                      <span
                        className="pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/updateaddlist", { state: item });
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

        <div style={{ paddingLeft: "40%" }} className="pagination">
          <buttonn
            style={{ backgroundColor: "blue", color: "white",paddingTop:'1%' }}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </buttonn>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsApproval;
