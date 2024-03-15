

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import OrdersManagement from './OrdersManagement';
import ProductsManagement from './ProductsManagement';
import OrdersCalendar from './OrdersCalendar';
import Header from './Header';
import './Dashboard.css'

function Dashboard() {
  return (
    <div>number of products : 3</div> 
    <div>numbers of orders : 3</div>
  );
}

export default Dashboard;
