import React, { useState } from 'react';
import cn from 'classnames';
import './App.css';
const items = [
  { icon: 'fab fa-linkedin', url: 'http://www.google.com' },
  { icon: 'fab fa-facebook', url: 'http://www.google.com' },
  { icon: 'fab fa-instagram', url: 'http://www.google.com' },
  { icon: 'fab fa-github', url: 'http://www.google.com' },
  { icon: 'fab fas fa-envelope', url: 'http://www.google.com' },
  { icon: 'fab fa-telegram', url: 'http://www.google.com' },
];

function App() {

  const [open, setOpen] = useState<boolean>(false);
  const goto = (url: string) => {
    window.open(url);
    setOpen(false);
  }

  return (
    <div>
      <nav className="menu">
        <div className={cn(
          // fix class
          'menu-open',
          {
            // dynamic class
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
        { 
          items.map(item => { 
            return (
              < div className="menu-item"
                key={item.icon}
                onClick={() => goto(item.url)} >
                <i className={item.icon} />
              </div>
            )
          })
        }    
        
      </nav>
    </div>
  );
}

export default App;
