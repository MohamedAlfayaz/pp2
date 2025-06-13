import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Export from "./Export";
import Motor from "./Motor";
import Graph from "./Graph";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <BrowserRouter>
      <TopNav />
      <Nav />
        <div className="mt-13">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/export" element={<Export />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/motor" element={<Motor />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center mt-4">
                  Select Process or Output
                </div>
              }
            />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
