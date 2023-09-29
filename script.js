// --------- Задание 1 --------- //
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

let start = parseInt(prompt("Введите начальное число диапазона:"));
let end = parseInt(prompt("Введите конечное число диапазона:"));
let sum = 0;
for (let i = start; i <= end; i++) {
 sum += i;
}
console.log(`Сумма чисел от ${start} до ${end} равна ${sum}`);

// --------- Задание 2 --------- //
// Запросить 2 числа и найти только наибольший общий
// делитель.
// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");
// while (a != b) {
//     if (a > b) {
//       a = a - b;
//     }
//     else {
//       b = b - a;
//     }
//   }
// alert("Наибольший общий делитель равен " + a);

// --------- Задание 3 --------- //
// Запросить у пользователя число и вывести все делители
// этого числа.
// let arr = [-1 ,-2 ,-3 ,-4 ,-5 , 1 ,  2 , 3 , 4 , 5];
// let positive = arr.filter(elem =>(elem <0))
// console.log(positive.length)
// let negative = arr.filter(elem =>(elem>0))
// console.log(negative.length)

// --------- Задание 4 --------- //
// Определить количество цифр в введенном числе.
// alert("Определить количество чисел в введенном числе.");
// let n = Math.abs(+prompt("Введите число: "));
// let counter = 0;
// while (n > 0) {
//   n = Math.trunc(n / 10);
//   counter++;
// }
// alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);
// task_4();

// --------- Задание 5 --------- //
// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной пере-
// менной (не 10) для ввода чисел пользователем.
// let n = 0;
//   let positive_number = 0;
//   let negative_number = 0;
//   let null_number = 0;
//   let even_number = 0;
//   let odd_number = 0;
//   for (let i = 0; i < 10; i++) {
//     n = +prompt("Введите число: ");
//     if (n > 0) {
//       positive_number += 1;
//     } else if (n < 0) {
//       negative_number += 1;
//     } else {
//       null_number += 1;
//     }
//     !(n % 2) ? (even_number += 1) : (odd_number += 1);
//   }
//   alert(
//     `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`);
// task_5();

// --------- Задание 6 --------- //
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример.
// let repeat = true;
// while (repeat) {
//   const num1 = Number(prompt("Введите первое число:"));
//   const num2 = Number(prompt("Введите второе число:"));
//   const sign = prompt("Введите знак (+, -, *, /):");
//   let result;
//   switch (sign) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       alert("Некорректный знак!");
//       continue;
//   }
//   alert(`Результат: ${result}`);
//   repeat = confirm("Хотите решить еще один пример?");
// }
// --------- Задание 7 --------- //
// Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).

// let base_number = prompt("Введите число, которое будем трансформировать: ");
//   let jump = Math.abs(Math.trunc(+prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")));
//   let arr = base_number.split("");
//   jump = jump % arr.length;
//   let leftJump_L = arr.slice(0, jump);
//   let leftJump_R = arr.slice(jump, arr.length);
//   alert(`Сдвиг влево "${base_number}" на ${jump} позиций:  ` +
//       leftJump_R.concat(leftJump_L).join(""));
//   let rightJump_L = arr.slice(0, arr.length - jump);
//   let rightJump_R = arr.slice(arr.length - jump, arr.length); 
//   alert(`Сдвиг вправо "${base_number}" на ${jump} позиций:  ` +
//       rightJump_R.concat(rightJump_L).join("")); 

// --------- Задание 8 --------- //
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
// let arr_Week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье",];
//   let i = 0;
//   let stop = true;
//   while (stop == true) {
//     stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
//     i++;
//     if (i > 6) {
//       i = 0;
//     }
//   }
//   alert("Вывод дней недели окончен!");

// --------- Задание 9 --------- //
// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
// let table = "";
//   for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table += `${i} x ${j} = ` + i * j + ", ";
//     }
//   }
//   alert(table);