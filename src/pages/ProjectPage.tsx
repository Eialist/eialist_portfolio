import htmlImg from "../assets/images/bruno-figueiredo-uoteo7uO5OI-unsplash.jpg"
import js1Img from "../assets/images/felicia-buitenwerf-5yn5rGI5IUw-unsplash.jpg"
import amImg from "../assets/images/murat-onder-EWDCeCUz8Ho-unsplash.jpg"
import js2Img from "../assets/images/randy-tarampi-U2eUlPEKIgU-unsplash.jpg"
import uxImg from "../assets/images/stefan-cosma-0gO3-b-5m80-unsplash.jpg"
import data from '../assets/db.json';
import '../main.css';

export const ProjectPage = () => {

  const projects = [
    {
      courseName: "Html & Css",
      imgSrc: htmlImg
    }, 
    {
      courseName: "Javascript1", 
      imgSrc: js1Img,
    }, 
    {
      courseName: "Arbetsmetodik", 
      imgSrc: amImg
    }, 
    {
      courseName: "Javascript2",
      imgSrc: js2Img
    },
    {
      courseName: "UX-design",
      imgSrc: uxImg
    }, 
    {
      courseName: "Backendutveckling", 
      imgSrc: js1Img,
    }, 
    {
      courseName: "Javascript3", 
      imgSrc: amImg
    }, 
    {
      courseName: "Typescript",
      imgSrc: js2Img
    }, 
  ]
  
  console.log(data[0].imgSrc);

  return (
    <div>
      {projects.map(( {courseName, imgSrc} ) => 
      <div className="flex-center"key={courseName}>
        <p className="project-text" style={{textAlign: "center"}}>{courseName}</p>
        <img className="project-picture" src={imgSrc} alt="" />
        <p className="info-text">{courseName}</p>
      </div>)}
      
    </div>
  );
};
