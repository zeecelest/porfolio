import React from 'react';

function Header () {
    return (
        <>
        <div className='header'>
        <header role="banner" className="hero">
            <h1>Zee Celest</h1>
        </header>
        </div>
       
        <div className="bannerHeading">
            <h3>WEB DEVELOPER</h3>
            <p></p>
            <p className="zeeQuote">"Hi, I’m Zee and I’m a Full Stack Developer
                with Multimedia Marketing experience!"
            </p>
        </div>

        <nav role="navigation">
            <ul className="nav-link" id="js-nav-link">
                <li><a href='#about' id="-js-nav-link-about">About Zee</a></li>
                <li><a href='#projects' id="js-nav-link-projects">Projects</a></li>
                <li><a href='#contact' id="js-nav-link-contacts">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Header;