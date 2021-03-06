import React from 'react';
import './App.css';


import LambdaTitle from './components/HeaderComponents/HeaderTitle';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContent from './components/HeaderComponents/HeaderContent';

import ReactBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

const App = () => {
  return (
    <div class='header'>
      {/* <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      <div class='top'>
        <ImageThumbnail />
        <div class='contents'>
          <LambdaTitle />
          <HeaderContent />
        </div>
      </div>
      
      <ReactBanner />
      <CardContent />

    </div>
  );
};

export default App;
