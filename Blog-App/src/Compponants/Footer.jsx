/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <>
      <footer 
        className="bg-dark text-white text-center py-4 my-0"
        style={{
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>About Us</h5>
              <p>We are committed to providing the best services and experiences.</p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Contact</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="mt-3">
            <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer