import React from 'react';
import './style.css';
import Imagescroll from './Imagescroll';

function Content() {
  return (
    <div>
    <div className='content-page'>
            <h2>Trending Now</h2>
        <div className='content-type'>
                <select className='option-btn'>
                    <option value="india">India</option>
                    <option value="global">Global</option>
                </select>
                <select className='option-btn2'>
                    <option value="india">Movies</option>
                    <option value="global">Tv Shows</option>
                </select>
        </div>
    </div>
     <Imagescroll/>
    </div>
  )
}

export default Content;