import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles.js';

const SocialProfiles = () => (
    <div>
        <h1>Connect with me!</h1>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
            ))
        }
    </div>
)   


const SocialProfile = props => {
    const { link, image } = props.socialProfile; 
    return (
        <span>
            <a href={link} alt="social"><img src={image} style={{ width: 35, height: 35, margin: 10 }}/></a>
        </span>
    )
}

export default SocialProfiles;


