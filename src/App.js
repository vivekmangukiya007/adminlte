// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Admin from './components/Admin-Panel';
import Login from './components/Login';
import General from './components/General';
import DataTable from './components/DataTable';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path='/general' element={<General />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
    </>
  );
}

export default App;
