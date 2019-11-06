import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyChPqMHhaaXpLIxp0tp3kneBBgRXmY_iqg',
  authDomain: 'maffeezzaria.firebaseapp.com',
  databaseURL: 'https://maffeezzaria.firebaseio.com',
  projectId: 'maffeezzaria',
  storageBucket: 'maffeezzaria.appspot.com',
  messagingSenderId: '524028578544',
  appId: '1:524028578544:web:1b4dd50e0cc453f4879035',
  measurementId: 'G-HK355PRML7'
}

firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export default firebase
