import React from 'react';
import logogrey from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/SCNetLogoGrey.png';
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/CSS/Home.css';
import box from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/box.png'; 
import poeple from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/people.png';
import service from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/customer-support.png';
import car1 from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/carousel1.jpg';
import car2 from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/car2.jpg';
import car3 from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/car3.png';
import car4 from '/home/ST10117284/ReactTest/south-africa-map2-master/south-africa-map2-master/src/images/car4.jpg';

const Home = () => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClick = (text) => {
    speak(text);
  };

  const carouselItems = [
    {
      image: car1,
      title: 'Rental and Logistics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      buttonText: 'Learn More',
      link: 'https://www.scnetdeals.co.za/'  // Replace with your desired URL
    },
    {
      image: car2,
      title: 'Business Enterprises',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      buttonText: 'Learn More',
      link: 'https://www.scnetdeals.co.za/'  // Replace with your desired URL
    },
    {
      image: car3,
      title: 'Stitch Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      buttonText: 'Learn More',
      link: 'https://www.scnetdeals.co.za/'  // Replace with your desired URL
    },
    {
      image: car4,
      title: 'Management Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      buttonText: 'Learn More',
      link: 'https://www.scnetdeals.co.za/'  // Replace with your desired URL
    }
  ];

  const youtubeOptions = {
    width: '560',
    height: '315',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="full">
      <div className="home-container">
        
        <section className="hero-section">
          <div className="logo-container">
            <img src={logogrey} alt="SCNet Logo Grey" className="logo-grey" />
            <p className="intro-text" onClick={() => handleClick('SCNet is a South African company founded in 2010. We are dedicated to bridging the gap between small, medium, and micro-sized enterprises (SMMEs) and larger corporations within the supply chain. We operate a national online platform that functions as a trade directory and supplier database. SCNet aims to foster growth and collaboration among businesses across various sectors, enhancing economic development and efficiency in the South African market.')}>
              SCNet is a South African company founded in 2010. We are dedicated to bridging the gap between
              small, medium, and micro-sized enterprises (SMMEs) and larger corporations within the supply chain.
              We operate a national online platform that functions as a trade directory and supplier database. SCNet aims to foster growth and collaboration among businesses across various sectors, enhancing economic development and efficiency in the South African market.
            </p>
          </div>
        </section>

        <section className="carousel-section">
          <h2>Featured Products</h2>
          <Carousel>
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-content">
                  <h3 className="carousel-title">{item.title}</h3>
                  <p className="carousel-description">{item.description}</p>
                  <a href={item.link} className="carousel-button" target="_blank" rel="noopener noreferrer">
                    {item.buttonText}
                  </a>
                </div>
                <img src={item.image} alt={`Slide ${index}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
        </section>

        <section className="tree-logos-section">
          <h2>About Us</h2>
          <div className="tree-logos-container">
            <div className="tree-logo-item">
              <img src={box} alt="Tree Logo 1" className="tree-logo" />
              <h3 className="tree-logo-title">Our Products</h3>
              <p className="tree-logo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam vulputate dignissim suspendisse in est. Cursus eget nunc scelerisque viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.</p>
            </div>
            <div className="tree-logo-item">
              <img src={poeple} alt="Tree Logo 2" className="tree-logo" />
              <h3 className="tree-logo-title">Our Staff</h3>
              <p className="tree-logo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam vulputate dignissim suspendisse in est. Cursus eget nunc scelerisque viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.</p>
            </div>
            <div className="tree-logo-item">
              <img src={service} alt="Tree Logo 3" className="tree-logo" />
              <h3 className="tree-logo-title">Our services</h3>
              <p className="tree-logo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam vulputate dignissim suspendisse in est. Cursus eget nunc scelerisque viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.</p>
            </div>
          </div>
        </section>

        <section className="video-section">
          <h2>Featured Video</h2>
          <div className="video-container">
            <YouTube videoId="FjprPc7Im_o" opts={youtubeOptions} />
          </div>
        </section>
        
      </div>
    </section>
  );
};

export default Home;
