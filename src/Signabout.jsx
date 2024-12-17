import React from 'react';
import "./sign.css";
import { Link } from 'react-router-dom';

function Signabout() {
    return (
      <div className='sign-color'>
        <div className='sign-about'>
            <h4>Questions? Call  <Link className='call-link' to='000-800-919-1694'>000-800-919-1694</Link></h4>
            <ul className='sign-list'>
                {links.map((f)=>(<li key={f.id}>
                    <Link className='sign-link' to={f.link}>{f.link}</Link>
                    </li>))}
            </ul>
            <select className='sign-about-btn' >
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
          </select>
        </div>
      </div>
    )
}
const links=[
    {
        link:"FAQ",
        id:1
      },
      {link:"Help Centre",
        id:2
      },
      {link:"Terms of Use",
        id:3
      },
      {link:"Privacy",
        id:4
      },
      {link:"Cookies Prefrences",
        id:5
      },
      {link:"Corporate Information",
        id:6
      },
]

export default Signabout