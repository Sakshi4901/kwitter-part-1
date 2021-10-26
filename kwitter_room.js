
const firebaseConfig = {
      apiKey: "AIzaSyD0zEwBhjpvav2c2kgX_ibrIS4hJTKJzDE",
      authDomain: "kwitter-e0ade.firebaseapp.com",
      projectId: "kwitter-e0ade",
      storageBucket: "kwitter-e0ade.appspot.com",
      messagingSenderId: "6632249953",
      appId: "1:6632249953:web:93ee5bc452d25ca5276820"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
