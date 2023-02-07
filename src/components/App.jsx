import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlats: flats[0],
    };
  }

  render () {
    return (
      <div>
        <Flat  />
      </div>
    )
  }
}

export default App;
