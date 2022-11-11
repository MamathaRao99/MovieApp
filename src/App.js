import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route ,useParams} from "react-router-dom";
import Home from "../src/components/Home/Home";
import MovieDetails from "../src/components/MovieDetails/MovieDetails";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbId" element={<MovieDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
