import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className='about-page'>
      <h4>Questions? Call  <Link className='call-links' to='000-800-919-1694'>000-800-919-1694</Link></h4>
      <ul className='about-links'>
        {link.map((h) => (
          <li key={h.id} >
            <Link className='more-links'  to={h.link}>{h.name}</Link>
          </li>
        ))}
      </ul>
      <select className='about-sign-btn' >
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
      </select>
      <p className='about-para'>Netflix India</p>
    </div>
  )
}
const link = [
  {
    link: "FAQ",
    name: 'FAQ',
    id: 1
  },
  {
    link: "Help Center",
    name: "Help Center",
    id:2
  },
  {
    link: "Account",
    name: "Account",
    id: 3
  },
  {
    link: "Media Center",
    name: "Media Center",
    id: 4
  },
  {
    link: "Investor Relations",
    name: "Investor Relations",
    id: 5
  },
  {
    link: "Jobs",
    name: "Jobs",
    id: 6
  },
  {
    link: "Ways to Watch",
    name: "Ways to Watch",
    id: 7
  },
  {
    link: "Terms of Use",
    name: "Terms of Use",
    id: 8
  },
  {
    link: "Privacy",
    name: "Privacy",
    id: 9
  },
  {
    link: "Cookies Prefrences",
    name: "Cookies Prefrences",
    id: 10
  },
  {
    link: "Corporate Information",
    name: "Corporate Information",
    id: 11
  },
  {
    link: "Contact Us",
    name: "Contact Us",
    id: 12
  },
  {
    link: "Speed Test",
    name: "Speed Test",
    id: 13
  },
  {
    link: "Legal Notices",
    name: "Legal Notices",
    id: 14
  },
  {
    link: "Only on Netflix",
    name: "Only on Netflix",
    id: 15
  }
]

export default About;