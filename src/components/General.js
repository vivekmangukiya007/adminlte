import Header from "./Header";
import SideBar from "./SideBar";
import axios from "axios"
import { useEffect, useState } from "react"

const General = () => {
     const [login, setLogin] = useState({
          title: '',
          blog: '',
          img: '',
          status: ''
     })
     const handleSubmit = () => {
          // const s = window.localStorage.getItem("count")
          const formData = new FormData()
          formData.append('title', login.title)
          formData.append('blog', login.blog)
          formData.append('img', login.img)
          formData.append('status', login.status)
          // formData.append('status', s)
          axios.post("http://localhost/php/AdminPanel/Data.php", formData)
               .then(function (res) {
                    console.log(res);
                    console.log('hello');
               })
               .catch(function (error) {
                    console.log(error)
               })
     }
     const incr = () => {
          if (parseInt(window.localStorage.getItem("count")) >= 1) {
               return
          }
          window.localStorage.setItem("count", 1)
          document.getElementById("count").innerHTML = 1
     }

     const decr = () => {
          if (parseInt(window.localStorage.getItem("count")) <= 0) {
               return
          }
          window.localStorage.setItem("count", 0)
          document.getElementById("count").innerHTML = 0
     }

     useEffect(() => {
          window.localStorage.setItem("count", 0)
          document.getElementById("count").innerHTML = 0
     }, [])
     const formInfo = (i) => {
          let targetName, targetValue
          targetName = i.target.name
          targetValue = i.target.value

          setLogin({ ...login, [targetName]: targetValue })
     }
     return (
          <>
               <Header />
               <SideBar />
               {/* Content Wrapper. Contains page content */}
               <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                         <div className="container-fluid">
                              <div className="row mb-2">
                                   <div className="col-sm-6">
                                        <h1>General Form</h1>
                                   </div>
                                   <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                             <li className="breadcrumb-item"><a href="#">Home</a></li>
                                             <li className="breadcrumb-item active">General Form</li>
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
                                             <div className="card-header">
                                                  <h3 className="card-title">Quick Example</h3>
                                             </div>
                                             <div className="card-body">
                                                  <div className="form-group">
                                                       <label htmlFor="exampleInputEmail1">Title</label>
                                                       <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Blog Title" name="title" onChange={formInfo} />
                                                  </div>
                                                  <div className="form-group">
                                                       <label htmlFor="exampleInputPassword1">Blog</label>
                                                       <textarea className="form-control" placeholder="Enter Your Blog" onChange={formInfo} name="blog" />
                                                  </div>
                                                  <div className="form-group">
                                                       <label htmlFor="">Status</label>
                                                       <div className="d-flex" style={{ columnGap: "10px" }}>
                                                            <input type="button" value="+" className="btn btn-dark align-self-center" name='status' onClick={incr} ></input>
                                                            <h1 className="fw-bolder fs-1" id="count" onChange={formInfo} name="status"></h1>
                                                            <input type="button" value="-" className="btn btn-dark align-self-center" onClick={decr}></input>
                                                       </div>
                                                  </div>
                                                  <div className="form-group">
                                                       <label htmlFor="exampleInputFile">Image</label>

                                                       <div className="input-group">
                                                            <div>
                                                                 <input className="w-100 form-control" placeholder="Blog Frame URL" type="text" name="img" onChange={formInfo}></input>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="card-footer">
                                                  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
               <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                    </div>
                    <strong>Copyright © 2014-2021 <a href="">Glass Info.</a>.</strong> All rights reserved.
               </footer>
               <aside className="control-sidebar control-sidebar-dark">
               </aside>


          </>
     )
}
export default General;