'use strict'
// Задача №1
// 1
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    })	// Поставил закрывающую круглую скобочку тут
};



// Задача №2 

// 1		find the current day of week and time 
let getCurrentDate = document.getElementById('getCurrentDate'); 

getCurrentDate.addEventListener('click', function(){ 
	let today = new Date();
	let day = new Date().getDay();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let daySpan = document.getElementById('day');
	let timeSpan = document.getElementById('time');
	daySpan.innerHTML = days[day];
	timeSpan.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`; 
});


// 2		reverse the string; 
let toReverseBtn = document.getElementById('toReverseBtn'); 

toReverseBtn.addEventListener('click', function(){ 
	let str = prompt('Введите что-нибудь чтобы реверсировать');
	let reversedStr = ''
	let strSpan = document.getElementById('forReverse');
	let reversedStrSpan = document.getElementById('reversed');
	for (let i = str.length - 1; i >= 0; i--) { 
        reversedStr += str[i];

    }
    strSpan.innerHTML = str;
    reversedStrSpan.innerHTML = reversedStr;
});


// 3		Find the factorial of num
let factorialBtn = document.getElementById('factorialBtn'); 

factorialBtn.addEventListener('click', function(){
	let num = +prompt('Введите число для выведения его факториала');
	let numb = num;
	let answer = 1;
	let expression = '';
	let span = document.getElementById('factorial');
	if(num !== num){
		alert('Задайте число!');
	}else{
		for (num; num > 0; num--) {
			answer *= num;
			expression += num; 
			if (num !== 1) {
				expression += ' * ';
			}
		}
		span.innerHTML = `!${numb} = ${expression} = ${answer}`;
	}
});


// 4		Find the bigger num 
let biggerNumBtn = document.getElementById('biggerNumBtn'); 

biggerNumBtn.addEventListener('click', function(){ 
	let num1 = +prompt('Напишите 1-е число');
	let num2 = +prompt('Напишите 2-е число');   
	let span = document.getElementById('biggerNum');

	if (num1 !== num1 || num2 !== num2) {
		alert('Задайте число!');
	} else{ 
		if(num1 >= num2){
			span.innerHTML = num1;
		} else {
			span.innerHTML = num2;
		}
	}    
});


// 5		add to string every elem of arr and '+' or ','
let changeArrBtn = document.getElementById('changeArrBtn'); 

changeArrBtn.addEventListener('click', function(){ 
	let myColor = ["Red", "Green", "White", "Black"];	// you may change this array to see other examples, or test, or what idk
	let answer1 = ''
	let answer2 = ''
	let changedArr = document.getElementById('changedArr'); 
	for (let i = 0; i < myColor.length; i++) {
		answer1 += myColor[i]
		if (i != myColor.length - 1) {
			answer1 += '+'
		} 
	}
	for (let i = 0; i < myColor.length; i++) {
		answer2 += myColor[i]
		if (i != myColor.length - 1) {
			answer2 += ','
		} 
	}
	changedArr1.innerHTML = answer1;
	changedArr2.innerHTML = answer2; 
})


// 6		get month from particular date
// You'll change value of calling function here)	I didn't made eventListener for this

let month_name = (date) => {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September', 'October', 'November', 'December'];
	return months[date.getMonth()]
}
console.log(month_name(new Date("8/13/2014")));		// change the data here to see the month like this 'November'




// 7 		is first letter upperace or not
let uppercaseBtn = document.getElementById('uppercaseBtn'); 

uppercaseBtn.addEventListener('click', function(){  
	let isUppercase = document.getElementById('isUppercase'); 
	let str = prompt() 
	isUppercase.innerHTML = (str[0] === str[0].toUpperCase()) ? 'This is uppercase' : 'This isn\'t uppercase';   
})

// 8		draw smile with canvas

let drawBtn = document.getElementById('drawBtn'); 

drawBtn.addEventListener('click', function(){  
	let smile = document.getElementById('smile');
	let ctx = smile.getContext('2d');

	// head
	ctx.fillStyle = '#ffec42'
	ctx.beginPath();
	ctx.arc(50, 50, 50, 0, Math.PI*2);
	ctx.fill();


	// eyes
	ctx.fillStyle = '#fff'
	ctx.beginPath();
	ctx.arc(35, 35, 8, 0, Math.PI*2);
	ctx.fill();

	ctx.fillStyle = '#fff'
	ctx.beginPath();
	ctx.arc(70, 35, 8, 0, Math.PI*2);
	ctx.fill();

	// mouse
	ctx.fillStyle = '#fff'
	ctx.beginPath();
	ctx.arc(50, 60, 30, 6.3, Math.PI); // Mouth (clockwise)
	ctx.fill();
})






// Почему то в документе не было задачи №3, и порядок был какой то странный, поэтому пронумеровал каждую задачу как есть

// Задача №4


// 1		Show twister in console in special order
let showTwisterBtn = document.getElementById('showTwisterBtn'); 

showTwisterBtn.addEventListener('click', function(){  
	let arrForTwister = [3, 5, 2, 6 , 4, 1]
	for (let i = 0; i < arrForTwister.length; i++) {
		console.log(document.getElementById('string-' + arrForTwister[i]));
	}
})


// 2		color of half of elems should be red and half - green
let paintElementsBtn = document.getElementById('paintElementsBtn'); 

paintElementsBtn.addEventListener('click', function(){  
	let element = document.querySelectorAll('.element'); 
	for (let i = 0; i < element.length; i++) {
		if (i >= element.length / 2) {
			element[i].style.color = 'green' 
		} else{
			element[i].style.color = 'red' 
		}
	}
})


// 3		add tasks from arr into ul list
let addTasksBtn = document.getElementById('addTasksBtn'); 

addTasksBtn.addEventListener('click', function(){  
	let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	let list = document.getElementById('todo-list'); 
	for (let i = 0; i < tasks.length; i++) {
		let task = document.createElement('li');
		task.className = 'task';
		list.appendChild(task);
		task.innerHTML = tasks[i]
	}
})


// 4		add hr tag after each paragraph
let addHrBtn = document.getElementById('addHrBtn'); 

addHrBtn.addEventListener('click', function(){   
	let article = document.getElementsByTagName('article');
	let p = article[0].getElementsByTagName('p');
	for (let i = 0; i < p.length; i++) {
		p[i].insertAdjacentHTML('afterEnd', '<hr>')
	}
})


// 5 		change one elem to fish and remove cola
let changeAndRemoveBtn = document.getElementById('changeAndRemoveBtn'); 

changeAndRemoveBtn.addEventListener('click', function(){   
	let cartItems = document.getElementById('cart-items'); 		//div#cart-items 
	let items = cartItems.querySelectorAll('.item');
	let spanForItem = document.createElement('span');
	let newItem = document.createElement('div');	
	let lastItem = cartItems.lastChild;

	newItem.className = 'item';	newItem.innerHTML = 'Canned Fish';
	spanForItem.className = 'qty';	spanForItem.innerHTML = ' x 4';
	newItem.appendChild(spanForItem);
	cartItems.replaceChild(newItem, items[items.length - 1]);
	items[1].remove()
})


// 6		add tasks that user want to add
let addTasksBtn2 = document.getElementById('addTasksBtn2'); 

addTasksBtn2.addEventListener('click', function(){
	let todoForUser = document.getElementById('todoForUser'); 
	let anotherTask = true
	while (anotherTask){
		let task = prompt('Добавьте задачу') 
		if (!task) {
			anotherTask = false
			return ''
		}
		let listItem = document.createElement('li'); 
		todoForUser.appendChild(listItem);
		listItem.innerHTML = task;

	}
}) 

 



