import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {/* Footer*/}
      <footer className="page-footer text-center text-md-left pt-4">
        {/* Footer Links*/}
        <div className="container-fluid">
          <div className="row">
            {/* First column*/}
            <div className="col-md-3 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">About Devine design</h5>
              <p>Devine Design Bowtique is a design language developed by Google. </p>
              <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML,
                  CSS,
                        and JS framework - Bootstrap.</p>
            </div>
            {/* /.First column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Second column*/}
            <div className="col-md-2 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">First column</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>
            {/* /.Second column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Third column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Second column</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>
            {/* /.Third column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Fourth column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Third column</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>
            {/* /.Fourth column*/}
          </div>
        </div>
        {/* /.Footer Links*/}
        <hr></hr>
        {/* Call to action*/}
        <div className="call-to-action text-center">
          <h4 className="my-4">Material Design for Bootstrap</h4>
          <ul className="list-unstyled list-inline mb-4">
            <li>
              <h5 className="my-4">Get our UI KIT for free</h5>
            </li>
            <li className="list-inline-item"><a target="_blank" href="https://mdbootstrap.com/getting-started/"
              className="btn btn-info">Sign up!</a></li>
            <li className="list-inline-item"><a target="_blank"
              href="https://mdbootstrap.com/material-design-for-bootstrap/" className="btn btn-default">Learn
                        more</a>
            </li>
          </ul>
        </div>
        {/* /.Call to action*/}
        {/* Copyright*/}
        <div className="footer-copyright text-center">
          <div className="container-fluid py-3">
            © 2018 Copyright: <a href="https://www.BDBowtique.com">BDBowtique.com</a>
          </div>
        </div>
        {/* /.Copyright*/}
      </footer>
      {/* /.Footer*/}
    </div>
  );
}

export default Footer;