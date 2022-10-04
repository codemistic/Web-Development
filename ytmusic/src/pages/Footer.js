import React from "react";
import { thumbnail } from "../assets/images/thumbnail.jpg";
import "./Footer.css";
import { BiSkipPrevious } from "react-icons/bi";
import { GiPauseButton } from "react-icons/gi";
import { BiSkipNext } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { GoKebabVertical } from "react-icons/go";
import { ImLoop } from "react-icons/im";
import { GiSpeaker } from "react-icons/gi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="controls">
        <BiSkipPrevious className="controls-icons" />
        <GiPauseButton className="controls-icons" />
        <BiSkipNext className="controls-icons" />
      </div>
      <div className="duration">1:00 / 2:31</div>
      <div className="current-song">
        <img src="../assets/images/thumbnail.jpg" alt="" />
       <span> Gypsy (feat. Pranjal Dahiya & Dinesh Golan) <br /> G.D. Kaur • Gypsy • 2022</span>
      </div>
      <div className="actions">
      <BiDislike/>
      <BiLike/>
      <GoKebabVertical/>
      </div>
      <div className="sound">
      <GiSpeaker/>
      <ImLoop/>
      <BsShuffle/>
      <BiDownArrow/>
      </div>
    </div>
  );
};

export default Footer;
