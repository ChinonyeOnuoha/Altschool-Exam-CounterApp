// This component is used to display a "Page Not Found" message, including a link to return to the home page
// This component should be displayed when a user tries to access a route that does not exist


import React from 'react';
import './pageNotFound.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
  return (
    <div className='pageNotFound_main'>
      <div className='pageNotFound_main_imgs'>
        <div className='pageNotFound_main_imgs_one'>
          <img src="/404.svg" alt="404" />
        </div>

        <div className='pageNotFound_main_imgs_two'>
          <img src="/error illustration.svg" alt="Error Illustration" />
        </div>
      </div>
      <h1>Page not found</h1>
      <span>The page you are looking for does not exist</span>

      
        {/* Use the Link component to navigate to the home page */}

        <Link to="/" className="custom-link">
              <FontAwesomeIcon icon={faAnglesLeft} />
            Go back to counter app 
        </Link>
      
      
    </div>
  );
}

export default PageNotFound;
