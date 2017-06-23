import RNFS from 'react-native-fs';
import strings from '../config/constants';
// eslint-disable-next-line
export function fetchImages() {
  return function returnFetchImages(dispatch) {
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then((result) => {
        const filenames = [];
        for (let index = 0; index < result.length; index += 1) {
          filenames.push(result[index].name);
        }

        dispatch({ type: strings.action_fetch_images, payload: filenames });
      })
      .catch(() => {
      });
  };
}
