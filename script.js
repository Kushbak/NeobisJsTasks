// Задача №1
// 1
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    })	// Поставил закрывающую круглую скобочку тут
};



// Задача №2
// 1		find the current day of week and time 
// let date = new Date(); // текущая дата 
// let today = document.getElementById('today'); // нахождение элемента с id 'today'
// today.innerHTML = date; 	// засовываем в today нашу дату



// 2		reverse the num
// let num = document.getElementById('forReverse').innerHTML;
// let reversedNum = document.getElementById('reversed'); 

// let reverseFunc = () => {
// 	for (let i = 0; i < num.length; i++) {
// 		num[i] = num.length - i;
// 	}
// 	reversedNum.innerHTML = num;
// 	console.log(reversedNum);
// 	console.log(num);
// }
// reverseFunc()



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

	if (typeof +num1 == 'number' && typeof +num2 == 'number') {
		if(num1 > num2){
			span.innerHTML = num1;
		} else {
			span.innerHTML = num2;
		}
	} else{ 
		alert('Задайте число!');
	}  
});



// 5		add to string every elem of arr and '+' or ','
let changeArrBtn = document.getElementById('changeArrBtn'); 
let changedArr = document.getElementById('changedArr'); 
changeArrBtn.addEventListener('click', function(){ 
	let myColor = ["Red", "Green", "White", "Black"];
	let answer = ''
	for (let i = 0; i < myColor.length; i++) {
		answer += myColor[i]
		if (i != myColor.length - 1) {
			answer += '+'
		} 
	}
	changedArr.innerHTML = answer;
	console.log(answer);
})


// 7 is first letter upperace or not

let uppercaseBtn = document.getElementById('uppercaseBtn'); 
let isUppercase = document.getElementById('isUppercase'); 
uppercaseBtn.addEventListener('click', function(){  
	let str = prompt() 
	isUppercase.innerHTML = (str[0] === str[0].toUpperCase()) ? 'is uppercase' : 'isn\'t uppercase';   
})


// 8