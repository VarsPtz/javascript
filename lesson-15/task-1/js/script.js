// var username = "Alex";
// var userage = 19;
// var usersubscription = true;

// var username = document.getElementById("name").value;
// var userage = document.getElementById("age").value;
// var usersubscription = document.getElementById("subscription").value;


// console.log(username);
// console.log(userage);
// console.log(usersubscription);


// function userSubscriberAccept(username, userage, usersubscription) {
// 	console.log("Пользователь: " + username +  " допущен!");
// 	alert("Доступ к сайту разрешён!");
// }

// function userSubscriberDenied(username, userage, usersubscription) {
// 	console.log("Пользователь: " + username +  " не допущен!");
// 	alert("Пользователь не допущен!");
// }

// if (userage >= 18 && usersubscription == true) {
//   	userSubscriberAccept(username, userage, usersubscription);
//   }
//   else {
//    console.log("Пользователь: " + username +  " не допущен!");
//    alert("Пользователь не допущен!");
//   }







function userSubscriber(username, userage, usersubscription) {
 var username = document.getElementById("name").value;
 var userage = document.getElementById("age").value;
 var usersubscription = document.getElementById("subscription");

 if (userage >= 18 && usersubscription.checked) {
 	console.log("Пользователь: " + username +  " допущен!");
 	alert("Доступ к сайту разрешён!");
 }
 else {
  console.log("Пользователь: " + username +  " не допущен!");
  alert("Пользователь не допущен!");
 }
}

// userSubscriber(username, userage, usersubscription);
