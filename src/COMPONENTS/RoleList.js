import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const NewsApproval = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const superAdminId = localStorage.getItem("superAdminId");
  const superAdminToken = localStorage.getItem("superAdminToken");

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [drafts, setDrafts] = useState(null);
  const getDrafts = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/getAllRoles`,
        {
          headers: {
            Authorization: `Bearer ${superAdminToken}`,
          },
        }
      );
      console.log(response, "draft articles");
      setDrafts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrafts();
  }, []);

  const [style, setStyle] = useState("main-menu");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === "main-menu") {
        setStyle("main-menu-1");
      } else setStyle("main-menu");
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrafts =
    drafts && drafts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPageCount = Math.ceil(drafts?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <nav className={style}>
        <Navbar />
      </nav>
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>{" "}
          <span style={{ fontFamily: "Rooboto" }}>Role List</span>
        </h1>
        <table style={{ zIndex: "0" }}>
          <thead>
            <tr>
              <th style={{ fontFamily: "Rooboto" }}>S.No.</th>
              <th style={{ fontFamily: "Rooboto" }}>Role Name</th>
              <th style={{ fontFamily: "Rooboto" }}>Upload E Paper</th>
              <th style={{ fontFamily: "Rooboto" }}>Create New Post</th>
              <th style={{ fontFamily: "Rooboto" }}>Approve News</th>
              <th style={{ fontFamily: "Rooboto" }}>Place New Ad</th>
              <th style={{ fontFamily: "Rooboto" }}>Edit Ads</th>
              <th style={{ fontFamily: "Rooboto" }}>News Paper User Edit</th>
              <th style={{ fontFamily: "Rooboto" }}>
                View Registered News Paper
              </th>
              <th style={{ fontFamily: "Rooboto" }}>Template Assign</th>
              <th style={{ fontFamily: "Rooboto" }}>Template Edit</th>
              <th style={{ fontFamily: "Rooboto" }}>Self User</th>
              <th style={{ fontFamily: "Rooboto" }}>Meta Paramenters</th>
              <th style={{ fontFamily: "Rooboto" }}>Reports</th>
              <th style={{ fontFamily: "Rooboto" }}>Revenue</th>
              <th style={{ fontFamily: "Rooboto" }}>View/Edit</th>
              {/* ... other table headers ... */}
            </tr>
          </thead>
          {currentDrafts &&
            currentDrafts.map((item, index) => {
              const itemNumber = indexOfFirstItem + index + 1;
              return (
                <tbody key={item?._id}>
                  <tr>
                  <td style={{ fontFamily: "Rooboto" }}>{itemNumber}</td>
                    <td style={{ fontFamily: "Rooboto" }}>{item.role_name}</td>

                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Upload_E_Paper ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Create_New_Post ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Approve_News ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Place_New_Ad ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Edit_Already_Palaced_Ads ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.News_Paper_User_Edit ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.News_Paper_User_View ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Template_Assign ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Template_assigned_Edit ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Self_User_View ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Meta_Parameters_for_categories ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Reports ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.Revenue_Input_for_each_partner ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                    <td style={{ fontFamily: "Rooboto" }}>
                      {item.View_Update ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose style={{ color: "red" }} />
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          <tfoot></tfoot>
        </table>
        <div className="pagination" style={{ paddingLeft: "43%" }}>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPageCount }, (_, index) => (
            <button
              key={index} style={{color:'black',backgroundColor:'white'}}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            style={{ backgroundColor: "blue", color: "white", }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPageCount}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsApproval;
