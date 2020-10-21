import React, { useContext } from 'react';
import { UserContext } from '../../context/user/context';


const Dashboard = props => {
  const { userState } = useContext(UserContext);

  return (
    <h1>Dashboard</h1>
  );
};

export default Dashboard;
