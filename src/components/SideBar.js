import { Link } from 'react-router-dom';


const SideBar = () => {
     return (
          <>
               {/* Main Sidebar Container */}
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                         <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                         <span className="brand-text font-weight-light">Glass Info. Panel</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                         {/* Sidebar user panel (optional) */}
                         <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                              <div className="image">
                                   <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                              </div>
                              <div className="info">
                                   <a href="#" className="d-block">Vivek</a>
                              </div>
                         </div>
                         {/* SidebarSearch Form */}
                         <div className="form-inline">
                              <div className="input-group" data-widget="sidebar-search">
                                   <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                   <div className="input-group-append">
                                        <button className="btn btn-sidebar">
                                             <i className="fas fa-search fa-fw" />
                                        </button>
                                   </div>
                              </div>
                         </div>
                         {/* Sidebar Menu */}
                         <nav className="mt-2">
                              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                   {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link">
                                             <i className="nav-icon fas fa-edit" />
                                             <p>
                                                  Forms
                                                  <i className="fas fa-angle-left right" />
                                             </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                             <li className="nav-item">
                                                  <Link to="/general" className="nav-link">
                                                       <i className="far fa-circle nav-icon" />
                                                       <p>Set blog</p>
                                                  </Link>
                                             </li>
                                        </ul>
                                   </li>
                                   <li className="nav-item">
                                        <a href="#" className="nav-link">
                                             <i className="nav-icon fas fa-table" />
                                             <p>
                                                  Tables
                                                  <i className="fas fa-angle-left right" />
                                             </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                             <li className="nav-item">
                                                  <Link to="/datatable" className="nav-link">
                                                       <i className="far fa-circle nav-icon" />
                                                       <p>View Blog</p>
                                                  </Link>
                                             </li>
                                        </ul>
                                   </li>

                              </ul>
                         </nav>
                         {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
               </aside>
               <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
               </aside>
          </>
     )
}
export default SideBar;