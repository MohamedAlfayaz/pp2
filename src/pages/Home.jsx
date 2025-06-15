import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Export from "./Export";
import Motor from "./Motor";
import Graph from "./Graph";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <HashRouter>
        <TopNav />
        <Nav />
        <div className="mt-15">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/export" element={<Export />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/motor" element={<Motor />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default Home;