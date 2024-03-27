import React from "react";
import Login from "./Login";
import Navigation from "./Navigation";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Calls } from "./Calls";
import { Test } from "./Test";
import ProjectUpdates from "./ProjectUpdates";
import Daily_Status from "./Daily_Status";
import SendDailyStatus from "./SendDailyStatus";
import MyLeaves from "./MyLeaves";
import Holiday from "./Holiday";
import EditProfile from "./EditProfile";
import EditPersonalSkill from "./EditPersonalSkills";
import EditSkills from "./EditSkills";
import DesscussionDesk from "./DesscussionDesk";
import HelpDesk from "./HelpDesk";

const Portal = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/calls" element={<Calls />}></Route>
        <Route path="/tests" element={<Test />}></Route>
        <Route path="/project-updates" element={<ProjectUpdates />}></Route>
        <Route path="/daily-status" element={<Daily_Status />}></Route>
        <Route path="/send-status" element={<SendDailyStatus />}></Route>
        <Route path="/myleaves" element={<MyLeaves />}></Route>
        <Route path="/holiday" element={<Holiday />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path="/edit-skills" element={<EditPersonalSkill />}></Route>
        <Route path="/edited-skills" element={<EditSkills />}></Route>
        <Route path="/desscussion-desk" element={<DesscussionDesk />}></Route>
        <Route path="/help-desk" element={<HelpDesk />}></Route>
        <Route path="/logout" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Portal;
