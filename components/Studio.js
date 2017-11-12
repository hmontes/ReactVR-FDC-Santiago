import React from 'react'
import axios from 'react-native-axios'

import {
  Animated,
  asset,
  Image,
  View,
  StyleSheet,
  Model,
  Text
} from 'react-vr'
import { Easing } from 'react-native'

const AnimatedModel = Animated.createAnimatedComponent(Model)

export default class Mars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {avatar_url: '', name: '', html_url: '', bio: ''}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/hmontes')
      .then(({data: {avatar_url, name, bio, html_url}}) => this.setState({avatar_url, name, bio, html_url}))
      .catch(err => console.log(err))
  }

  render() {
    
    return(
      <View style={style.wrap}>
        <View style={style.row}>
          
          <View style={{flex: 1}}>
            <Image style={style.image} source={{uri: this.state.avatar_url}} />
          </View>

          <View style={{flex: 3, justifyContent: 'center'}}>
            <Text style={style.name}>{this.state.name}</Text>
          </View>
        </View>

        <View style={style.row}>
          <View style={{flex: 1}}>
            <Text style={style.bio}>{this.state.bio}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrap: {
    position: 'absolute',
    transform: [
      {translate: [-3, 0, 0]},
      {rotateY: 90}
    ], 
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 4,
    layoutOrigin: [0.5, 0.5]
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 0.8,
    height: 0.8,
    margin: 0.1
  },
  name: {
    fontSize: 0.3,
    color: 'black'
  },
  bio: {
    fontSize: 0.2,
    color: 'black',
    marginLeft: 0.1
  }
})