import './App.css';
import React from "react";

const APIURL = "https://dummyjson.com/quotes/random";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote = () => {
    fetch(APIURL)
      .then((data) => data.json())
      .then((item) => {
        this.setState({
          quote: item.quote,
          author: item.author
        })
      });
  }

  componentDidMount() {
    this.fetchQuote();
  }

  handleClick = () => {
    this.fetchQuote();
  }

  render(){
    return(
      <div className="wrapper container-fluid">
        <div className="container" id="quote-box">
          <h3 id="text"><em>{this.state.quote}</em></h3>
          <h4 id="author">{this.state.author}</h4>
          <div className="row">
            <div className="col-auto mr-auto">
              <button id="new-quote" onClick={this.handleClick} className="btn btn-default">New Quote</button>
            </div>
            <div className="col-auto mr-auto">
              <a href="twitter.com/intent/tweet" id="tweet-quote" className="btn btn-default">Tweet</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App;