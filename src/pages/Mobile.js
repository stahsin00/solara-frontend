import React from 'react';
import './Mobile.css';

function Mobile() {

  return (
    <div className="mobile">
        <div className='mobile-directions'>
            <div>Please Download the Mobile App.</div>
            <a href="https://github.com/stahsin00/solara-mobile" target="_blank" rel="noopener noreferrer">
                <button className='button-type-light'>Download</button>
            </a>
        </div>
    </div>
  );
}

export default Mobile;