import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from '../components/navbar';

const Layout = ({children, title}) => {
  return (
    
    <div>
      <Helmet>
        <title>{title}</title>
          </Helmet>
          <Navbar/>
          <main>
              {children}
          </main>

    </div>
  );
}

export default Layout