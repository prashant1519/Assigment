import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import { TbMoneybag } from "react-icons/tb";
import { BiDownArrowAlt } from "react-icons/bi";

const FourBox = () => {
  return (
    <div className="four-main">
      <div className="four-boxes">
        <div className="four-circle">
          <FiDollarSign className="four-icon" />
        </div>
        <div className="beside-circle">
          <div className="beside-circle-inner-div1">
            <p style={{ paddingRight: "8vh", paddingTop: "2vh" }}>Earnings</p>
          </div>
          <div className="beside-circle-inner-div2">
            <b style={{ paddingRight: "11vh" }}>$198.k</b>
          </div>
          <div className="percentage-main">
            <div className="percentage-div1" style={{ color: "#7ac995" }}>
              <BiDownArrowAlt />
              37%
            </div>
            <div className="percentage-div2">this month</div>
          </div>
        </div>
      </div>

      <div className="four-boxes">
        <div className="four-circle1">
          <CgNotes className="four-icon1" />
        </div>
        <div className="beside-circle">
          <div className="beside-circle-inner-div1">
            <p style={{ paddingRight: "8vh", paddingTop: "2vh" }}>Orders</p>
          </div>
          <div className="beside-circle-inner-div2">
            <b style={{ paddingRight: "11vh" }}>$2.4k</b>
          </div>
          <div className="percentage-main">
            <div className="percentage-div1">
              <BiDownArrowAlt />
              2%
            </div>
            <div className="percentage-div2">this month</div>
          </div>
        </div>
      </div>

      <div className="four-boxes">
        <div className="four-circle2">
          <TbMoneybag className="four-icon2" />
        </div>
        <div className="beside-circle">
          <div className="beside-circle-inner-div1">
            <p style={{ paddingRight: "8vh", paddingTop: "2vh" }}>Balance</p>
          </div>
          <div className="beside-circle-inner-div2">
            <b style={{ paddingRight: "11vh" }}>$2.4k</b>
          </div>
          <div className="percentage-main">
            <div className="percentage-div1">
              <BiDownArrowAlt />
              2%
            </div>
            <div className="percentage-div2">this month</div>
          </div>
        </div>
      </div>

      <div className="four-boxes">
        <div className="four-circle3">
          <SlHandbag className="four-icon3" />
        </div>
        <div className="beside-circle">
          <div className="beside-circle-inner-div1">
            <p style={{ paddingRight: "8vh", paddingTop: "2vh" }}>Total Sale</p>
          </div>
          <div className="beside-circle-inner-div2">
            <b style={{ paddingRight: "11vh" }}>$2.4k</b>
          </div>
          <div className="percentage-main">
            <div className="percentage-div1" style={{ color: "#40bb71" }}>
              <BiDownArrowAlt />
              11%
            </div>
            <div className="percentage-div2">this week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourBox;
