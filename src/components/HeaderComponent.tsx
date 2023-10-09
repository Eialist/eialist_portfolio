import hamburgerMenu from '../assets/hamburger.png';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
  return (
    <div className="header-div" style={{ display: "flex", justifyContent: "space-between", paddingTop: "4em", paddingBottom: "1.5em", padding: "4em 2.5em 0em 2.5em"}}>
    <Link to={'/menu'}><img src={hamburgerMenu} alt="" style={{ width: "50px", opacity: "0.3", marginTop: "-.58em"}}/></Link>
    <Link to={'/'} style={{ textDecoration: "none" }}><h1 style={{ fontFamily: "title", fontSize: "40px", fontWeight: "400", color: "black"}}>Eialist</h1></Link>
    </div>
  )
}
