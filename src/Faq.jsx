import React, { useState } from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faPlus} from '@fortawesome/free-solid-svg-icons';

function Faq() {
  const [questions,setquestions]=useState(null);
  const click=(id)=>{
   setquestions((previd)=>(previd===id?null:id))
  }
  return (
    <div className='faq-bar'>
        <h2>Frequently Asked Questions</h2>
        <ul className='faq-qa'>
            {data.map((h)=>
                
                    <li key={h.id}>
                        <label  onClick={()=>click(h.id)}>{h.questions} <FontAwesomeIcon className='icon-plus' icon={faPlus}/></label>
                        <p className={questions===h.id?'answer-vis':'answer'}>{h.answers}</p>
                    </li>
                )}
        </ul>
        <div className='faq-form'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='faq-form-width'>
                <input type='email' placeholder='Email address' required/>
                <button type='submit'>Get Started <FontAwesomeIcon icon={faAngleRight}/></button>
            </form>
        </div>
    </div>
  )
}

const data=[
    {
        id:1,
        questions:'What is Netflix?',
        answers:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        id:2,
        questions:"How much does Netflix cost?",
        answers:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        id:3,
        questions:"Where can I Watch?",
        answers:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    }, 
    {
        id:4,
        questions:"How do I cancel?",
        answers:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id:5,
        questions:"What can I watch on Netflix?",
        answers:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id:6,
        questions:"Is Netflix good for kids?",
        answers:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

export default Faq;