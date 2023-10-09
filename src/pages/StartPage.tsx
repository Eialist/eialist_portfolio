import "../main.css";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg";
import codeImg from "../assets/js-code.jpg";
import funImg from "../assets/images/tonik-U0wwiY6nRGA-unsplash.jpg"
import focusImg from "../assets/images/stefan-cosma-0gO3-b-5m80-unsplash.jpg"
import desktopImg from "../assets/images/bruno-figueiredo-uoteo7uO5OI-unsplash.jpg";

export const StartPage = () => {
  return (
    <div className="flex">
      <div className="pos-rel flex-center flex-start">
        <img className="profile-picture" src={profile} alt="" style={{ marginBottom: "0em"}} />
        <Link to={"/cv"}>
          <h4 className="about-me-text pos-abs">About Me</h4>
        </Link>
      </div>
      <div className="flex-col">
      <Link to={"/projects"}>
      <div className="pos-rel flex-center mobile-only">
          <h4 className="project-text pos-abs">Projects</h4>
        <img className="profile-picture code-img" src={codeImg} alt="" />
      </div>
      </Link>
      <Link to={"/projects"}>
      <div className="pos-rel flex-center desktop-only">
          <h4 className="project-text pos-abs">Projects</h4>
        <img className="profile-picture code-img" src={desktopImg} alt="" />
      </div>
      </Link>
      <Link to={"/cv"}>
      <div className="pos-rel flex-center invi">
          <h4 className="project-text pos-abs"></h4>
        <img className="profile-picture code-img" src={funImg} alt="" />
      </div>
      </Link>
      <Link to={"/cv"}>
      <div className="pos-rel flex-center invi">
          <h4 className="project-text pos-abs"></h4>
        <img className="profile-picture code-img" src={focusImg} alt="" />
      </div>
      </Link>
      </div>
    </div>
  );
};

//Yogs144 attribute for hamburger icon
