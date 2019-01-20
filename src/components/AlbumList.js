import React, {Component} from 'react'
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{
  state= { baru: [] };


  componentWillMount(){
  axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then (response => this.setState({ baru : response.data }));
}

renderBarus() {
  return this.state.baru.map(barus => <Text>{barus.title}</Text>);
}

  render() {
  console.log(this.state)
    return(
      <View>
        {this.renderBarus()}
      </View>
    );
  }
}

export default AlbumList
