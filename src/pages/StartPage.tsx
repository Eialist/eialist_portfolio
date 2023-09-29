import "../main.css";
import { Link } from "react-router-dom";
import profile from "../assets/profile-picture.jpg";
import codeImg from "../assets/js-code.jpg";

export const StartPage = () => {
  return (
    <div className="flex">
      <div className="pos-rel">
        <img className="profile-picture" src={profile} alt="" />
        <Link to={"/cv"}>
          <h4 className="about-me-text">About Me</h4>
        </Link>
      </div>
      <div className="pos-rel">
        <Link to={"/projects"}>
          <h4 className="project-text">Projects</h4>
        </Link>
        <img className="profile-picture code-img" src={codeImg} alt="" />
      </div>
    </div>
  );
};

//Yogs144 attribute for hamburger icon
