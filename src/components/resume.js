import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import profile from '../img/profile.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profile}
                alt="avatar"
                style={{height: '200px',border:'4px solid #17002e'}}
                 />
            </div>

            <h3 style={{}}>Tobias Blanco</h3>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Summary:<br/>
            I'm a Systems Engineering student who loves Web Development, I know both Back-End and Front-End though I usually tend to focus more on the Back-End Side.<br/>
            I love building up APIs for easy relay of Data to the desired applications, while also working up with the Front-End in mind and what the most suitable choice is.<br/>
            I also know and sometimes implement Cloud-Services with their backend (Firebase/Amplify) or Platform<bold>(GCP,AWS)</bold> as main operator behind the scenes to focus on the Front-End
            <br/><br/>
            Availability: Full-Time<br/>
            Mobility: Flexible<br/>
            Languages: Ingles(First Certificate)/Spanish Native<br/>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>La Plata, Buenos Aires,Argentina</p>
            <h5>Telegram</h5>
            <p><a rel="noopener noreferrer" href="https://t.me/BlossomArg" target="_blank">@BlossomArg</a></p>
            <h5>Email</h5>
            <p><a rel="noopener noreferrer" href="mailto:blossomsolutionsarg@outlook.com">blossomsolutionsarg@outlook.com</a></p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{textAlign:'center'}}>Education</h2>


            <Education
              startYear={2018}
              endYear={2023}
              schoolName="UTN-FRLP"
              schoolDescription="Systems Engineering"
               />

               <Education
                 startYear={2011}
                 endYear={2016}
                 schoolName="Pascacio Moreno High-School"
                 schoolDescription="Bachelourship in Social Communications"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 style={{textAlign:'center'}}>Skills</h2>
              <Skills
                skills={{
                  frontend:['Html','CSS','Javascript','React','PWAs','Material-UI','JQuery'],
                  backend:['NodeJS','Express','APIs','MySQL/SQlite3','MongoDB','Firebase','Python'],
                  others:['Version Control','React Native','AWS / GCP','Cloud Functions','REDUX']
                }}
                />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
