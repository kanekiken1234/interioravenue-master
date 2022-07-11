import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroNode,
  ViroSpotLight,
  ViroARPlaneSelector
} from '@viro-community/react-viro';

const HelloWorldSceneAR = (props) => {
  const [text, setText] = useState('Initializing AR...');
  console.log(props)
  const modelData = props.arSceneNavigator.viroAppProps.objProps;
  const {
    resources, source
  } = modelData
  console.log("model data in ar screen", modelData);

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
        <ViroNode onDrag={() => { }} dragType="FixedToWorld">
          <Viro3DObject
            source={source}
            resources={resources}
            position={[0.0, -1, -1]}
            scale={[0.001, 0.001, 0.001]}
            type="OBJ"
          />
        </ViroNode>
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

export default (props) => {

  const objParams = props.route.params
  let objProps = {};
  let resources = { "uri": objParams.product_3D_model_mtl };
  let source = { "uri": objParams.product_3D_model_obj };
  let textureResource = objParams.product_3D_model_texture.map(each => {
    return {
      "uri": each
    }
  })
  console.log([resources, ...textureResource])
  objProps = {
    resources: [resources, ...textureResource],
    source: source
  }
  return (
    <ViroARSceneNavigator
      autofocus={true}
      viroAppProps={{ objProps }}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});