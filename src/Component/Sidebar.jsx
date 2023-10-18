import React from "react";
import { Box } from "@mui/material";
import { TbUserPentagon } from "react-icons/tb";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { BiMessageAltError } from "react-icons/bi";
import { GiStarProminences } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMathGreater, TbMoneybag } from "react-icons/tb";
import { PiKeyDuotone, PiArchiveBox } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="side-main">
        <div
          style={{
            height: "4vh",
            width: "15vw",
            // border: "1px solid green",
            marginTop: "3vh",
          }}
        >
          <span>
            <TbUserPentagon
              style={{ color: "white", marginRight: "2vh", fontSize: "3vh" }}
            />
          </span>
          <b style={{ fontSize: "3vh", color: "white" }}>Dashboard</b>
        </div>

        {/* <span>
          <TbUserPentagon
            style={{ color: "white", marginRight: "2vh", fontSize: "3vh" }}
          />
        </span>
        <b style={{ fontSize: "3vh", color: "white" }}>Dashboard</b> */}
        <List sx={{ width: "90%", maxWidth: 360, bgcolor: "#040440" }}>
          <ListItem className="Hover">
            <ListItemAvatar>
              <PiKeyDuotone style={{ marginLeft: "4vh", color: "grey" }} />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Dashboard" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
          <ListItem className="Hover">
            <ListItemAvatar>
              <PiArchiveBox style={{ marginLeft: "4vh", color: "grey" }} />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Product" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
          <ListItem className="Hover">
            <ListItemAvatar>
              <MdOutlineContactPhone
                style={{ marginLeft: "4vh", color: "grey" }}
              />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Customer" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
          <ListItem className="Hover">
            <ListItemAvatar>
              <TbMoneybag style={{ marginLeft: "4vh", color: "grey" }} />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Income" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
          <ListItem className="Hover">
            <ListItemAvatar>
              <GiStarProminences style={{ marginLeft: "4vh", color: "grey" }} />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Promote" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
          <ListItem className="Hover">
            <ListItemAvatar>
              <BiMessageAltError style={{ marginLeft: "4vh", color: "grey" }} />
            </ListItemAvatar>
            <ListItemText style={{ color: "grey" }} primary="Help" />
            <span>
              <TbMathGreater style={{ color: "grey", marginTop: "1vh" }} />
            </span>
          </ListItem>
        </List>

        <div className="manager-main">
          <div className="manager-img">
            <img
              className="image"
              src="https://tse4.mm.bing.net/th?id=OIP.BkK21qzjmPsWxBBDzRSE9gAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>

          <div className="manager-name-div">
            <div className="manager-name">
              <b style={{ color: "white", marginTop: "1vh" }}>Evano</b>
            </div>
            <div className="position">
              <h5 style={{ paddingRight: "5vh" }}>Project Manager</h5>
            </div>
          </div>
          <div className="slide-downarrow">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
