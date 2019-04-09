import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Quote/>
    );
  }
}
class Quote extends Component{
    constructor(props){
        super(props);
        this.state={
            index: 0
        }
        this.changeQuote= this.changeQuote.bind(this);
    }

    changeQuote(event){
        this.setState({
        index: parseInt(event.target.value) + 1
        })

    }




    render(){
    const quotes = ["Life isn’t about getting and having, it’s about giving and being.", "Whatever the mind of man can conceive and believe, it can achieve.","Strive not to be a success, but rather to be of value.","Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","I attribute my success to this: I never gave or took any excuse.","You miss 100% of the shots you don’t take."];
    const authors = ["Kevin Kruse","Napoleon Hill","Albert Einstein","Robert Frost","Florence Nightingale","Wayne Gretzky"];
    const colors = ["#ffa500", "#647c72", "#800000", "#065535", "#00ccad","#ac98c9"];
    const buttons = <div className="buttons">
        <button id="new-quote" style={{backgroundColor:colors[this.state.index]}} value={this.state.index} onClick={this.changeQuote}>
            Next
        </button>
        <a href="twitter.com/intent/tweet" className="twitter" id="tweet-quote" style={{backgroundColor:colors[this.state.index]}}>Tweet</a>
    </div>

        return (
            <div className="container-fluid main" style={{backgroundColor:colors[this.state.index]}}>
                <div id="quote-box">
                    <div id="quote-text" style={{color:colors[this.state.index]}}>
                        <i className="fa fa-quote-left"></i><span id="text">{quotes[this.state.index]}</span>
                    </div>
                    <div id="quote-author" style={{color:colors[this.state.index]}}>
                        <i className="fa fa-at" style={{marginRight:10}}></i><span id="author">{authors[this.state.index]}</span>
                    </div>
                    {parseInt(this.state.index)<quotes.length?buttons:this.setState({index: 0})}



                </div>
            </div>
        );
    }
}
export default App;
