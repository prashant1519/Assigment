import React from "react";
import { BsSearch } from "react-icons/bs";
import FourBox from "./FourBox";
import Mid from "./Mid";
import Footer from "./Footer";
import FooterEnd from "./FooterEnd";

const Graph = () => {
  return (
    <div>
      <div className="header">
        <div>
          <b style={{ fontSize: "20px" }}>Hello Shahkukh</b>
          <span>
            <img
              style={{ height: "3vh", width: "2em" }}
              src="https://designseat.netlify.app/images/hand+slap+emoji-2.jpg"
              alt=""
            />
            ,
          </span>
        </div>

        <div>
          <div className="header-search">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "3vh",
                  width: "2vw",
                  // border: "1px solid green",
                  marginTop: "0.5vh",
                }}
              >
                <BsSearch />
              </div>

              <div
                style={{
                  height: "3vh",
                  width: "4vw",
                  // border: "1px solid green",
                  marginTop: "0.2vh",
                }}
              >
                search
              </div>
            </div>
          </div>
        </div>
      </div>

      <FourBox />
      <Mid />
      <Footer />
      <FooterEnd />
    </div>
  );
};

export default Graph;
