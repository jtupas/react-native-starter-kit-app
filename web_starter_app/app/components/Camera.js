import React from 'react';
import {
  Container,
  Icon,
  Button,
} from 'native-base';

import Camera from 'react-native-camera';
import Styles from '../assets/styles/mainstyle';

export default React.createClass({
  render() {
    return (
      <Container>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureTarget={Camera.constants.CaptureTarget.disk}
          style={Styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Button
            style={{ alignSelf: 'center', marginBottom: 10 }}
            onPress={() => this.createFile()}
          >
            <Icon name="ios-camera" />
          </Button>
        </Camera>
      </Container>
    );
  },

  createFile() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => {
        /* eslint-disable */
        console.log(data);
      })
      .catch((err) => {
        console.error(err)
        /* eslint-enable */
      });
  },
});
