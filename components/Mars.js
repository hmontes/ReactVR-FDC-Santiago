import React from 'react'
import {
  Animated,
  asset,
  StyleSheet,
  View,
  Model,
  Text
} from 'react-vr'
import { Easing } from 'react-native'

const AnimatedModel = Animated.createAnimatedComponent(Model)

export default class Mars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rotation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.rotate();
  }

  rotate = () => {
    this.state.rotation.setValue(0);
    Animated.timing(
      this.state.rotation,
      {
        toValue: 360,
        duration: 10000,
        easing: Easing.linear
      }
    ).start(this.rotate);
  }

  render() {
    return(
      <View style={style.ovni}>
        <AnimatedModel 
          style={{transform:[{rotateY: this.state.rotation}]}}
          source={{
            obj: asset('./ovni/probeufo.obj'),
            mtl: asset('./ovni/probeufo.mtl')
          }}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  ovni: {
    transform: [
      {translate: [2, 0.7, -3]},
      {scale: 0.1},
      {rotateX: 30}
    ]
  }
})