import * as firebase from 'firebase';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { API_KEY, AUTH_DOMAIN, DATABASE_URL } from 'react-native-dotenv';

const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
});

export default firebaseApp;
