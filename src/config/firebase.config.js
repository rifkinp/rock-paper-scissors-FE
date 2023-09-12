// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBt84imu7CQkhbnSu47Sug5qbBGbIOsU_M',
  authDomain: 'chapt9-team2-wave31.firebaseapp.com',
  projectId: 'chapt9-team2-wave31',
  storageBucket: 'chapt9-team2-wave31.appspot.com',
  messagingSenderId: '655044897702',
  appId: '1:655044897702:web:727da3b1f9263a3eea7d67',
  measurementId: 'G-FVX06ZB169',
};

const firebase = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const storage = getStorage(firebase);
