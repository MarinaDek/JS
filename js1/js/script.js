var ul = document.getElementsByClassName('menu')[0];
var li = document.getElementsByTagName('li');
//insertBefore-добавление элемента,перед нужным элементом(второй параметр-это элемент передкоторым нужно вставить)
ul.insertBefore(li[2], li[1]);
//добавление пятого элемента
let  li5 = document.createElement("li");
	 li5.className = "menu-item";
	 li5.innerHTML = "Пятый пункт";
ul.appendChild(li5);
//изменение фон страницы "url('img/apple_true.jpg')"
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
//поменяли заголовок
var title = document.getElementById("title").innerHTML="Мы продаем только подлинную технику Apple";
//удалили навязчивую рекламу
var parentavg = document.querySelectorAll('div.column');
var adv = document.getElementsByClassName('adv')[0];
parentavg[1].removeChild(adv);
//Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
var promptqw = prompt("Ваше отношение к технике Apple?");
var prompt = document.getElementById("prompt");
	prompt.className = "prompt";
	prompt.innerHTML = promptqw;