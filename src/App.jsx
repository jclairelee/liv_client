import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Post from "./pages/post/Post";
import Landing from "./pages/landing/Landing";
import NotFound from "./pages/notFound/NotFound";
// components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ArticleList from "./pages/articleList/ArticleList";
import Footer from "./components/footer/Footer";

function App() {
  const boxstyle = {
    height: "100vh",
  };
  return (
    <div className="App" style={boxstyle}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Post />} />
          <Route path="/posts" element={<ArticleList />} />
          <Route path="/posts/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
