
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDwxrprtJUaYH1SKBt_gpOehM71Uw-jIH4",
    authDomain: "god-s-plan-60b86.firebaseapp.com",
    databaseURL: "https://god-s-plan-60b86.firebaseio.com",
    projectId: "god-s-plan-60b86",
    storageBucket: "god-s-plan-60b86.appspot.com",
    messagingSenderId: "52887056753",
    appId: "1:52887056753:web:71241513cfaf1035bc06d0",
    measurementId: "G-QG9E83NZPK"
  };


  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();