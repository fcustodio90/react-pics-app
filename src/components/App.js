import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: term
        },
        headers: {
          Authorization: 'Client-ID 9a175058ce4c3a6ec6a8e9eeee5211537c325b800d2100bc225e1817eef09bca'
        }
      });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;