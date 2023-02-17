import React from 'react'

function Index() {
    return (
        <>
            {/* page First Navigation */}
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://coffeeaffection.com/wp-content/uploads/elementor/thumbs/Coffee-Affection-primary-logo-p8bq4id59gotp1vm7anm2tyicszbbbc2gr4nzgd4ty.png" alt />
                    </a>
                    <div className="socials">
                        <a href="#"><i class="fa-brands fa-facebook-f" /></a>
                        <a href="#"><i class="fa-brands fa-twitter" /></a>
                        <a href="#"><i class="fa-brands fa-pinterest-p" /></a>
                        <a href="#"><i class="fa-brands fa-instagram" /></a>
                        <a href="#"><i class="fa-brands fa-youtube" /></a>
                    </div>
                </div>
            </nav>
            {/* End Of First Navigation */}
            {/* Page Second Navigation */}
            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-dark sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold" href>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold" href>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold" href>Blogs</a>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href className="ml-4 btn btn-success mt-1 btn-sm">Contact Us</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            {/* End Of Page Second Navigation */}
            {/* page-header */}
            <header className="page-header" />
            {/* end of page header */}
            <div className="container">
                <div className="page-container">
                    <div className="page-content">
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src="assets/imgs/blog-2.jpg" alt className="w-100" />
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">title</h5>
                                        <small className="small text-muted">
                                            <a href="#" className="text-muted">Comments</a>
                                        </small>
                                        <p className="my-2">dis</p>
                                    </div>
                                    <div className="card-footer p-0 text-center">
                                        <a href="#" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Footer */}
            <footer className="page-footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                            <img src="https://coffeeaffection.com/wp-content/uploads/elementor/thumbs/Coffee-Affection-primary-logo-p8bq4id59gotp1vm7anm2tyicszbbbc2gr4nzgd4ty.png" alt className="logo" />
                        </div>
                        <div className="col-md-9 text-center text-md-right">
                            <div className="socials">
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-facebook-f pr-1" /> 123,345</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-twitter pr-1" /> 321,534</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-pinterest-p pr-1" /> 543,312</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-instagram pr-1" /> 123,023</a>
                                <a href="#" className="font-weight-bold text-muted mr-4"><i className="fa-brands fa-youtube pr-1" /> 231,043</a>
                            </div>
                        </div>
                    </div>
                    <p className="border-top mb-0 mt-4 pt-3 small">©Copy Right, Created By <a href="#" className="text-danger font-weight-bold">Glass Info.</a> Allrights reserved
                    </p>
                </div>
            </footer>
            {/* End of Page Footer */}

        </>
    )
}

export default Index
