import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'assets/Painting 4.jpeg', title: 'Handmade Art', description: 'Experience the beauty of handmade creations.' },
    { image: 'assets/Painting1.jpeg', title: 'Unique Crochet', description: 'Delicate and intricate crochet items for you.' },
    { image: 'assets/Painting 2.jpeg', title: 'Exclusive Designs', description: 'Each piece is crafted with care and attention.' },
    { image: 'assets/Painting 3.jpeg', title: 'Exclusive Designs', description: 'Each piece is crafted with care and attention.' },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to update the active slide
  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <>
      <div className="app">
      <header className="navbar">
        <div className="container">
          <h1 className="logo">
            <a href="home.html" className="logo-link">
              <img src="assets/logo.png" alt="Golhars Logo" className="logo-img" />
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

      <section className="hero-slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
              <div className="image-container">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="text-container">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dots-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container3">
          <p>© 2024 Golhars</p>
          <div className="social-links">
            <a href="#" className="hover">Facebook</a>
            <a href="#" className="hover">Instagram</a>
            <a href="#" className="hover">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
