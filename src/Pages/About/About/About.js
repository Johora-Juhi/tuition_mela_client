import React from 'react';
import Growing from '../../Home/Growing/Growing';
import LearnersSay from '../../Home/LearnersSay/LearnersSay';
import StartLearning from '../../Home/StartLearning/StartLearning';
import AboutBanner from '../AboutBanner/AboutBanner';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Growing></Growing>
            <LearnersSay></LearnersSay>
            <StartLearning></StartLearning>
        </div>
    );
};

export default About;