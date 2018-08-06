// Получаем данные
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


// Вывод полученых данных в консоль для проверки
console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(ul[0]);
// Первый элемент
console.log(story);

// main.style.background = "green";

// Функция добавляющая элемент
function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
  // Скрывает окошко, если добавлена новая задача 
}

// Функция удаляющая элемент
function delItem() {
	myList.removeChild(story[0]);

	if(story.length == 0) {
		 popup.style.display = "block";
	}
}

// btn1.onclick = function(){

// } 

// Функция закрывающая окошко при клике на крестик
function closePopup(){
	 popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);