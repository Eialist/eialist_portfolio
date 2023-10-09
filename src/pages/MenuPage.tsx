import "../main.css";
import {
  LogoHtml5,
  LogoCss3,
  LogoJavascript,
  LogoReact,
  LogoNodejs,
  LogoGithub,
  Server,
  LogoFigma,
} from "react-ionicons";

export const MenuPage = () => {
  return (
    <div className="stripes">
      <div className="tech-stack">
        <LogoHtml5 height="40px" width="40px" />
        <LogoCss3 height="40px" width="40px" />
        <LogoJavascript height="40px" width="40px"/>
        <LogoReact height="40px" width="40px" />
        <LogoNodejs height="40px" width="40px" />
        <LogoGithub height="40px" width="40px"/>
        <Server height="40px" width="40px"/>
        <LogoFigma height="40px" width="40px"/>
      </div>
    </div>
  );
};
