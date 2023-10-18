import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-div1">
        <div className="footer-div1-box1">
          <b style={{ fontSize: "20px" }}>Product Sell</b>
        </div>
        <div className="footer-div1-box1">
          <p>Product Name</p>
        </div>
      </div>

      <div className="footer-div2">
        <div className="footer-div1">
          <div className="footer-search">
            <div className="footer-search-seachicon">
              <BsSearch
                style={{
                  alignItems: "center",
                  marginTop: "1vh",
                  marginLeft: "3vh",
                }}
              />
            </div>
            <div className="footer-search-div" style={{ paddingRight: "4vw" }}>
              Search
            </div>
          </div>

          <div className="footer-search">
            <div className="footer-search-div">
              <p>stock</p>
            </div>
            <div className="footer-search-div">
              <p>price</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-div3">
        <div className="footer-search-last">
          <div className="footer-search-div">last 30 days</div>
          <div className="footer-search-seachicon">
            <RiArrowDropDownLine style={{ marginRight: "2vw" }} />
          </div>
        </div>
        <div className="footer-div1-last">
          <p>Total Sale</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
