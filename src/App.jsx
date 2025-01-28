import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";
import UserEdit from "./components/UserEdit/UserEdit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/addUser" element={<UserForm />}></Route>
          <Route path="/editUser/:userId" element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
