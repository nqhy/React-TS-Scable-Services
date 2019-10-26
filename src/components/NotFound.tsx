import React from 'react';
import { Link } from 'react-router-dom';

import { PageNotFound } from '../styles/images';

const NotFound = () => (
  <div>
    <img
      src={PageNotFound}
      style={{
        width: 400,
        height: 400,
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
    />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Link to="/">Return to Home Page</Link>
    </div>
  </div>
);

export default NotFound;
