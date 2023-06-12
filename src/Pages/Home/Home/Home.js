import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import LookingFor from '../LookingFor/LookingFor';
import LearnersSay from '../LearnersSay/LearnersSay';
import StartLearning from '../StartLearning/StartLearning';
import useTitle from '../../../hooks/useTitle';
import Growing from '../Growing/Growing';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';


const Home = () => {
    useTitle('Home');
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Banner></Banner>
            <LookingFor></LookingFor>
            <StartLearning></StartLearning>
            <ChooseUs></ChooseUs>
            <Growing></Growing>
            <BecomeInstructor></BecomeInstructor>
            <LearnersSay></LearnersSay>
        </div>
        
    );
};

export default Home;