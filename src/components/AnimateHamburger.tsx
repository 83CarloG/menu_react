import cn from 'classnames';
import React, { useState } from 'react';

export interface item {
    icon: string;
    url: string;
}
interface animatedhamburgerprops {
    items: item[];
}

export const AnimatedHamburger: React.FC<animatedhamburgerprops> = (props) => {
    
    const [open, setOpen] = useState<boolean>(false);
    const iconClickHandler = (url: string) => {
        // window.open(url);
        // setOpen(false);
    }
    return (
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
          props.items.map(item => { 
            return (
              < div className="menu-item"
                key={item.icon}
                onClick={() => iconClickHandler(item.url)} >
                <i className={item.icon} />
              </div>
            )
          })
        }    
        
      </nav>
    )
}