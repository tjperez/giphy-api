import React from 'react';
import './App.css';
import SearchField from './SearchField';
import GifCard from './GifCard';
import GifList from './GifList';
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=vk1BBJkhc2qQpcxNNeBGwxZHSJcoHPp4`;

    request.get(url, (err, res) => {
      this.setState({gifs:res.body.data})
    });
  };

  render() {
    return (
      <div>
        <h1 className="gif-search">Gif Search</h1>
        <SearchField onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}



export default App;
