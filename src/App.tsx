import React, { useState } from 'react';
import cn from 'classnames';
import './App.css';


function App() {

  const [open, setOpen] = useState < boolean > (false);
   
  return (
    <div>
      <nav className="menu">
        <div className={cn(
          'menu-open',
          {
            'opened': open
          })}
        />
        <label className="menu-open-button"
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger hamburger-1" />
          <span className="hamburger hamburger-2" />
          <span className="hamburger hamburger-3" />
        </label>
        
        <div className="menu-item"><i className="far fa-chart-bar" /></div>
        <div className="menu-item"><i className="fa fa-plus" /></div>
        <div className="menu-item"><i className="fa fa-heart" /></div>
        <div className="menu-item"><i className="fa fa-envelope" /></div>
        <div className="menu-item"><i className="fa fa-cog" /></div>
        <div className="menu-item"><i className="fa fa-ellipsis-h" /></div>
        
      </nav>
    </div>
  );
}

export default App;
