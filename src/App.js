import './App.css';
import React from "react";

const APIURL = "https://dummyjson.com/quotes/random";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: 'Click for a new quote',
      author: '...'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    fetch(APIURL)
    .then((data) => data.json())
    .then((item) => {
      this.setState({
        quote: item.quote,
        author: item.author
      })
    });
  }

  render(){
    return(
      <div class="wrapper">
        <div class="container" id="quote-box">
          <h3 id="text">{this.state.quote}</h3>
          <h4 id="author">{this.state.author}</h4>
          <button id="new-quote" onClick={this.handleClick}>Click for more</button>
          <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
        </div>
      </div>
    )
  }
  
}

export default App;