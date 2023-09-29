export const NavComponent = () => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "3.5em",
          display: "flex",
          justifyContent: "space-evenly",
          background: "#f2f2f2",
          paddingTop: "1.2em",
          textTransform: "uppercase",
        }}>
        <a
          className="nav-btn"
          href="">
          Phone
        </a>
        <a
          className="nav-btn"
          href="">
          Mail
        </a>
        <a
          className="nav-btn"
          href="https://github.com/Eialist"
          target="_blank">
          Github
        </a>
      </nav>
    </>
  );
};
