import React from "react";
import "../Css/Footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className="footerIcon">
      <span>
        {" "}
        <FacebookSharpIcon sx={{ width: "60px", height: "40px" }} />{" "}
      </span>
      <span>
        {" "}
        <InstagramIcon sx={{ width: "60px", height: "40px" }} />{" "}
      </span>
      <span>
        {" "}
        <XIcon sx={{ width: "60px", height: "35px" }} />{" "}
      </span>
      <span>
        {" "}
        <YouTubeIcon sx={{ width: "60px", height: "40px" }} />{" "}
      </span>
      <span>
        <GitHubIcon sx={{ width: "60px", height: "40px" }} />{" "}
      </span>
      <span>
        <LinkedInIcon sx={{ width: "60px", height: "40px" }} />{" "}
      </span>
    </div>
  );
}

export default Footer;
