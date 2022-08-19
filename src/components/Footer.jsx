import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="container my-5 mainFooter">

        <footer
          className="text-center text-lg-start text-white footerContainer"
        >

          <div className="container p-4 pb-0">

            <section className="">

              <div className="row">

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3" />
                    {' '}
                    г. Москва, Шоссе Энтузиастов 12 ст.2
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" />
                    {' '}
                    info@enjoysocks.ru
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" />
                    {' '}
                    + 11 111-11-11
                  </p>
                </div>

              </div>

            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">


                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                    href="..."
                  >
                    <i className="fab fa-facebook-f" />

                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                    href="..."
                  >
                    <i className="fab fa-twitter" />

                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                    href="..."
                  >
                    <i className="fab fa-google" />

                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                    href="..."
                  >
                    <i className="fab fa-instagram" />

                  </a>
                </div>

              </div>
            </section>

          </div>

        </footer>

      </div>
    </div>
  );
}
