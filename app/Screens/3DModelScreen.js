import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroBox,
  ViroNode,
  ViroSpotLight,
  ViroARPlaneSelector,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#FFFFFF" />
      <ViroDirectionalLight color="#FFFFFF" direction={[0, -1, -0.2]} />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, 1, 0]}
        position={[0, -7, 0]}
        color="#FFFFFF"
        intensity={250}
      />
      <ViroARPlaneSelector>
        <ViroNode onDrag={() => {}} dragType="FixedToWorld">
          <Viro3DObject
            source={{
              uri: 'https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Chairs/203/IKE160128_obj/IKE160128.obj',
            }}
            resources={[
              {
                uri: 'https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Chairs/203/IKE160128_obj/IKE160128.mtl',
              },
              {
                uri: 'https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Chairs/203/IKE160128_obj/maps/IKE160128_1_d.jpg',
              },
              {
                uri: 'https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Chairs/203/IKE160128_obj/maps/IKE160128_2_d.png',
              },
            ]}
            position={[0.0, -1, -1]}
            scale={[0.001, 0.001, 0.001]}
            type="OBJ"
          />
        </ViroNode>
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
