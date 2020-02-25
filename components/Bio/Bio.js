import React from 'react';

function Bio() {
    return(
    <>
    <section id="about">
            <h2>About Zee</h2>
            <img className="zee-pic" src="zee.JPG" alt='picture of zee smiling'/>
          
            <div className="zee-bio">
                <p>I am a web developer and recent graduate of the 
                    Engineering Immersion Career Path bootcamp at Thinkful. I enjoy 
                    the complexity of coding, as well as the ability to be innovative. 
                    As a creative person, coding allows me to manifest ideas in fun and 
                    exciting ways. Coding is always evolving and developers like myself 
                    are at the forefront of this technical revolution. I am looking forward 
                    to working with an amazing team of programmers to lead the way to new 
                    software innovations.
                </p>
                {/* <br> */}
                <p>When I’m not coding you will usually find me
                    sitting behind a blank canvas with a paint brush in my hand.  
                    Arts is a passion of mine that allows me to recreate 
                    the reality around me. I love spending time with my sons, dogs, 
                    friends and family whenever I can tear myself away from my computer.
                </p>
            </div>
            <a accesskey="home" id="home" href="../index.html"> Home </a>
    </section>
    </>
    )
}

export default Bio;