import React, { useEffect, useState } from "react";
import "../CSS/AddSett.scss";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import "../CSS/Maindashboard.css";


const Epaper = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {};

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
      <div className="Epapermaincontainer">
      <nav className={style}>
          <Navbar />
        </nav>


        <div className="epaperbox2">
          <div className="epaperheader">
            <p  style={{fontFamily:'Rooboto'}} className="epaperheading">
              {" "}
              <ArrowBackIcon onClick={() => navigate(-1)} className="pointer" />
              ADVERTISMENT SETTINGS
            </p>
          </div>
          <Box
            component="div"
            sx={{
              mt: 15,
            }}
          >
            <Box
              component="grid"
              sx={{
                "& > :not(style)": { m: 2, width: "70ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl>
                <InputLabel  style={{fontFamily:'Rooboto'}}  id="demo-simple-select-helper-label">
                  Vendor Name
                </InputLabel>
                <Select 
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="NEWS PAPER"
                  onChange={handleChange}
                >
                  <MenuItem  style={{fontFamily:'Rooboto'}}  value={30}>vendor name</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel  style={{fontFamily:'Rooboto'}}  id="demo-simple-select-helper-label">
                  Template
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="NEWS PAPER"
                  onChange={handleChange}
                >
                  <MenuItem  style={{fontFamily:'Rooboto'}} value={30}>Template</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel  style={{fontFamily:'Rooboto'}}  id="demo-simple-select-helper-label">
                  Page Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="NEWS PAPER"
                  onChange={handleChange}
                >
                  <MenuItem  style={{fontFamily:'Rooboto'}} value={30}>Home Page</MenuItem>
                  <MenuItem  style={{fontFamily:'Rooboto'}} value={30}>Category</MenuItem>
                  <MenuItem  style={{fontFamily:'Rooboto'}} value={30}>News Page</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <div className="bottom"></div>
          {/* <div className="chackbok">
            Top Box <input type="checkbox" />
          </div>

          <div className="chackbok">
            Below Category <input type="checkbox" />
          </div>
          <div className="chackbok">
            Between Category <input type="checkbox" />
          </div> */}

          <div>
            <div class="ar">
              <div style={{fontFamily:'Rooboto'}}  class="box">Top Box </div>
              <div class="in">
                <input type="checkbox" />
              </div>
            </div>
            <div class="ar">
              <div  style={{fontFamily:'Rooboto'}} class="box">Below Category</div>
              <div class="in1">
                <input type="checkbox" />
              </div>
            </div>
            <div class="ar">
              <div style={{fontFamily:'Rooboto'}}  class="box">Between Category</div>
              <div class="in2">
                <input type="checkbox" />
              </div>
            </div>

            <div class="ar">
              <div  style={{fontFamily:'Rooboto'}}  class="box">Footer</div>
              <div class="in3">
                <input type="checkbox" />
              </div>
            </div>


            
          </div>
          {/* <div className="chackbok">   Top   <input type="checkbox" /></div> */}

          <button style={{fontFamily:'Rooboto'}}  className="btn btn-primary btn-lg epaperbtn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Epaper;
