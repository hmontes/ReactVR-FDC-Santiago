import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

import Mars from './components/Mars'
import Studio from './components/Studio'

// Son tres escenarios. Chess, Estudio y marte 0776

const places = [
  {
    title: 'Paisaje',
    img: 'paisaje.jpg',
    color: 'red'
  },
  {
    title: 'Mars',
    img: 'mars.jpg',
    color: 'blue'
  },
  {
    title: 'Studio',
    img: 'studio.jpg',
    color: 'orange'
  }
]

export default class demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: places[0],
      showMenu: false
    }
  }

  renderPlaces() {
    return places.map((place, key) => 
      <VrButton
        key={key} 
        style={[style.item, {backgroundColor: places[key].color}]}
        onClick={() => this.setState({place: places[key]})}
      >
        <Text style={style.text}>{place.title}</Text>
      </VrButton>
    )
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.place.img)} />

        <View style={[style.wrap]}>
          {this.state.showMenu ? this.renderPlaces() : null}
        </View>
        
        {this.state.place.title == 'Mars' ? <Mars /> : this.state.place.title == 'Studio' ? <Studio /> : null }

        <VrButton style={style.floorButton} onClick={() => this.setState({showMenu: !this.state.showMenu})}>
          <Text style={style.text}>Menu</Text>
        </VrButton>
        
      </View>
    );
  }
};

const style = StyleSheet.create({
  wrap: {
    layoutOrigin: [0.5, 0.5],
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    width: 2,
    alignItems: 'stretch',
    transform: [{translate: [0, 0, -3]}],
  },
  item: {
    margin: 0.1,
    height: 0.3
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center'
  },
  floorButton: {
    position: 'absolute',
    layoutOrigin: [0.5, 0.5],
    transform: [
      {translate: [0, -1, 0]},
      {rotateX: -90}
    ],
    backgroundColor: 'red',
    height: 0.6,
    width: 0.6,
    borderRadius: 1,
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('demo', () => demo);
