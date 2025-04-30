import { Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import DataTable from "../components/DataTable";
import BankingComplaintForm from "../components/ComplaintForm";
import {FormContext} from "../context/FormContext"
const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const navigate = useNavigate();

  const data = useContext(FormContext)
  const complaints = data.complaintData
  console.log('complaints',complaints)

  return (
    <section className="bg-[#EEF2F5] h-[100vh] ">
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
        <Button
          sx={{ color: "#000", fontSize: "16px" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </nav>
      <article className="px-[6%]">
        <div className="flex justify-between py-[50px] gap-[20px]">
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[20px] w-full bg-white flex flex-col justify-between h-[220px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
            <div>
              <Typography variant="h6">Complaint Pending</Typography>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">258</p>
                <span className="flex items-center text-[18px] border border-[#000] rounded-full w-fit px-[10px] py-[2px]">
                  <NorthOutlinedIcon sx={{ fontSize: "16px" }} /> 20% More
                </span>
              </div>
            </div>
          </div>
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[20px] w-full bg-white flex flex-col justify-between h-[220px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
            <div>
              <Typography variant="h6">Complaint In Progress</Typography>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">258</p>
                <span className="flex items-center text-[18px] border border-[#000] rounded-full w-fit px-[10px] py-[2px]">
                  <NorthOutlinedIcon sx={{ fontSize: "16px" }} /> 20% More
                </span>
              </div>
            </div>
          </div>
          <div className="border-3 border-[#DEDEDE] rounded-xl p-[20px] w-full bg-white flex flex-col justify-between h-[220px]">
            <InsertDriveFileOutlinedIcon
              sx={{ color: "#989898", fontSize: "3rem" }}
            />
            <div>
              <Typography variant="h6">Complaint Closed</Typography>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">258</p>
                <span className="flex items-center text-[18px] border border-[#000] rounded-full w-fit px-[10px] py-[2px]">
                  <NorthOutlinedIcon sx={{ fontSize: "16px" }} /> 20% More
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <DataTable setOpenForm={setOpenForm} complaintData={complaints} />
      {openForm && (
        <div className="fixed top-0 inset-0">
          <BankingComplaintForm setOpenForm={setOpenForm}/>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
