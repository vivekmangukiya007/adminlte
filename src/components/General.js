import axios from "axios"
import { useEffect, useState } from "react"
import SideBar from "./SideBar"
import Footer from "./Footer"
import Header from "./Header"

const General = () => {
     const [status, setstatus] = useState("")

     const handleSubmit = () => {
          const form = document.getElementById('form')
          const title = form.elements[0].value
          const desp = form.elements[1].value
          const s = window.localStorage.getItem("cnt")
          let img =  form.img.value;
          const fdata = new FormData()
          fdata.append("add", "blogs")
          fdata.append("title", title)
          fdata.append("desp", desp)
          fdata.append("status", s)
          fdata.append("image", img)
          fdata.append("uid", window.localStorage.getItem("uid"))
          axios.post("http://localhost/php/AdminPanel/Data.php", fdata)
               .then(function (res) {
                    console.log(res)
               })
               .catch(function (error) {
                    console.log(error)
               })
     }

     const incr = () => {
          if (parseInt(window.localStorage.getItem("cnt")) >= 1) {
               return
          }
          window.localStorage.setItem("cnt", 1)
          document.getElementById("cnt").innerHTML = 1
     }

     const decr = () => {
          if (parseInt(window.localStorage.getItem("cnt")) <= 0) {
               return
          }
          window.localStorage.setItem("cnt", 0)
          document.getElementById("cnt").innerHTML = 0
     }

     useEffect(() => {
          window.localStorage.setItem("cnt", 0)
          document.getElementById("cnt").innerHTML = 0
     }, [])

     return (
          <>
               <Header/>
               <SideBar />
               <div className="content-wrapper">
                    <section className="content-header">
                         <div className="container-fluid">
                              <div className="row mb-2">
                                   <div className="col-sm-6">
                                        <h1>Add Blogs</h1>
                                   </div>
                                   <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                             <li className="breadcrumb-item"><a href="#">Home</a></li>
                                             <li className="breadcrumb-item active">Add Blogs</li>
                                        </ol>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="content">
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-md-6">
                                        <div className="card card-primary">
                                             <form method="post" onSubmit={handleSubmit} id="form">
                                                  <div className="card-body">
                                                       <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Title</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Blog Title" name="title" />
                                                       </div>
                                                       <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Description</label>
                                                            <textarea className="form-control" id="exampleInputPassword1" placeholder="Blog Description" rows={3} cols={4} name="extra" />
                                                       </div>
                                                       <div className="form-group">
                                                            <label htmlFor="status">Status</label>
                                                            <div className="d-flex" style={{ columnGap: "10px" }}>
                                                                 <input type="button" value="+" className="btn btn-dark align-self-center" onClick={incr}></input>
                                                                 <h1 className="fw-bolder fs-1" id="cnt"></h1>
                                                                 <input type="button" value="-" className="btn btn-dark align-self-center" onClick={decr}></input>
                                                            </div>
                                                       </div>
                                                       <div className="form-group">
                                                            <label htmlFor="exampleInputFile">Image</label>
                                                            <div className="p-2">
                                                                 <div>
                                                                      <input className="form-control w-100" type="text" placeholder="Add Img Path" name="img"></input>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="card-footer">
                                                       <button type="submit" className="btn btn-primary">Submit</button>
                                                  </div>
                                             </form>
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

export default General;