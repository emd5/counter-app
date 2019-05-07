import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Counter App</h1>
      <p>Click on the buttons below!</p>
    </header>
  )
};
class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vote_limit: 50,
      counter: 0,
    };

    this.up_vote_count = this.up_vote_count.bind(this);
    this.down_vote_count = this.down_vote_count.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  up_vote_count(){
    this.updateState(this.state.counter + 1);
  }

  down_vote_count(){
    this.updateState(this.state.counter - 1);
  }

  updateState(counter){
    if (this.state.vote_limit < 1) { 
        return alert('Stop Clicking, there are no more votes!') 
    } else{
      let vote_limit = this.state.vote_limit - 1;
      this.setState( {counter, vote_limit} )
    }
  }

  componentDidUpdate(){
    console.log('Vote_tracker: ', this.state.counter);
  }

  render(){
    return(
      <main>
        <h2>Total Votes: { this.state.counter }</h2>
        <h2>Remaining Votes: {this.state.vote_limit}</h2>
        <button onClick={ this.down_vote_count }> - </button>
        <button onClick={ this.up_vote_count }> + </button>
      </main>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
