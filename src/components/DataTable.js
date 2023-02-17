import axios from "axios"
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react"
import { Case, CaseElse, Switch } from "react-context-switch"

const DataTable = () => {
     const [data, setdata] = useState([])

     const fdata = new FormData()
     fdata.append("uid", window.localStorage.getItem("uid"))

     useEffect(() => {
          axios.post("http://localhost/php/AdminPanel/viewData.php", fdata)
               .then(function (fetch) {
                    setdata([...fetch.data])
               })
               .catch(function (error) {
                    console.log(error)
               })
     }, [])

     const handleBtn = () => {
          const fdata = new FormData()
          data.map((i, j) => {
               if (document.getElementById("customSwitches" + j + "a").checked === true) {
                    fdata.append("id", i.id)
                    fdata.append("status", 1)
                    fdata.append("uid", window.localStorage.getItem("uid"))
                    axios.post("http://localhost/php/AdminPanel/edit.php", fdata)
                         .then(function () {
                              window.location.reload()
                         })
               } else {
                    fdata.append("id", i.id)
                    fdata.append("status", 0)
                    fdata.append("uid", window.localStorage.getItem("uid"))
                    axios.post("http://localhost/php/AdminPanel/edit.php", fdata)
                         .then(function () {
                              window.location.reload()
                         })
               }
          })
     }

     const handleDelete = () => {
          const fdata = new FormData()
          data.map((i, j) => {
               if (document.getElementById("customSwitches" + j).checked === true) {
                    fdata.append("id", i.id)
                    fdata.append("blogs", "delete")
                    fdata.append("uid", window.localStorage.getItem("uid"))
                    axios.post("http://localhost/php/AdminPanel/edit.php", fdata)
                         .then(function () {
                              window.location.reload()
                         })
               }
          })
     }

     const handleEdit = (props) => {
          data.map((i, j) => {
               if (i.id === props) {
                    document.getElementById("editTitleh1" + j).style.display = "none"
                    document.getElementById("editpd" + j).style.display = "none"
                    document.getElementById("editfimg" + j).style.display = "none"
                    document.getElementById("editTitle" + j).style.display = "block"
                    document.getElementById("editDis" + j).style.display = "block"
                    document.getElementById("editf" + j).style.display = "block"
                    document.getElementsByClassName("hcbtn")[j].style.display = "block"
               } else {
                    document.getElementById("editTitleh1" + j).style.display = "block"
                    document.getElementById("editpd" + j).style.display = "block"
                    document.getElementById("editfimg" + j).style.display = "block"
                    document.getElementById("editTitle" + j).style.display = "none"
                    document.getElementById("editDis" + j).style.display = "none"
                    document.getElementById("editf" + j).style.display = "none"
                    document.getElementsByClassName("hcbtn")[j].style.display = "none"
               }
          })
     }

     const handleConfirm = (props) => {
          data.map((i, j) => {
               if (i.id === props) {
                    const fdata = new FormData()
                    const image = document.getElementById("editf" + j).files[0]
                    fdata.append("blogs", "edit")
                    fdata.append("id", i.id)
                    fdata.append("title", document.getElementById("editTitle" + j).value)
                    fdata.append("desp", document.getElementById("editDis" + j).value)
                    fdata.append("uid", window.localStorage.getItem("uid"))
                    if (image === undefined) {
                         fdata.append("image", i.frame)
                         axios.post("http://localhost/php/AdminPanel/edit.php", fdata)
                              .then(function () {
                                   window.location.reload()
                              })
                    }
               }
          })
     }

     useEffect(() => {
          data.map((i, j) => {
               document.getElementById("customSwitches" + j + "a").checked = (i.status == 1) ? true : false
          })
     }, [data])

     return (
          <>
               <Header />
               <SideBar />
               <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                         <div className="container-fluid">
                              <div className="row mb-2">
                                   <div className="col-sm-6">
                                        <h1>Blogs</h1>
                                   </div>
                                   <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                             <li className="breadcrumb-item"><a href="#">Home</a></li>
                                             <li className="breadcrumb-item active">Blogs</li>
                                        </ol>
                                   </div>
                              </div>
                         </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section style={{ width: "100%" }}>
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-12">
                                        <div className="card">
                                             {/* /.card-header */}
                                             <div className="card-body">
                                                  <table id="example2" className="table table-bordered table-hover" width={"100%"} height={"100%"}>
                                                       <thead>
                                                            <tr>
                                                                 <th>ID</th>
                                                                 <th>TITLE</th>
                                                                 <th>DESCRIPTION</th>
                                                                 <th>STATUS</th>
                                                                 <th>FRAME</th>
                                                                 <th colSpan={3}>EFFECTS</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 data.map((i, j) =>
                                                                      <tr className="position-relative">
                                                                           <td>{i.id}</td>
                                                                           <td>
                                                                                <h1 className="fw-bolder fs-6" id={"editTitleh1" + j}>{i.title}</h1>                                                                                
                                                                                <textarea rows={5} cols={15}
                                                                                     defaultValue={i.title} style={{ display: "none" }} id={"editTitle" + j}></textarea>
                                                                           </td>
                                                                           <td>
                                                                                <p id={"editpd" + j}>
                                                                                     {i.description.slice(0, 200)}
                                                                                </p>
                                                                                <textarea rows={5} cols={10}
                                                                                     defaultValue={i.description} style={{ display: "none" }} id={"editDis" + j}></textarea>
                                                                           </td>
                                                                           <td>
                                                                                <Switch value={i.status}>
                                                                                     <Case when={(val) => val.includes(1)}>
                                                                                          <h1 className="fs-1">Visible</h1>
                                                                                     </Case>
                                                                                     <CaseElse>
                                                                                          <h1 className="fs-1">Unseen</h1>
                                                                                     </CaseElse>
                                                                                </Switch>
                                                                           </td>
                                                                           <td>
                                                                                <div className="w-100">
                                                                                     <img src={i.frame} width='100%' id={"editfimg" + j}></img>
                                                                                </div>
                                                                           </td>
                                                                           <td className="text-center d-flex justify-content-between border h-100">
                                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                                     <input onClick={handleBtn} type="checkbox" class="custom-control-input" id={"customSwitches" + j + "a"} />
                                                                                     <label class="btn p-0 m-2 h6 text-muted" htmlFor={"customSwitches" + j + "a"}>Change Status</label>
                                                                                </div>
                                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                                     {/* <button onClick={handleDelete} id={"customSwitches" + j}>Delete</button> */}
                                                                                     <input type="checkbox" onClick={handleDelete} class="custom-control-input" id={"customSwitches" + j} />
                                                                                     <label class="btn p-0 m-2 text-danger" htmlFor={"customSwitches" + j}>Delete</label>
                                                                                </div>
                                                                                <button className="btn p-0 m-2 text-warning" onClick={() => { handleEdit(i.id) }}>Edit</button>
                                                                                <button className="btn p-0 m-2 text-success" onClick={() => { handleConfirm(i.id) }}>Confirm</button>
                                                                           </td>
                                                                      </tr>
                                                                 )
                                                            }
                                                       </tbody>
                                                  </table>
                                             </div>
                                             {/* /.card-body */}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
               <Footer />
          </>
     )
}

export default DataTable;