// Initialize Firebase
  var config = {
      
    apiKey: "AIzaSyD4MFC0g5CMxbm-XnsS98e5x05ha7ZVoVM",
    authDomain: "momentum-1524978469122.firebaseapp.com",
    databaseURL: "https://momentum-1524978469122.firebaseio.com",
    projectId: "momentum-1524978469122",
    storageBucket: "momentum-1524978469122.appspot.com",
    messagingSenderId: "498822671652"
  };
  firebase.initializeApp(config);
  console.log(firebase);
  var database = firebase.database();
  var ref = database.ref('momentum-1524978469122');
  ref.on('value', gotData, errData);
 var attend = false;
 
  var attendees = 20;
  var attendees2 = 21;
  var attendees3 = 23;
  var currentAttendees=20;
  var people = firebase.database().ref('WellingtonHospital');
  var peopleC = firebase.database().ref('CourtneyPlace');
  var peopleK = firebase.database().ref('KelburnCampus');
  
people.on('value', function(snapshot) {
   currentAttendees = snapshot.val();
  console.log(snapshot.val());
  
});
  
  function gotData(data) {
    console.log(data);
  }
  
   function errData(err){
      console.log("error");
      console.log(err);
      
  }
  
  function wellingtonHosp(attend) {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        attend = true;
   firebase.database().ref('WellingtonHospital').set({
   field: attendees +1
  });
  console.log(attendees);
        
    } else if (checkBox.checked ==false) {
       firebase.database().ref('WellingtonHospital').set({
   field: attendees -1
  });
    }




 
    
}