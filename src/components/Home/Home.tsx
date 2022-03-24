import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Pic from "../../assets/pic.png";
import "./Home.scss";
import environment from "../../environment";

const Home = (): JSX.Element => {
  console.log(environment.BASE_URL);
  return (
    <div className="card-container">
      <Card
        imgUrl={Pic}
        title="Global report: WHO warns of accelerating Covid-19 infections in Africa"
        body="Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases"
      />
    </div>
  );
};

export default Home;
