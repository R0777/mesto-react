import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';

const App = (props) => {
  return (
    <div className="page">
  <Header />
  <Main />
  <Footer />
  <template className="template__place">
    <figure className="card">
      <img src="#" alt="#" className="card__pic" />
      <button className="card__trash"></button>
      <figcaption className="card__text">
        <h4 className="card__name"></h4><div className="card__like-block"><button type="button" className="card__like"></button><p className="card__like-number">0</p></div>
      </figcaption>
    </figure>
  </template>
</div>
  );
}

export default App;
