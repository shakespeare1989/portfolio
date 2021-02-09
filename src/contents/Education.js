import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Full Stack Web Developer" where="Bottega DevCamp" from="July 2020" to="September 2020"/>
            <Widecard title="ReactNative Mobile Developer" where="Bottega DevCamp" from="November 2020" to="Jannuart 2021"/>
            <Widecard title="Python for Everybody" where="Michigian UniversityX" from="2020" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    