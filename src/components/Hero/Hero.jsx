import React, { Component } from 'react';
import Nav from '../Nav'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero_div">
                <Nav navItems={this.props.navItems}/>
                <div id="hero_text_div">
                    <h1>EXCEPTIONAL DEVELOPMENT</h1>

                    <p>We offer the creation of websites, web applications and mobile applications<br></br>
with the help of the most popular technologies and the best software solutions.</p>

                   
                </div>
                <div id="buttons_div">
                    <a href="/" className="button button_main">Contact Us</a>
                    <a href="/" className="button">Learn more</a>
                </div>
            </div>
        )
    }
}

export default Hero;