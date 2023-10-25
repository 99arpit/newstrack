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


  const [Country, setCountry] = useState("");
  const [States, setStates] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  // const countriesData =[
  //   {"_id":"652a3dbb0caa073019c8ea6d","country":"Afghanistan","alpha2Code":"AF","alpha3Code":"AFG","numberCode":"004","states":["Badakhshan","Badghis","Baghlan","Balkh","Bamian","Daykondi","Farah","Faryab","Ghazni","Ghowr","Helmand","Herat","Jowzjan","Kabul","Kandahar","Kapisa","Khost","Konar","Kondoz","Laghman","Lowgar","Nangarhar","Nimruz","Nurestan","Oruzgan","Paktia","Paktika","Panjshir","Parvan","Samangan","Sar-e Pol","Takhar","Vardak","Zabol"],"__v":0},
  //   {"_id":"652a3dbb0caa073019c8ea6e","country":"Albania","alpha2Code":"AL","alpha3Code":"ALB","numberCode":"008","states":["Berat","Dibres","Durres","Elbasan","Fier","Gjirokastre","Korce","Kukes","Lezhe","Shkoder","Tirane","Vlore"],"__v":0}
  // ]

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
    Country: "",
    States: "",
    Division: "",
    District: "",
    SubDivision: "",
    Tahsil: "",
    Town: "",
    Hindi: "",
    English: "",
    URL: "",
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
        `http://174.138.101.222:8080/Locations`,
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
                {/* <div> */}
                {/* <label>Select Country:</label> */}
                {/* <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select a Country</option>
        {category.map((country) => (
          <option key={country.alpha3Code} value={country.alpha3Code}>
            {country.country}
          </option>
        ))}
      </select> */}

                {/* {selectedCountry && (
        <div>
          <label>Select State:</label>
          <select onChange={(e) => setSelectedState(e.target.value)} value={selectedState}>
            <option value="">Select a State</option>
            {category
              .find((country) => country.alpha3Code === selectedCountry)
              .states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>
      )} */}
                {/* </div> */}

                {/* <FormControl className="FormControl"> */}
                {/* <Select
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
          </Select> */}

                <select
                  onChange={handleCountryChange}
                  value={Country}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="PLATFORM"
                  placeholder="Countries"
                  name="Country"
                  style={{ fontFamily: "Rooboto", height: "40px" }}
                  // value={values.Country}
                >
                  <option value="">Select a Country</option>
                  {category.map((country) => (
                    <option key={country.alpha3Code} value={country.alpha3Code}>
                      {country.country}
                    </option>
                  ))}
                </select>
                {/* </FormControl> */}

                {/* <FormControl className="FormControl"> */}
                <div>
                  {Country && (
                    <div>
                      <label>Select State:</label>
                      <select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="PLATFORM"
                        placeholder="Countries"
                        name="States"
                        style={{
                          fontFamily: "Rooboto",
                          height: "40px",
                          width: "100%",
                        }}
                        // value={values.States}
                        value={States}
                        onChange={(e) => setStates(e.target.value)}
                      >
                        <option value="">Select a State</option>
                        {category
                          .find((country) => country.alpha3Code === Country)
                          .states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* </FormControl> */}

                <TextField
                  id="standard-basic"
                  label="Division   *"
                  name="Division"
                  value={values.Division}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="District   *"
                  name="District"
                  value={values.District}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Sub Division  *"
                  name="SubDivision"
                  value={values.SubDivision}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Tahsil   *"
                  name="Tahsil"
                  value={values.Tahsil}
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
                  name="URL"
                  value={values.URL}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button
                  style={{ fontFamily: "Rooboto" }}
                  className="btn personalbtn"
                  type="submit"
                >
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
      if (prev === "main-menu") {
        setStyle("main-menu-1");
      } else setStyle("main-menu");
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
              <span style={{ fontSize: "60%", fontFamily: "Rooboto" }}>
                LOCATION
              </span>
            </h1>
          </div>

          <form onSubmit={handleSubmit}>{renderFormScreen()}</form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
