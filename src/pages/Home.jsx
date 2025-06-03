import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import RightSidebar from '../components/RightSidebar';
import Tail from "./Tail";
import Process from "./Process";
import Output from "./Output";
import Export from "./Export";
import Motor from "./Motor";
// import Graph from "./GraphDetail";
import Graph from "./Graph";

const Home = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <BrowserRouter>
        <Nav />
        <RightSidebar />
        <div className="ml-10 mr-8 p-2">
        <Routes>
          <Route path="/" element={<Tail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/output" element={<Output />} />
          <Route path="/export" element={<Export />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/motor" element={<Motor />} />
          <Route path="*" element={<div>Select Process or Output</div>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
