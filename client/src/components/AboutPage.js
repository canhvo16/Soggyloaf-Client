import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>About SoggyLoaf</h1>
      <hr />
      <p className="writing">
        This is a Full-Stack PERN (PostgreSQL/Express/React/Node) application
        with a built-in custom user authentication. SoggLoaf is made out of the
        love for anime and inpired by a popular application named Crunchyroll.
        Credits to AniList for providing a free anime database that is used for
        SoggyLoaf. In the application, users will be sent to the HomePage which
        displays a list of animes from different categories. There is a Search
        tab where users can find and discover other animes. By clicking on the
        anime, it will navigate users to an AnimeDetailsPage which shows deatils
        of the anime along with a list of episodes. Every episode will navigate
        users to the episode link on Crunchyroll allowing them to view it. Thank
        you so much for using SoggyLoaf!
      </p>
      <h2>About the Team</h2>
      <p className="writing">
        We are a team of passionate, anime-viewing, General Assembly students
        enrolled in the Software Engineering Immersive curriculum. This is our
        Unit 3 project.
      </p>
      <div className="profile-container">
        <div>
          <h3>LinkedIn Profiles</h3>
          <div className="link-container">
            <a className="links" href="linkedin.com/in/takkwanlo">
              Tak Lo
            </a>
            <a
              className="links"
              href="https://www.linkedin.com/in/guillermo-palencia/"
            >
              Guillermo Palencia
            </a>
            <a className="links" href="https://www.linkedin.com/in/canhvo16/">
              Canh Vo
            </a>
          </div>
        </div>
        <div>
          <h3>Github Profiles</h3>
          <div className="link-container">
            <a className="links" href="https://github.com/TakKwan">
              Tak Lo
            </a>
            <a className="links" href="https://github.com/guillermopalencia">
              Guillermo Palencia
            </a>
            <a className="links" href="https://github.com/canhvo16">
              Canh Vo
            </a>
          </div>
        </div>
      </div>
      <h3>Github Repository</h3>
      <a className="links" href="https://github.com/canhvo16/Soggyloaf-Client">
        Client Repository
      </a>
      <a className="links" href="https://github.com/canhvo16/Soggyloaf-Server">
        Server Repository
      </a>
    </div>
  )
}

export default About
