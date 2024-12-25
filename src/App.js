import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import AdminMenu from "./component/AdminMenu";
import EventUsersList from "./component/UsersList";
import EditUserForm from "./component/EditUserForm";
import AddUserForm from "./component/AddUserForm";
import ResetPassword from "./component/ResetPassword";
import ForgotPassword from "./component/ForgotPassword";
import Settings from "./component/Settings";
import Dashboard from "./component/Dashboard";
import ManageEvents from "./component/ManageEvents";
import CreateEvent from "./component/CreateEvent";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminMenu />} />
        <Route path="/admin/users" element={<EventUsersList />} />
        <Route path="/admin/edit-user-form" element={<EditUserForm />} />
        <Route path="/admin/add-user-form" element={<AddUserForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
