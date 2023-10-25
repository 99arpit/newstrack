import React from "react";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import "../CSS/UC.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

function UpdateCat() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const [values, setValues] = useState(location.state);

  const [Country, setCountry] = useState("");
  const [District, setDistrict] = useState("");
  const [Division, setDivision] = useState("");
  const [English, setEnglish] = useState("");
  const [Hindi, setHindi] = useState("");
  const [States, setStates] = useState("");
  const [SubDivision, setSubDivision] = useState("");
  const [Tahsil, setTahsil] = useState("");

  const [Town, setTown] = useState("");
  const [URL, setURL] = useState("");

  const getvalue = () => {
    setCountry(values.Country);
    setDistrict(values.District);
    setDivision(values.Division);
    setEnglish(values.English);
    setHindi(values.Hindi);
    setStates(values.States);
    setSubDivision(values.SubDivision);
    setTahsil(values.Tahsil);

    setTown(values.Town);
    setURL(values.URL);
  };
  useEffect(() => {
    getvalue();
  }, []);

  const handleSubmit = async () => {
    let item = {
      Country,
      District,
      Division,
      English,
      Hindi,
      States,
      SubDivision,
      Tahsil,
      Town,
      URL,
    };
    console.log("handleSubmit clicked", item);
    const apiEndpoint =
      // http://174.138.101.222:8080/652a493a96bb75015cd5aa78/updateLocations

      "http://174.138.101.222:8080/" + values._id + "/updateLocations";
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json().then((data) => {
            alert("Update");
            navigate("/updatelocation");
          });
        } else if (response.status === 400) {
          return response.json().then((data) => {
            alert("data not added");
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [style, setStyle] = useState("main-menu");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === "main-menu") {
        setStyle("main-menu-1");
      } else setStyle("main-menu");
    });
  };

  return (
    <>
      <nav className={style}>
        <Navbar />
      </nav>
      <div className="parentContainer">
        <h1>
          <span className="pointer" onClick={() => navigate(-1)}>
            <HiOutlineArrowSmallLeft />
          </span>
          <span>Update Location</span>
        </h1>
        <div>
          {/* <p className="personaltext">Category</p> */}
          <div className="formbox">
            <div className="formbox1">
              <TextField
                id="standard-basic"
                label="Country *"
                name="Country"
                variant="standard"
                className="personalinput"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="District *"
                name="District"
                variant="standard"
                className="personalinput"
                value={District}
                onChange={(e) => setDistrict(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Division *"
                name="Division"
                variant="standard"
                className="personalinput"
                value={Division}
                onChange={(e) => setDivision(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="English *"
                name="English"
                variant="standard"
                className="personalinput"
                value={English}
                onChange={(e) => setEnglish(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Hindi *"
                name="Hindi"
                variant="standard"
                className="personalinput"
                value={Hindi}
                onChange={(e) => setHindi(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="States *"
                name="States"
                variant="standard"
                className="personalinput"
                value={States}
                onChange={(e) => setStates(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="SubDivision *"
                name="SubDivision"
                variant="standard"
                className="personalinput"
                value={SubDivision}
                onChange={(e) => setSubDivision(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Tahsil  *"
                name="Tahsil"
                variant="standard"
                className="personalinput"
                value={Tahsil}
                onChange={(e) => setTahsil(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Town *"
                name="Town"
                variant="standard"
                className="personalinput"
                value={Town}
                onChange={(e) => setTown(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="URL *"
                name="URL"
                variant="standard"
                className="personalinput"
                value={Town}
                onChange={(e) => setURL(e.target.value)}
              />

              <button className=" btn  personalbtn" onClick={handleSubmit}>
                Update{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCat;
