import React from 'react';
import UseReviewData from '../../hooks/ReviewData';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  const reviewData = UseReviewData(); // Getting review data from hooks
  return (
    <div>
      <Hero />
      <Reviews reviews={reviewData.slice(0, 3)} />
    </div>
  );
};

export default Home;