import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.style.css';

const NotFoundPage = () => {
  return (
    <div className='not-found-area'>
      <div>
        <h1 className='error-name'>404</h1>
        <h2 className='error-message'>Page Not Found</h2>
        <Link to='/' className='link' data-hover='Go back home'>
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
