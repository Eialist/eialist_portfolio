import htmlImg from "../assets/images/bruno-figueiredo-uoteo7uO5OI-unsplash.jpg"
import js1Img from "../assets/images/felicia-buitenwerf-5yn5rGI5IUw-unsplash.jpg"
import amImg from "../assets/images/murat-onder-EWDCeCUz8Ho-unsplash.jpg"
import js2Img from "../assets/images/randy-tarampi-U2eUlPEKIgU-unsplash.jpg"
import uxImg from "../assets/images/stefan-cosma-0gO3-b-5m80-unsplash.jpg"
import '../main.css';

export const ProjectPage = () => {

  const projects = [
    {
      courseName: "Html & Css",
      imgSrc: htmlImg, 
      courseInfo: "Pixelperfect Website"
    }, 
    {
      courseName: "Javascript1", 
      imgSrc: js1Img,
      courseInfo: "Memory Game"
    }, 
    {
      courseName: "Arbetsmetodik", 
      imgSrc: amImg, 
      courseInfo: "Restaurant Booking App"
    }, 
    {
      courseName: "Javascript2",
      imgSrc: js2Img, 
      courseInfo: "Starwars Catalog"
    },
    {
      courseName: "UX-design",
      imgSrc: uxImg, 
      courseInfo: "PRO Mail Design"
    }, 
    {
      courseName: "Backendutveckling", 
      imgSrc: js1Img,
      courseInfo: "Chat App"
    }, 
    {
      courseName: "Javascript3", 
      imgSrc: amImg, 
      courseInfo: "Bookster App"
    }, 
    {
      courseName: "Typescript",
      imgSrc: js2Img, 
      courseInfo: "Gym Booking App"
    }, 
  ]
  
  console.log(projects);

  return (
    <div>
      {projects.map(( {courseName, imgSrc, courseInfo} ) => 
      <div className="flex-center pos-rel"key={courseName}>
        <p className="project-text" style={{textAlign: "center"}}>{courseName}</p>
        <img className="project-picture" src={imgSrc} alt="" />
        <p style={{ color: "white", top: "10%", fontSize: "5em", right: "0"}}className="info-text pos-abs">{courseInfo}</p>
      </div>)}
      
    </div>
  );
};
