import React, { Component } from 'react';
import './loader.css'
import Logo from './assets/logo.png'
class  Loader extends Component {
    componentDidMount() {
        // This code will run after the component has mounted.
        const preloader = document.getElementById('loading');

        if (preloader) {
          // Check if the loader element exists
          document.body.style.overflow = 'hidden'; // Disable scrolling
          setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = 'visible'; // Re-enable scrolling
          }, 2000); // Hide the loader after 2 seconds (2000 milliseconds)
        } else {
          console.error('Loader element not found');
        }
      }
    render() {
  return (
    <>

<div>
        <div id="loading">
              <img src={Logo} alt="Loading..." />
          <div className="loader">
            <span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
};

export default Loader ;
