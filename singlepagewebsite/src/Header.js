import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column
                        align-items-start">
                          <h1 className="display-2">
                          “ The purpose of our lives is to be happy.”
                          </h1>
                          <p className="main-hero-para">
                              Ayushi Gupta
                          </p>
                          <h3>
                       I am software developer
                          </h3>
                          <div className="input-group mt-3">
                              <input type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"
                                  placeholder="Enter your Email"
                              />
                              <div className="input-group-button">Get it now</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center ">
                              <img src="./images/ayushi.png" className="img-fluid"></img>
                          </div>
                    </div>
                </section>

            </header>
        </>
    )
}

export default Header;
