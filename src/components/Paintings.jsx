import React from 'react'
import './paintings.css'

const Paintings = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">
            <a href="home.html" className="logo-link">
              <img src="logo.png" alt="Golhars Logo" className="logo-img" />
            </a>
          </h1>
          <nav>
            <ul className="nav-links">
              <li><a href="home.html" className="hover">Home</a></li>
              <li><a href="paintings.html" className="hover">Paintings</a></li>
              <li><a href="crochet.html" className="hover">Crochet</a></li>
              <li><a href="customize.html" className="hover">Customize</a></li>
              <li><a href="cart.html" className="hover">Cart</a></li>
              <li><a href="faq.html" className="hover">FAQ</a></li>
              <li><a href="contact.html" className="hover">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="main-content">
        {/* Filters Section */}
        <aside className="filters">
          <h2>Filters</h2>

          {/* Collection Filters */}
          <div className="filter-section">
            <h3>Collection</h3>
            <ul>
              <li><label><input type="checkbox" /> Abstract</label></li>
              <li><label><input type="checkbox" /> CityScapes</label></li>
              <li><label><input type="checkbox" /> Cultural</label></li>
              <li><label><input type="checkbox" /> Documentary</label></li>
              <li><label><input type="checkbox" /> Folk</label></li>
              <li><label><input type="checkbox" /> Figurative</label></li>
              <li><label><input type="checkbox" /> Glass</label></li>
              <li><label><input type="checkbox" /> Landscape</label></li>
              <li><label><input type="checkbox" /> Modern Art</label></li>
              <li><label><input type="checkbox" /> Miniature</label></li>
              <li><label><input type="checkbox" /> Murals</label></li>
              <li><label><input type="checkbox" /> Nature</label></li>
              <li><label><input type="checkbox" /> Portraits</label></li>
            </ul>
          </div>

          {/* Color Scheme Filters */}
          <div className="filter-section">
            <h3>Color Scheme</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span className="color-circle" style={{ backgroundColor: "#FFFFFF" }}></span>
                  White Walls
                </label>
              </li>
              {/* More color options here */}
            </ul>
          </div>

          {/* Medium-Materials Filters */}
          <div className="filter-section">
            <h3>Medium-Materials</h3>
            <ul>
              <li><label><input type="checkbox" /> Acrylic</label></li>
              <li><label><input type="checkbox" /> Glass</label></li>
              <li><label><input type="checkbox" /> Ink</label></li>
              <li><label><input type="checkbox" /> Mixed Media</label></li>
              <li><label><input type="checkbox" /> Oil</label></li>
              <li><label><input type="checkbox" /> Pencils</label></li>
              <li><label><input type="checkbox" /> Pastels</label></li>
              <li><label><input type="checkbox" /> Watercolour</label></li>
            </ul>
          </div>

          {/* Price Range Filters */}
          <div className="filter-section">
            <h3>Price Range</h3>
            <ul>
              <li><label><input type="checkbox" /> Below ₹5,000</label></li>
              <li><label><input type="checkbox" /> ₹5,000 - ₹10,000</label></li>
              <li><label><input type="checkbox" /> ₹10,000 - ₹20,000</label></li>
              <li><label><input type="checkbox" /> Above ₹20,000</label></li>
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <main className="products">
          {[...Array(7)].map((_, index) => (
            <div className="item" key={index}>
              <img src="https://via.placeholder.com/300x200" alt="Painting" className="item-img" />
              <div className="item-info">
                <h4 className="item-title">Abstract Painting</h4>
                <p className="item-price">$100</p>
                <button className="item-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Paintings
