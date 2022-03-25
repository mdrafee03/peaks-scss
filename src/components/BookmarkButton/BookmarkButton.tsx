import BookMarkIcon from "../../assets/icons/bookmark.svg";
import Button from "../Button/Button";
import './BookmarkButton.scss';

interface Props {
  text: string;
  onClick: () => void;
}
const BookMarkButton = ({ text, onClick }: Props): JSX.Element => {
  return (
    <Button className="bookmarkButton" type="button" onClick={onClick}>
      <img src={BookMarkIcon} alt="bookmark" />
      <span>{text.toUpperCase()}</span>
    </Button>
  );
};
export default BookMarkButton;
