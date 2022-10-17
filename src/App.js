import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route element={<About />} path="about" />
        <Route element={<SinglePost />} path="post:slug" />
        <Route element={<Post />} path="post" />
        <Route element={<Project />} path="project" />
      </Routes>
    </>
  );
}

export default App;
