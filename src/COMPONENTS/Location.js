import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Personalinformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const Personalinfromation = () => {






 ///////////////////////////// /////get api getmastercategories/////////////////////////////////////////////////////////////

 const [category, setCategory] = useState([]);
 useEffect(() => {
   fetch("http://174.138.101.222:8080/get-states").then((result) => {
     result.json().then((resp) => {
       setCategory(resp.data);
     });
   });
 }, []);
 console.log(category);

 ////////////////////////////////////////////////// /////get api getmastercategories/////////////////////////////////////////////////////////////















  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };



  const [step, setStep] = useState(3);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const initialValues = {
    countries:"",
    states:"",
    division:"",
    district:"",
    sub_division:"",
    tahsil:"",
    Town:"",
    Hindi:"",
    English:"",
    url:"",
   
   
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://174.138.101.222:8080/masterlocation",
        values
      );
      alert(response.statusText);
      // navigate("/dashboard");
      // setEmail("");
      // setPassword("");
    } catch (error) {
      alert(error.request.responseText);
    }
  };

  console.log(values);

  // Render different form screens based on the current step
  const renderFormScreen = () => {
    switch (step) {
     
     
      case 3:
        return (
          <div className="personalcontainer">
            <p className="personaltext"></p>
            <div className="formbox">
              <div className="formbox1">
                {/* <TextField
                  id="standard-basic"
                  label="Countries *"
                  name="countries"
                  value={values.countries}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                /> */}


                <FormControl className="FormControl">
          <InputLabel
            style={{ fontFamily: "Rooboto" }}
            id="demo-simple-select-helper-label"
          >
            Countries
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="PLATFORM"
            placeholder="Countries"
            name="category"
            style={{ fontFamily: "Rooboto" }}
            value={values.category}
            onChange={handleInputChange}
          >
            {category.map((item) => {
              return (
                <MenuItem value={item.country}>
                  {item.country}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>




{/*                 
                <TextField
                  id="standard-basic"
                  label="States *"
                  name="states"
                  value={values.states}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                /> */}


                <FormControl className="FormControl">
          <InputLabel
            style={{ fontFamily: "Rooboto" }}
            id="demo-simple-select-helper-label"
          >
            States
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="PLATFORM"
            placeholder="States"
            name="States"
            style={{ fontFamily: "Rooboto" }}
            value={values.category}
            onChange={handleInputChange}
          >
            {category.map((item) => {
              return (
                <MenuItem value={item.states}>
                  {item.states}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>



                <TextField
                  id="standard-basic"
                  label="Division   *"
                  name="division"
                  value={values.division}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="District   *"
                  name="district"
                  value={values.district}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Sub Division  *"
                  name="sub_division"
                  value={values.sub_division}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Tahsil   *"
                  name="tahsil"
                  value={values.tahsil}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Town   *"
                  name="Town"
                  value={values.Town}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
               
              </div>
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="Hindi*"
                  name="Hindi"
                  value={values.Hindi}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Englis*"
                  name="English"
                  value={values.English}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="URL *"
                  name="url"
                  value={values.url}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button style={{fontFamily:'Rooboto'}} className="btn personalbtn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };


  const [style, setStyle] = useState("main-menu");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === 'main-menu') {
        setStyle('main-menu-1')
      } else setStyle('main-menu')
    });
  };


  return (
    <>
      <div className="rolebasedcontainer">
      <nav className={style}>
          <Navbar />
        </nav>
        <div className="rolebasedbox2">
          <div className="rolebasedheader">
             <h1>
              <span>
                <HiOutlineArrowSmallLeft onClick={back} />
              </span>
              <span style={{ fontSize: "60%" ,fontFamily:'Rooboto' }}>LOCATION</span>
            </h1>
          </div>
          
          <form onSubmit={handleSubmit}>{renderFormScreen()}</form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
