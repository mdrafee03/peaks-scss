import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article/Article";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import { BookmarkProvider } from "./contexts/Bookmark.context";
import useBookmarkOperations from "./hooks/useBookmarkOperations/useBookmarkOperations";

function App() {
  const bookmark = useBookmarkOperations();

  return (
    <BrowserRouter>
      <Topbar />
      <div className="content-wrapper">
        <BookmarkProvider value={bookmark}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article/:id" element={<Article />} />
            <Route path="bookmarks" element={<Bookmarks />} />
          </Routes>
        </BookmarkProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
