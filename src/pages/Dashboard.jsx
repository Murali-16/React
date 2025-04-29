import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
const Dashboard = () => {
  return (
    <section className="bg-[#EEF2F5] h-[100vh]">
      <nav className="flex justify-between items-center py-6 px-[6%] bg-white">
        <h1 className="text-xl font-bold">Bank Complaints</h1>
        <ul className="flex gap-4 list-none text-[18px]">
          <li className="hover:bg-[#F2F2F2] px-[10px] py-[5px]">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:bg-[#F2F2F2] px-[10px] py-[5px]">
            <Link to="/complaints">Complaints</Link>
          </li>
          <li className="hover:bg-[#F2F2F2] px-[10px] py-[5px]">
            <Link to="/accounts">Accounts</Link>
          </li>
          <li className="hover:bg-[#F2F2F2] px-[10px] py-[5px]">
            <Link to="/language">Select Language</Link>
          </li>
        </ul>
        <Button sx={{ color: "#000", fontSize: "16px" }}>Logout</Button>
      </nav>
      <article>
        <div>
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[5px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
          </div>
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[5px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
          </div>
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[5px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
