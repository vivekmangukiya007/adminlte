import './App.css';
import { Routes, Route } from "react-router-dom";
import Admin from './components/Admin-Panel';
import Login from './components/Login';
import General from './components/General';
import DataTable from './components/DataTable';
import Index from './components/coffeeBlogPages/Index';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path='/General' element={<General />} />
        <Route path='/datatable' element={<DataTable />} />
        <Route path='/index' element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
