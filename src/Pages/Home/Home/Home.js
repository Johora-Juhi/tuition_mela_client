import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import LookingFor from '../LookingFor/LookingFor';
import LearnersSay from '../LearnersSay/LearnersSay';
import StartLearning from '../StartLearning/StartLearning';
import useTitle from '../../../hooks/useTitle';
import Growing from '../Growing/Growing';


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
            <Growing></Growing>
            <ChooseUs></ChooseUs>
            <LearnersSay></LearnersSay>
        </div>
        
    );
};

export default Home;