import React from 'react';
import { Grid, Cell} from 'react-mdl';

const Skills = ({skills})=>{
  return(
    <Grid style={{}}>
      <Cell>
        <h3>Front-End</h3>
        <ul>
          {skills.frontend.map(el=> <li>{el}</li>)}
        </ul>
      </Cell>
      <Cell>
        <h3>Back-End</h3>
        <ul>
          {skills.backend.map(el=><li>{el}</li>)}
        </ul>
      </Cell>
      <Cell>
        <h3>Others</h3>
        <ul>
          {skills.others.map(el=> <li>{el}</li>)}
        </ul>
      </Cell>
    </Grid>
  )
}
export default Skills;
