import "./Card.scss";

interface Props {
  imgUrl: string;
  title: string;
  body: string;
}
const Card = ({ imgUrl, title, body }: Props): JSX.Element => {
  return (
    <section className="card-section">
      <img src={imgUrl} alt="card" />
      <section className="text-wrapper">
        <header>{title}</header>
        <p>{body}</p>
      </section>
    </section>
  );
};
export default Card;
