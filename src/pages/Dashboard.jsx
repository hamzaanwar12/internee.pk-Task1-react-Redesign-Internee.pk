import React from 'react';
import NavBar from './DashboardComponents/Navbar';
import WelcomeBox from './DashboardComponents/WelcomeBox';
import TaskTable from './DashboardComponents/TaskTable';
import Footer from './DashboardComponents/Footer';

const Dashboard = () => {
    return (
        <div>
    <NavBar />
    <WelcomeBox />
    <TaskTable />
    <Footer />
        </div>
    );
};

export default Dashboard;