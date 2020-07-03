// Задача №1
// 1
for (var i = 0; i < 10; i++) {
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
	let num = prompt('Введите число для выведения его факториала');
	let numb = num;
	let answer = 1;
	let expression = '';
	let span = document.getElementById('factorial');
	for (num; num > 0; num--) {
		answer *= num;
		expression += num; 
		if (num !== 1) {
			expression += ' * ';
		}
	}
	span.innerHTML = `!${numb} = ${expression} = ${answer}`;
});


// 4		Find the bigger num 
let biggerNumBtn = document.getElementById('biggerNumBtn'); 

biggerNumBtn.addEventListener('click', function(){ 
	let num1 = prompt('Напишите 1-е число');
	let num2 = prompt('Напишите 2-е число');   
	let span = document.getElementById('biggerNum');

	if (+num1 == NaN && +num2 == NaN) {
		alert('Задайте число!');
	} else{ 
		if(+num1 >= +num2){
			span.innerHTML = num1;
		} else {
			span.innerHTML = num2;
		}
	}   
	console.log(+num1 + ' ' + typeof +num1 + ' ' + typeof NaN);
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


// 6	get month from particular date
// You'll change value of calling function here)	I didn't made eventListener for this

let month_name = (date) => {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September', 'October', 'November', 'December'];
	return months[date.getMonth()]
}
console.log(month_name(new Date("8/13/2014")));		// change the data here to see the month like this 'November'




// 7 is first letter upperace or not
let uppercaseBtn = document.getElementById('uppercaseBtn'); 

uppercaseBtn.addEventListener('click', function(){  
	let isUppercase = document.getElementById('isUppercase'); 
	let str = prompt() 
	isUppercase.innerHTML = (str[0] === str[0].toUpperCase()) ? 'is uppercase' : 'isn\'t uppercase';   
})




// Задача №4


// 1
let showTwisterBtn = document.getElementById('showTwisterBtn'); 

showTwisterBtn.addEventListener('click', function(){  
	let arrForTwister = [3, 5, 2, 6 , 4, 1]
	for (let i = 0; i < arrForTwister.length; i++) {
		console.log(document.getElementById('string-' + arrForTwister[i]));
	}
})


// 2
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


// 3
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


// 4  
let addHrBtn = document.getElementById('addHrBtn'); 

addHrBtn.addEventListener('click', function(){   
	let p = document.getElementsByTagName('p');
	let hr = document.createElement('hr')
	for (let i = 0; i < p.length; i++) {
		p[i].appendChild(hr);
	}
})


// 4  
let changeAndRemoveBtn = document.getElementById('changeAndRemoveBtn'); 

changeAndRemoveBtn.addEventListener('click', function(){   
	let cartItems = document.getElementById('cart-items'); 		//div#cart-items 
	let lastItem = cartItems.lastChild
	// creating new div and text for it to add to cartItems
	let newItem = document.createElement('div');		newItem.className = 'item';
	let spanForItem = document.createElement('span');	spanForItem.className = 'qty';
	textForItem = document.createTextNode('Canned Fish');
	textForSpan = document.createTextNode(' x 4');
	newItem.appendChild(textForItem);
	spanForItem.appendChild(textForSpan);
	newItem.appendChild(spanForItem);
	cartItems.replaceChild(newItem, lastItem);
})


// 5
let addTasksBtn2 = document.getElementById('addTasksBtn2'); 
let todoForUser = document.getElementById('todoForUser'); 

addTasksBtn2.addEventListener('click', function(){
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

 