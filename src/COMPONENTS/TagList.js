// import React, { useEffect, useState } from "react";
// import "../CSS/TagList.scss";
// import Navbar from "./Navbar";
// import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaEdit } from "react-icons/fa";
// import { FaTrash } from "react-icons/fa";

// const NewsApproval = () => {
//   const navigate = useNavigate();
//   const itemsPerPage = 10; // Number of items to display per page
//   const [currentPage, setCurrentPage] = useState(1);

//   const back = () => {
//     navigate(-1);
//   };

//   const [data, setData] = useState([]);
//   const getData = async () => {
//     try {
//       const response = await axios.get(
//         `http://174.138.101.222:8080/getmastertag`
//       );
//       setData(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage + 1; // Start from 11 on the second page
//   const endIndex = startIndex + itemsPerPage - 1;

//   //////////////////////////////delete api ////////////////////////////////

//   function deleteUser(_id) {
//     axios
//       .delete(`http://174.138.101.222:8080/${_id}/deleteTag/`)
//       .then((r) => {
//         console.log(r);
//         getData();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   //////////////////////////////////////////delete api////////////////////

//   const [style, setStyle] = useState("main-menu");

//   const changeStyle = () => {
//     setStyle((prev) => {
//       if (prev === "main-menu") {
//         setStyle("main-menu-1");
//       } else setStyle("main-menu");
//     });
//   };

//   return (
//     <>
//       <nav className={style}>
//         <Navbar />
//       </nav>{" "}
//       <div>
//         <div className="parentContainertableu">
//           <h1>
//             <span>
//               <HiOutlineArrowSmallLeft
//                 onClick={back}
//                 className="pointertable"
//               />
//             </span>
//             <span style={{ fontFamily: "Rooboto" }}>Tag List</span>
//           </h1>
//         </div>

//         <div className="parentContainertable">
//           <table>
//             <thead>
//               <tr>
//                 <th style={{ fontFamily: "Rooboto" }}>S.No.</th>
//                 <th style={{ fontFamily: "Rooboto" }}>Tag List</th>
//                 <th style={{ fontFamily: "Rooboto" }}>Update</th>
//                 <th style={{ fontFamily: "Rooboto" }}>Delete</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.slice(startIndex - 1, endIndex).map((item, index) => {
//                 return (
//                   <tr key={item._id}>
//                     <td style={{ fontFamily: "Rooboto" }}>
//                       {startIndex + index}
//                     </td>
//                     <td style={{ fontFamily: "Rooboto" }}>{item.tag_name}</td>
//                     <td style={{ fontFamily: "Rooboto" }}>
//                       <div>
//                         <span
//                           className="pointer"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate("/updatetaglist", { state: item });
//                           }}
//                         >
//                           <FaEdit />
//                         </span>
//                       </div>
//                     </td>
//                     <td style={{ fontFamily: "Rooboto" }}>
//                       <FaTrash onClick={() => deleteUser(item._id)} />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           <div
//             className="pagination"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               paddingTop: "5%",
//             }}
//           >
//             <button
//               style={{ backgroundColor: "blue", color: "white" }}
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span className="page-number">Page {currentPage}</span>
//             <button
//               style={{ backgroundColor: "blue", color: "white" }}
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={endIndex >= data.length}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsApproval;































import React, { useEffect, useState } from "react";
import "../CSS/TagList.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const NewsApproval = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const back = () => {
    navigate(-1);
  };

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/getmastertag`
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.tag_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = startIndex + itemsPerPage - 1;

  function deleteUser(_id) {
    axios
      .delete(`http://174.138.101.222:8080/${_id}/deleteTag/`)
      .then((r) => {
        console.log(r);
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const [style, setStyle] = useState("main-menu");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === "main-menu") {
        setStyle("main-menu-1");
      } else setStyle("main-menu");
    });
  };

  const handlePageChange = (page) => {
        setCurrentPage(page);
      };



  return (
    <>
      <nav className={style}>
        <Navbar />
      </nav>
      <div>
        <div className="parentContainertableu">
          <h1>
            <span>
              <HiOutlineArrowSmallLeft onClick={back} className="pointertable" />
            </span>
            <span style={{ fontFamily: "Rooboto" }}>Tag List</span>
          </h1>
        <div style={{paddingTop:'2%'}}>
        <input

            type="text"
            placeholder="Search Tag Nmae"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
         
        </div>

        <div className="parentContainertable">
          <table>
            <thead>
              <tr>
                <th style={{ fontFamily: "Rooboto" }}>S.No.</th>
                <th style={{ fontFamily: "Rooboto" }}>Tag List</th>
                <th style={{ fontFamily: "Rooboto" }}>Update</th>
                <th style={{ fontFamily: "Rooboto" }}>Delete</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.slice(startIndex - 1, endIndex).map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td style={{ fontFamily: "Rooboto" }}>{startIndex + index}</td>
                    <td style={{ fontFamily: "Rooboto" }}>{item.tag_name}</td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updatetaglist", { state: item });
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

          <div
            className="pagination"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "5%",
            }}
          >
            <button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="page-number">Page {currentPage}</span>
            <button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= filteredData.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsApproval;
