import React from 'react';
import UseReviewData from '../../hooks/ReviewData';
import Hero from '../Hero/Hero';
import Opinions from '../Opinions/Opinions';

const Home = () => {
  const reviewData = UseReviewData(); // Getting review data from hooks
  return (
    <div>
      <Hero />
      <Opinions reviews={reviewData.slice(0, 3)} />
    </div>
  );
};

export default Home;