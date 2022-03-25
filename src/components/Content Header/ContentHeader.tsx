import { ChangeEvent } from "react";
import BookMarkButton from "../BookmarkButton/BookmarkButton";
import "./ContentHeader.scss";

interface Props {
  title: string;
  isBookmarkVisible?: boolean;
  onclickBookmark?: () => void;
  onSelect: (orderBy: string) => void;
}
const ContentHeader = ({
  title,
  isBookmarkVisible = true,
  onclickBookmark,
  onSelect,
}: Props): JSX.Element => {

  const handleBookmarkClick = () => {
    onclickBookmark?.();
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  }

  return (
    <header className="content-header">
      <h1>{title}</h1>
      <div className="right-container">
        {isBookmarkVisible && (
          <BookMarkButton text="View BookMark" onClick={handleBookmarkClick} />
        )}
        <select className="select" aria-label="State" onChange={handleSelect}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </header>
  );
};

export default ContentHeader;
