import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faDownload, faMessage, faMobile } from '@fortawesome/free-solid-svg-icons'


function Morereason() {
    return (
        <div className='background-body'>
            <h2 id='text'>More reasons to join</h2>
            <ul className='headings-text'>
                {data.map((h) => (
                    <li key={h.id} className='headings-para'>
                        <h2>{h.heading}</h2>

                        <p>{h.information}</p>
                        <div className='label-font' >
                            <FontAwesomeIcon icon={h.icon} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const data = [
    {
        id: 1,
        heading: 'Enjoy on your TV',
        information: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        icon: faDesktop
    },
    {
        id: 2,
        heading: 'Download your shows to watch offline',
        information: 'Save your favourites easily and always have something to watch.',
        icon: faDownload
    },
    {
        id: 3,
        heading: 'Watch everywhere',
        information: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
        icon: faMobile
    },
    {
        id: 4,
        heading: 'Create profiles for kids',
        information: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
        icon: faMessage
    },
]

export default Morereason;