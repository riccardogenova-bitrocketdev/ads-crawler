/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDEtOKHN3koO3l178gwHT_Wh-F1R3ipQ0c',
  authDomain: 'prisma-16a89.firebaseapp.com',
  databaseURL: 'https://prisma-16a89.firebaseio.com',
  projectId: 'prisma-16a89',
  storageBucket: 'prisma-16a89.appspot.com',
  messagingSenderId: '65521481099',
  appId: '1:65521481099:web:f8632ddacd42c048a76b8e',
};

export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.database();

  return firebase;
};

// export const setData = (ads: any) => {
//   database.ref('ads/' + ads).set(ads);
// };
