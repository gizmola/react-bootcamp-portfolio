import React, { Component } from 'react';

const TITLES = [
    'a Software Engineer',
    'a music lover',
    'a film reviewer',
    'an enthusiastic learner',
    'a hockey player',
    'an adventure seeker'
]

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title Did Mount');
        this.animateTitle();
    };

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        console.log('Title Did Unmount');
    };

    animateTitle = () => {
        
        this.titleInterval = setInterval(() => {
            const titleIndex = ++this.state.titleIndex % TITLES.length;
            this.setState({ titleIndex: titleIndex })
        }, 4000)
        
        console.log('this.titleInterval', this.titleInterval);
    }  

    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;