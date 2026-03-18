<<<<<<< HEAD


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Locations from "./pages/Locations";
import ProposalType from "./pages/ProposalType";
import { useEffect } from "react";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="locations" element={<Locations />} />
          <Route path="proposal-type" element={<ProposalType />} />
        </Route>
      </Routes>
    </Router>
  );
}

=======


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Locations from "./pages/Locations";
import ProposalType from "./pages/ProposalType";
import { useEffect } from "react";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="locations" element={<Locations />} />
          <Route path="proposal-type" element={<ProposalType />} />
        </Route>
      </Routes>
    </Router>
  );
}

>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
export default App;