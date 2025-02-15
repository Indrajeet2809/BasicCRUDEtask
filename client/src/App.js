
import { Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";
import EditProfile from "./page/EditProfile";
import DeleteProfile from "./page/DeleteProfile";
import HomePage from "./page/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element ={<HomePage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/delete" element={<DeleteProfile/>} />
      </Routes>
    </>
  );
}

export default App;
