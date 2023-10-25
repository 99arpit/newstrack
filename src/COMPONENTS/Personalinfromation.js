import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Personalinformation.css";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useLocation, useNavigate } from "react-router-dom";

const Personalinfromation = () => {



  const [Country, setCountry] = useState("");
  const [States, setStates] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };













  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const initialValues = {
    user_name: "",
    first_name: "",
    last_name: "",
    user_role: "",
    byline: "",
    password: "",
    middle_name: "",
    department: "",
    user_superior: "",
    display_name: "",
    mobile_1: 0,
    mobile_2: 0,
    address: "",
    pin_code: 0,
    email: "",
    email_1: "",
    

    Country: "",
    States: "",
    Division: "",
    District: "",
    SubDivision: "",
    Tahsil: "",
    Town: "",






    user_image: "",
    social_facebook: "",
    social_linkedin: "",
    user_BIO: "",
    social_twitter: "",
    social_instagram: "",
    
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
        "http://174.138.101.222:8080/user-role",
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



















  /////get api LOCATION///

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://174.138.101.222:8080/getmasterlocation").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);

  /////

  // Render different form screens based on the current step
  const renderFormScreen = () => {
    switch (step) {
      case 1:
        return (
          <div className="personalcontainer">
            <p style= {{fontFamily:'Rooboto'}} className="personaltext">LOGIN & NAME</p>
            <div className="formbox">
              <div className="formbox1">
                <TextField  
                  id="standard-basic"
                  label="USER NAME *"
                  name="user_name"
                  value={values.user_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="FIRST NAME *"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="LAST NAME *"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER ROLE *"
                  name="user_role"
                  value={values.user_role}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="SHOW HIS NAME (BYLINE) *"
                  name="byline"
                  value={values.byline}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
              </div>
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="PASSWORD *"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="MIDDLE NAME *"
                  name="middle_name"
                  value={values.middle_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="DEPARTMENT *"
                  name="department"
                  value={values.department}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER SUPERIOR *"
                  name="user_superior"
                  value={values.user_superior}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="DISPLAY NAME *"
                  name="display_name"
                  value={values.display_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button  style= {{fontFamily:'Rooboto'}} className=" btn  personalbtn" onClick={goToNextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="personalcontainer">
            <p  style= {{fontFamily:'Rooboto'}}className="personaltext">CONTACT DETAILS</p>
            <div className="formbox">
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="EMAIL *"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="EMAIL 1*"
                  name="email_1"
                  value={values.email_1}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="MOBILE 1 *"
                  name="mobile_1"
                  value={values.mobile_1}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="MOBILE 2 *"
                  name="mobile_2"
                  value={values.mobile_2}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="RESIDENCE ADDRESS*"
                  name="address"
                  value={values.address}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="PIN CODE *"
                  name="pin_code"
                  value={values.pin_code}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button  style= {{fontFamily:'Rooboto'}} className="btn previousbtn" onClick={goToPreviousStep}>
                  Previous
                </button>
              </div>
              <div className="formbox1">
                {/* <FormControl>
                  <InputLabel  style= {{fontFamily:'Rooboto'}} id="demo-simple-select-helper-label">
                    COUNTRIES
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="CATEGORY"
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em  style= {{fontFamily:'Rooboto'}}>None</em>
                    </MenuItem>
                    {data?.data?.map((item) => (
                      <MenuItem key={item._id} value={item.countries}>
                        {item.countries}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}


                {/* <FormControl className="FormControl">
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
 */}




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
















                <button  style= {{fontFamily:'Rooboto'}} className="btn personalbtn" onClick={goToNextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="personalcontainer">
            <p  style= {{fontFamily:'Rooboto'}} className="personaltext">SOCIAL & BIO</p>
            <div className="formbox">
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="USER IMAGE *"
                  name="user_image"
                  value={values.user_image}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER SOCIAL FB *"
                  name="social_facebook"
                  value={values.social_facebook}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER SOCIAL LINKDIN   *"
                  name="social_linkedin"
                  value={values.social_linkedin}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button  style= {{fontFamily:'Rooboto'}}className="btn previousbtn" onClick={goToPreviousStep}>
                  Previous
                </button>
              </div>
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="USER BIO *"
                  name="user_BIO"
                  value={values.user_BIO}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER SOCIAL TWITTER*"
                  name="social_twitter"
                  value={values.social_twitter}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="USER SOCIAL INSTA *"
                  name="social_instagram"
                  value={values.social_instagram}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <button  style= {{fontFamily:'Rooboto'}}className="btn personalbtn" type="submit">
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
            <p className="rolebasedheading">
              <div>
                <h1>
                  {/* <span>
                    <HiOutlineArrowSmallLeft
                      onClick={back}
                      // className="pointertable"
                    />
                  </span> */}
                  <span
                    style={{ fontSize: "60%", fontFamily: "Roboto" }}
                  >
                    ROLE BASED USER
                  </span>
                </h1>
              </div>
            </p>
          </div>
          <div className="col-sm-12 buttongroup">
            <button
            style={{ fontFamily: "Roboto"}}
              onClick={() => setStep(1)}
              class="btn rolebtn"
              type="submit"
            >
              LOGIN & NAME
            </button>
            <button             style={{ fontFamily: "Roboto"}}

              onClick={() => setStep(2)}
              class="btn  rolebtn"
              type="submit"
            >
              CONTACT DETAILS
            </button>
            <button             style={{ fontFamily: "Roboto"}}

              onClick={() => setStep(3)}
              class="btn  rolebtn"
              type="submit"
            >
              SOCIAL & BIO
            </button>
          </div>
          <form onSubmit={handleSubmit}>{renderFormScreen()}</form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
