import React from 'react';
import './App.css';
import { quotes } from './quotes';
import { colors } from './colors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuoteNumber: Math.floor(Math.random() * (quotes.length)),
      randomColorNumber: Math.floor(Math.random() * (colors.length)),
      textFade: false
    };
    this.newNumber = this.newNumber.bind(this);
  }

  newNumber() {
    let newRQN = Math.floor(Math.random() * (quotes.length));
    let newRCN = Math.floor(Math.random() * (colors.length));
    while (newRQN === this.state.randomQuoteNumber) {
      newRQN = Math.floor(Math.random() * (quotes.length))
    };
    while (newRCN === this.state.randomColorNumber) {
      newRCN = Math.floor(Math.random() * (colors.length))
    };
    this.setState({
      textFade: true,
      randomColorNumber: newRCN
    })
    setTimeout(() => {
      this.setState({
        randomQuoteNumber: newRQN
      })
    }, "500");
    console.log(document.getElementById('quote-box').style)
    setTimeout(() => {
      this.setState({
        textFade: false
      })}, "1000");

  }

  render() {
    const randomQuote = quotes[this.state.randomQuoteNumber].quote;
    const randomQuoteAuthor = quotes[this.state.randomQuoteNumber].author;
    const randomColor = colors[this.state.randomColorNumber];

    return (
      <div className="App" style={{backgroundColor: randomColor}}>
        <div id='quote-box'>
          <blockquote>
            <p
              id='quote'
              style={{color: randomColor, animationName: (this.state.textFade ? 'text-fade' : 'none')}}>
              <i className="fa-sharp fa-solid fa-quote-left quotation-sign"></i>
              {randomQuote}
            </p>
          </blockquote>
          <p
            id='author'
            style={{color: randomColor, animationName: (this.state.textFade ? 'text-fade' : 'none')}}>
            - {randomQuoteAuthor}
          </p>
          <div id='buttons'>
            <a
              id='tweet-quote'
              href="twitter.com/intent/tweet"
              target="_blank"
              style={{backgroundColor: randomColor}}>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <button
              id='new-quote'
              onClick={this.newNumber}
              style={{backgroundColor: randomColor}}
              disabled={this.state.textFade}>
              New quote
            </button>
          </div>
        </div>
        <footer>
          <p>&#169; 2022 by mrsandw1ch</p>
        </footer>
      </div>
    );
  };
}

export default App;
