import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA7CGtdWC8jKrGhO8XMffyZ1MBd2XbPKtI",
    authDomain: "clawee-2c321.firebaseapp.com",
    databaseURL: "https://clawee-2c321.firebaseio.com",
    projectId: "clawee-2c321",
    storageBucket: "clawee-2c321.appspot.com",
    messagingSenderId: "832664248389"
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();