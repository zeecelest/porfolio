import React from 'react';

function Projects() {
    return(
        <>
        <section id="projects">
            <h2>Projects</h2>
            <ul className="project" id="project">
                <img className="zee-quizapp" src="QuizAppScreenshot.jpg" atl="space image of quiz app" />
                <h4>Title:</h4>
                <li>Outer Space Quiz App</li>
                <br></br>
                <h4>Description:</h4>
                <li>This app is designed to test users knowledge of space.  
                    It asks 5 multiple choice questions and lets the user know their 
                    progress along the way.  The user will know how well they scored at t
                    he end of the quiz.</li>
                <br></br>
                <h4>Technology Stack: </h4>
                    <li>HTML, CSS, JavaScript, jQuery</li>
                    <br></br>
                <div class="liveAppLink">
                    <a href="https://thinkful-ei-heron.github.io/zee_shannon_quiz_app/">Live App</a>
                    <a href="https://github.com/thinkful-ei-heron/zee_shannon_quiz_app">GitHub Repo</a>
                </div>
                <br></br>
                <img className="live-listapp" src="livelist.jpg" alt="black and pink landing page" />
                <h4>Title:</h4>
                <li>Live List</li>
                <h4>Description:</h4>
                <li>Live List helps users find new places that other users visited and liked. It provides a customizable list from users 
                    who have the inside track on what is going on. The user dashboard has the Hot Lists, where user can filter it by city. 
                    User can also use hashtags of what playlist they are interested in. Using Live List is putting your entertainment 
                    experience in the hands of the people who tried it. This application focuses on the enjoyment of being introduced to 
                    something new. Using Live List will allow users to feel at home wherever they go. Live like the Locals with LIVE LIST!
                </li>
                <br></br>
                <h4>Technology Stack:</h4>
                    <ul>Front End:</ul>
                        <li>HTML, CSS3, React, JavaScript, Cypress, JWT-Decode, Material UI, APIs(GoogleMaps and Restaurants)</li>
                        <li>Deployed in Netlify</li>
                    <br></br>
                    <ul>Back End:</ul>
                        <li>Node, Express, PostgreSql, GeoCode, Bcryptjs, JWT, Morgan, Chai, Supertest</li>
                        <li>Deployed in Heroku</li>
                    <br></br>
                <div class="liveAppLink">
                    <a href="https://social-playlist.netlify.com/">Live App</a>
                    <a href="https://github.com/thinkful-ei-heron/SocialPlaylist-Client.git">GitHub Repo: Front End</a>
                    <a href="https://github.com/thinkful-ei-heron/SocialPlaylist-server">GitHub Repo: Back End</a>
                </div>
            </ul>
                <br></br>
        <a accesskey="home" id="home" href="../index.html">Home</a>
    </section>
    </>
    )
}



export default Projects;