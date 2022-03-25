import { createContext, useContext } from "react";
import Bookmark from "../interfaces/Bookmark.interface";
interface BookmarkContextState {
  bookmarks: Bookmark[];
  addBookmark: (article: Bookmark) => boolean;
  removeBookmark: (id: string) => boolean;
  checkIfBookmarked: (id: string) => boolean;
}

const bookmarkDefaultState: BookmarkContextState = {
  bookmarks: [],
  addBookmark: (article: Bookmark) => true,
  removeBookmark: (id: string) => true,
  checkIfBookmarked: (id: string) => true,
}
const context = createContext<BookmarkContextState>(bookmarkDefaultState);

const { Provider: BookmarkProvider } = context;
const useBookmarkContext = (): BookmarkContextState => useContext(context)

export { BookmarkProvider, useBookmarkContext };