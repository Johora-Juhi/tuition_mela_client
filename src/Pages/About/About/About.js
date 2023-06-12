import React, { useEffect } from 'react';
import Growing from '../../Home/Growing/Growing';
import LearnersSay from '../../Home/LearnersSay/LearnersSay';
import StartLearning from '../../Home/StartLearning/StartLearning';
import AboutBanner from '../AboutBanner/AboutBanner';
import Subscribe from '../Subscribe/Subscribe';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Growing></Growing>
            <LearnersSay></LearnersSay>
            <Subscribe></Subscribe>
            <StartLearning></StartLearning>
        </div>
    );
};

export default About;