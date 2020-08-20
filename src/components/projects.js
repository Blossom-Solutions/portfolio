import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0 auto 20px auto'  }}>
            <CardTitle style={{color: '#fff',textShadow:'1px 1px black', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Emilia-Tan</CardTitle>
            <CardText style={{color:'black'}}>
              Emilia-Tan is a React-Based Web Application for Photo Sharing.<br/> It's set-up with a Mongo Database for Users and Posts,
              a Back-End made with Express and Node-JS, and hosted on Heroku(PS: it runs on free Dynos which can take some time to start up again).<br/> The users can customize their own profiles, upload photos, like/comment and More!
            </CardText>
            <CardActions border>
              <a rel="noopener noreferrer" href="https://github.com/Blossom-Solutions/emiliaTan/tree/master" target="_blank"><Button colored>GitHub</Button></a>
              <a  rel="noopener noreferrer" target="_blank" href="https://emilia-t4n.herokuapp.com"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0 auto 20px auto' }}>
            <CardTitle style={{color: '#fff',textShadow:'1px 1px black', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Shop-Circuit</CardTitle>
            <CardText style={{color:'black'}}>
              Shop-Circuit is a Mock for an E-Commerce Site, it's Built on React and Redux, with a Back-End
              supported by an API built uppon a Cloud-Function with Firebase, NodeJS and Express, Hosted with Netlify.<br/>
              Users can put items on the cart, checkout, and keep track of their Purchases.<br/><br/>
            </CardText>
            <CardActions  border>
              <a rel="noopener noreferrer" href="https://github.com/Blossom-Solutions/shopcircuit" target="_blank"><Button colored >GitHub</Button></a>
              <a rel="noopener noreferrer" target="_blank" href="https://shopcircuit.netlify.app"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0 auto 20px auto' }}>
            <CardTitle style={{color: '#000',textShadow:'1px 1px white', height: '176px', background: 'url(https://img2.pngio.com/node-js-logo-png-1-png-image-node-js-png-1600_1600.png) center / cover'}} >Tsukihime</CardTitle>
            <CardText style={{color:'black'}}>
              Tsukihime is a Bot specially made for Discord, a multi-platform social App quite popular the latest years.<br/>
              It's made entirely on Node, with integration with the Discord API, as well as Spotify/Youtube/OpenWeather Apis which fetch Data on Event Based commands, providing the user for the information requested.
              It also has a Music Player, useful for using in Calls with friends
            </CardText>
            <CardActions border>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Blossom-Solutions/tsukihimebot/tree/master"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else{
      return null
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
