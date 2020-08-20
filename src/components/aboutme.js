import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
import aboutImg from '../img/about.jpg'


class About extends Component {
  render() {
    return(
      <div className='about-page'>
        <Grid>
          <Cell col={12} className="owo1">
            <h1>Hello, my name is Toby!</h1>
            <h3>I'm a Full-Stack developer</h3>
          </Cell>
        </Grid>
        <Grid>
        <Cell col={12} className="owo3">
            <img src={aboutImg} alt="A photo of myself"/>
          </Cell>
        </Grid>
        <Grid>
           <Cell col={12} className="owo2">
              <h3>About Myself:</h3>
              <p className="lead">I'm a 21 years old,  web developer living currently in La Plata, Buenos Aires, Argentina.
              I'm a Systems Engineering Student who deeply loves Programming and I'm looking forward to
              getting my first experiences in the IT world, working with a team and having new challenges to
              solve. All in all, I love getting myself projects to get involved into, I'm a fan of Gaming, Music
              and entertainment in general, so a lot of influence comes from there.<br/> 
              I think learning is a key point in a programmers life, from learning a new language from scratch
              to re-learning key aspects of your favorite languages, since in current times changes occur all that
              often, specially in the IT Business. I started up making simple, command based, programs in Python, and
              eventually I got interested in Web Development and how things went behind the curtain. I learnt about
              Databases, Async Programming, Servers, FrameWorks, and APIs which I found all pretty amazing.<br/>
              Nowadays, my key tool-set involves NodeJs, Express and React, and practice everyday.
              As for the future, my goal is to deepen my knowleadge even further, work in even more projects and
              enjoy communicating with a team!
              You can find my Skills in my resume, and my projects in this same website.
              
              </p>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
