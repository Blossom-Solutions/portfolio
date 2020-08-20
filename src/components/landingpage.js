import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import landingImage from '../img/profile.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', height: '100%'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            

            <div className="banner-text">
              <h1>Tobias Blanco</h1>
              <h2>Web Developer</h2>

            <hr/>

          <p > <a href="#" id="my-skills">  HTML/CSS | JavaScript | React | MongoDB | NodeJS | Express | Python | Firebase</a></p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/tobias-blanco-lopez-1989901b0/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Blossom-Solutions" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" aria-hidden="true" />
          </a>

          

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
