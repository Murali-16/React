import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section>
      <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <h1 className="text-xl font-bold">Bank Complaints</h1>
        <ul className="flex gap-4 list-none">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/complaints">Complaints</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/language">Select Language</Link></li>
        </ul>
      </nav>
    </section>
  );
};

export default Dashboard;
