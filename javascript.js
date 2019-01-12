  var config = {
    apiKey: "AIzaSyADMI556yq4Lt7dpRnupG52weXTkn07zSo",
    authDomain: "trainscheduler-bc373.firebaseapp.com",
    databaseURL: "https://trainscheduler-bc373.firebaseio.com",
    projectId: "trainscheduler-bc373",
    storageBucket: "trainscheduler-bc373.appspot.com",
    messagingSenderId: "467640135564"
  };
  firebase.initializeApp(config);


  var database = firebase.database();
  
  var trainName = "";
  var destination = "";
  var trainOneTime = "";
  var frequency = 0;
  
  
  $("#addTrain").on("click", function() {
  
    trainName = $('#nameInput').val().trim();
    destination = $('#destinationInput').val().trim();
    firstTrainTime = $('#trainOneInput').val().trim();
    frequency = $('#frequencyInput').val().trim();
  
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
  
    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrainTime: trainOneTime,
      frequency: frequency
    });
  
      return false;
  });
  
  
    database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
  
    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    trainOneTime = snapshot.val().trainOneTime;
    frequency = snapshot.val().frequency;
  
  
    var TrainOneMoment = moment(trainOneTime, 'HH:mm');
    var nowMoment = moment(); 
  
  )};
  