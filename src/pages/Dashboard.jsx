// src/pages/Dashboard.jsx

import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";
import VideoPanel from "../components/VideoPanel/VideoPanel";
import ChartsPanel from "../components/Charts/ChartsPanel";


import "./Dashboard.css";

export default function Dashboard() {
  return (


    <div className="dashboard">
      <Sidebar />
      <TopBar />



      <VideoPanel />
      <div className="dashboard-bottom">
        <ChartsPanel />


      </div>


    </div>




  );
}
