import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Pic from "../../assets/pic.png";
import "./Home.scss";
import environment from "../../environment";
import { useEffect } from "react";
import axios from "axios";
import useTopNewsFetching from "./hooks/useTopNewsFetching/useTopNesFetching";
import ContentHeader from "../Content Header/ContentHeader";

const Home = (): JSX.Element => {
  const { data, isLoading, error, request } = useTopNewsFetching();

  useEffect(() => {
    request("newest");
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const handleBookmarkClick = () => {};
  const handleSelect = (orderBy: string) => {
    request(orderBy);
  };

  return (
    <>
      <ContentHeader
        title="Top Stories"
        onclickBookmark={handleBookmarkClick}
        onSelect={handleSelect}
      />
      {isLoading && <Loader />}
      <div className="cards-container">
        {data?.response.results.map((article, index) => (
          <article className={`card-wrapper ${index === 0 ? 'first': ''}`} key={article.id}>
            <Card title={article.webTitle} body={article.fields.trailText} />
          </article>
        ))}
      </div>
    </>
  );
};

export default Home;
