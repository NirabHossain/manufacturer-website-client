import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import './CustomLink.css';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link className='header-link'
          style={{  color: match?'blue':'lightcoral', textDecoration: "none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  
export default CustomLink;