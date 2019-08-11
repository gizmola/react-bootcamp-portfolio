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
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        // Queue fadeOut after 2s
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitle();
    };

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    };

    // Queue Change the title, fadeIn after 4 s
    animateTitle = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = ++this.state.titleIndex % TITLES.length;
            this.setState({ titleIndex: titleIndex, fadeIn: true })
            // Queue fadeOut after 2s
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000) 
    }  

    render() {
        const { titleIndex, fadeIn } = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={ fadeIn ? 'title-fade-in' : 'title-fade-out' }> I am {title}</p>
        )
    }
}

export default Title;