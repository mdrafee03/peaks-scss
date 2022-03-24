import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Topbar.scss";

const Topbar = (): JSX.Element => {
  return (
    <header className="tobar-header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </header>
  );
};

export default Topbar;
