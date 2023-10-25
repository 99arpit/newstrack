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
  const back = () => {
    navigate(-1);
  };

  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // New state variable for search query
  const [searchQuery, setSearchQuery] = useState("");

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/GetLocations`
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

  const deleteItem = (itemId) => {
    axios
      .delete(`http://174.138.101.222:8080/${itemId}/deleteLocations/`)
      .then((response) => {
        console.log(response);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter data based on the search query
  const filteredData = data.filter((item) => {
    return (
      item.Country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.States.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Division.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.District.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.SubDivision.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Tahsil.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Town.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.English.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.URL.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          <span style={{ fontFamily: "Rooboto" }}>Location List</span>
        </h1>

        {/* Step 3: Create a search bar */}

        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Handle search input
          />
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ fontFamily: "Rooboto" }}>S.No.</th>
              <th style={{ fontFamily: "Rooboto" }}>Countries</th>
              <th style={{ fontFamily: "Rooboto" }}>States</th>
              <th style={{ fontFamily: "Rooboto" }}>Division</th>
              <th style={{ fontFamily: "Rooboto" }}>District</th>
              <th style={{ fontFamily: "Rooboto" }}>Sub Division</th>
              <th style={{ fontFamily: "Rooboto" }}>Tahsil</th>
              <th style={{ fontFamily: "Rooboto" }}>Town</th>
              <th style={{ fontFamily: "Rooboto" }}>Hindi</th>
              <th style={{ fontFamily: "Rooboto" }}>English</th>
              <th style={{ fontFamily: "Rooboto" }}>URL</th>
              <th style={{ fontFamily: "Rooboto" }}>Update</th>
              <th style={{ fontFamily: "Rooboto" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td style={{ fontFamily: "Rooboto" }}>{index + 1}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.Country}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.States}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.Division}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.District}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.SubDivision}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.Tahsil}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.Town}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.Hindi}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.English}</td>
                  <td style={{ fontFamily: "Rooboto" }}>{item.URL}</td>
                  <td>
                    <div>
                      <span
                        className="pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/updatelocation", { state: item });
                        }}
                      >
                        <FaEdit />
                      </span>
                    </div>
                  </td>
                  <td>
                    <FaTrash onClick={() => deleteItem(item._id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div style={{ paddingLeft: "40%" }} className="pagination">
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(filteredData.length / itemsPerPage) },
            (_, index) => (
              <button style={{backgroundColor:'white' , color:'black'}}
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredData.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsApproval;
