import Header from "./Header";
import SideBar from "./SideBar";
import axios from "axios"
import { useEffect, useState } from "react"

const DataTable = () => {
     const [showData, setShowData] = useState([]);
     useEffect(() => {
          axios.get("http://localhost/php/AdminPanel/viewData.php")
               .then(function (res) {
                    console.log(res.data);
                    setShowData(res.data);
               })
               .catch(function (error) {
                    console.log(error)
               })
     }, [])
     console.log(showData);
     return (
          <>
               <div className="wrapper">
                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                         <section className="content-header">
                              <div className="container-fluid">
                                   <div className="row mb-2">
                                        <div className="col-sm-6">
                                             <h1>DataTables</h1>
                                        </div>
                                        <div className="col-sm-6">
                                             <ol className="breadcrumb float-sm-right">
                                                  <li className="breadcrumb-item">
                                                       <a href="#">Home</a>
                                                  </li>
                                                  <li className="breadcrumb-item active">DataTables</li>
                                             </ol>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <section className="content">
                              <div className="container-fluid">
                                   <div className="row">
                                        <div className="col-12">
                                             <div className="card">
                                                  <div className="card-header">
                                                       <h3 className="card-title">
                                                            DataTable with minimal features &amp; hover style
                                                       </h3>
                                                  </div>
                                                  <div className="card-body">
                                                       <table
                                                            id="example2"
                                                            className="table table-bordered table-hover"
                                                       >
                                                            <thead>
                                                                 <tr>
                                                                      <th>ID</th>
                                                                      <th>TITLE</th>
                                                                      <th>BLOG</th>
                                                                      <th>IMG</th>
                                                                      <th>STATUS</th>
                                                                 </tr>
                                                            </thead>
                                                            <tbody>
                                                                 {
                                                                      showData.map((i) => {
                                                                           return (
                                                                                <>
                                                                                     <tr>
                                                                                          <td>{i.id}</td>
                                                                                          <td>{i.title}</td>
                                                                                          <td>{i.blog}</td>
                                                                                          <td><img src={i.img} alt="" /></td>
                                                                                          <td>{i.status}</td>
                                                                                     </tr>
                                                                                </>
                                                                           )

                                                                      })
                                                                 }
                                                            </tbody>
                                                            <tfoot>
                                                                 <tr>
                                                                      <th>ID</th>
                                                                      <th>TITLE</th>
                                                                      <th>BLOG</th>
                                                                      <th>IMG</th>
                                                                      <th>STATUS</th>
                                                                 </tr>
                                                            </tfoot>
                                                       </table>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
                    <footer className="main-footer">
                         <div className="float-right d-none d-sm-block">
                              <b>Version</b> 3.2.0
                         </div>
                         <strong>
                              Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
                         </strong>{" "}
                         All rights reserved.
                    </footer>
                    <aside className="control-sidebar control-sidebar-dark">
                    </aside>
               </div>
          </>
     )
}
export default DataTable;




