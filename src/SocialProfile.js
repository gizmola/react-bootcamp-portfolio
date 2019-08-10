import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles.js';

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h1>Connect with me!</h1>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return (
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        )    
                    })
                }
            </div>
        )
    }
}

class SocialProfile extends Component {
    render() {
        console.log('this.props',this.props);
        const { link, image } = this.props.socialProfile; 
        return (
            <span>
                <a key={this.props.key} href={link} alt="social"><img src={image} style={{ width: 35, height: 35, margin: 10 }}/></a>
            </span>
        )
    }
}

export default SocialProfiles;


