import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
// const createReactClass = require('create-react-class');
// const HomeScreen = createReactClass({
//   getInitialState() {
//     return {
//       text: 'Initializing AR...',
//     };
//   },

//   render: function () {
//     return (
//       <ViroARScene
//         onTrackingUpdated={() => {
//           this.setState({text: 'Happy Birthday'});
//         }}>
//         <ViroText
//           text={this.state.text}
//           scale={[0.1, 0.1, 0.1]}
//           height={1}
//           width={4}
//           position={[0, 0.5, -1]}
//           style={styles.helloWorldTextStyle}
//         />
//         <ViroAmbientLight color={'#aaaaaa'} />
//         <ViroSpotLight
//           innerAngle={5}
//           outerAngle={90}
//           direction={[0, -1, -0.2]}
//           position={[0, 3, 1]}
//           color="#ffffff"
//           castsShadow={true}
//         />
//         <Viro3DObject
//           source={require('../../Models/saharsh_001.obj')}
//           resources={[require('../../Models/saharsh_001.mtl')]}
//           position={[0, 0, -1]}
//           scale={[0.2, 0.2, 0.2]}
//           type="OBJ"
//           dragType="FixedDistance"
//           onDrag={() => {}} // allows user to drag 3D object around with finger
//         />
//       </ViroARScene>
//     );
//   },
// });

function HomeScreen() {
  const [load, setLoad] = React.useState('loading');

  return (
    <View>
      <Text>Hello</Text>
    </View>
    //   <ViroARScene
    //     onTrackingUpdated={() => {
    //       setLoad('haaa hogya');
    //     }}>
    //     <ViroText
    //       text={load}
    //       scale={[0.1, 0.1, 0.1]}
    //       height={1}
    //       width={4}
    //       position={[0, 0.5, 1]}
    //       style={styles.helloWorldTextStyle}
    //     />
    //     <ViroAmbientLight color="#FFFFFF" />
    //     <ViroSpotLight
    //       innerAngle={5}
    //       outerAngle={100}
    //       direction={[0, -1, -0.2]}
    //       position={[0, 1, 0]}
    //       color="#ffffff"
    //       castsShadow={true}
    //     />
    //     <Viro3DObject
    //       source={require('../../Models/StageLight_11_obj.obj')}
    //       resources={[
    //         require('../../Models/StageLight_11_obj.mtl'),
    //         require('../../Models/01.png'),
    //         require('../../Models/cloth_11.jpg'),
    //         require('../../Models/glass_01_displace.jpg'),
    //       ]}
    //       position={[0, 0, -1]}
    //       scale={[0.02, 0.02, 0.02]}
    //       onPinch={() => {}}
    //       type="OBJ"
    //       dragType="FixedDistance"
    //       onDrag={() => {}} // allows user to drag 3D object around with finger
    //     />
    //   </ViroARScene>
  );
}

export default () => {
  return (
    // <ViroARSceneNavigator
    //   autofocus={true}
    //   initialScene={{
    //     scene: HomeScreen,
    //   }}
    //   style={styles.f1}
    // />
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
