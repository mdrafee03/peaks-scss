import { Link } from "react-router-dom";
import { useBookmarkContext } from "../../contexts/Bookmark.context";
import Card from "../Card/Card";
import ContentHeader from "../Content Header/ContentHeader";

const Bookmarks = (): JSX.Element => {
  const { bookmarks } = useBookmarkContext();
  const selectHandler = (orderBy: string) => {};
  return (
    <section>
      <ContentHeader
        title="All Bookmark"
        isBookmarkVisible={false}
        onSelect={selectHandler}
      />
      {bookmarks.map((bookmark) => (
        <Link
          to={`/article/${encodeURIComponent(bookmark.id)}`}
          className={`card-wrapper`}
          key={bookmark.id}
        >
          <Card title={bookmark.webTitle} body={bookmark.trailText} />
        </Link>
      ))}
    </section>
  );
};
export default Bookmarks;
