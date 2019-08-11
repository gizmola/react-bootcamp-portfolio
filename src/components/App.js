import React, { Component } from 'react';
import Projects from './Project.js';
import SocialProfiles from './SocialProfile.js';
import Title from './Title.js';
import profile from '../assets/profile.png';


class App extends Component {
    state = { 
        displayExtra: false
    }

    toggleExtra = () => {
        this.setState({ displayExtra: !this.state.displayExtra})
    }


    /*
    constructor() {

        super();
        this.state = { 
            displayExtra: false
        }

        this.readMore = this.readMore.bind(this);
        this.showLess = this.showLess.bind(this);
        this.toggleExtra = this.toggleExtra.bind(this);
    }
  
    toggleExtra() {
        this.setState({ displayExtra: !this.state.displayExtra}) 
    }

    readMore() {
        console.log('Component this:', this);
        this.setState({ displayExtra: true });
    }

    showLess() {
        this.setState({ displayExtra: false });
    }

    */

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>My Name is David</p>
                <Title /> 
                <p>I am always looking to work on projects so I can make some cash</p>
                {
                    this.state.displayExtra ? (
                        <div>
                            <img src={profile} alt='profile' className='profile'/>
                            <p>Here's some State Information:  Puggles are Great Dogs!</p>
                            <p>They go "Woooofff"</p>
                            <button onClick={this.toggleExtra}>Show less</button>
                        </div>
                    ) : 
                    (
                        <div>
                            <button onClick={this.toggleExtra}>Read More...</button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
            
        )
    }
}

export default App;