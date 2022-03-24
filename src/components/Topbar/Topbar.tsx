import logo from "../../logo.svg";
import "./Topbar.scss";

const Topbar = (): JSX.Element => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <input type="text" name="search" placeholder="Search.."></input>
    </header>
  );
};

export default Topbar;
