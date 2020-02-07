//////1
/*let start = 0;
let max =100;
while (start <= max) {
    if (start === 1) {
        console.log(start);
    } else {
        let result = 2;
        let i = 2;
        while (start % i !== 0 ){
            i++;
            result++;
        }
        if (result == start) {
            console.log(result);
        }
    }
    start++;
}
*/

/////2
/*let start =0;
let max =10;
do{
    if(start === 0){
        console.log(start + " нуль");
    }
    else if (start % 2 !== 0){
        console.log(start + " непарне число");
    }
    else {
        console.log(start + " парне число");
    }

start++;
}while(start<= max);*/



////3
//for(let i =0; i<=9; console.log(i++)){}

////4.1
/*let start =+ prompt("Введите количество строк: ");
let str ="";
for(let i =0; i <= start; i++){
    str +="*";
    console.log(str);
}*/


////4.2
/*let  start =+ prompt(" enter :");
for(let i =1; i <= start; i++){
    let str="";
    for(let j=start-i; j>0; j--){
        str+=' ';
    }
    for(let j=1; j<=i*2-1; j++){
        str+='*';
    }
    console.log(str);
}
*/


////4.3
/*let  start =+ prompt(" enter :");
for(let i =1; i <= start; i++){
    let str="";
    for(let j=start-i; j>0; j--){
        str+=' ';
    }
    for(let j=1; j<=i*2-1; j++){
        str+='*';
    }
    console.log(str);
}
for (let i=2; i<=start; i++){
    let str='';
    for (let j=0; j<i-1; j++){
        str+=' ';
    }
    for (let j=(start-i)*2+1; j>0; j--){
        str+='*';
    }
    console.log(str);
}*/



////5
/*let number = 10000;
let result = 0;
let counter =0;
for( ; number >= 50 ;  ){
    result = number /= 2;
    counter++
}
console.log(result + " - result  "+ counter + " - counter ");
/*
for (let n = 1000, num = 0; n > 50; num++) {

    n /= 2;
    alert( n );
}*/






/////6
  /*  let month = +prompt("Введите число для определения поры года");
    switch (month) {
        case 1:
            alert("Зима, январь");
            break;
        case 2:
            alert("Зима, февраль");
            break;
        case 12:
            alert("Зима, декабрь");
            break;
        case 3:
            alert("Весна, март");
            break;
        case 4:
            alert("Весна, апрель");
            break;
        case 5:
            alert("Весна, май");
            break;
        case 6:
            alert("Лето, июнь");
            break;
        case 7:
            alert("Лето, июль");
            break;
        case 8:
            alert("Лето, август");
            break;
        case 9:
            alert("Осень, сентябрь");
            break;
        case 10:
            alert("Осень, октябрь");
            break;
        case 11:
            alert("Осень, ноябрь");
            break;
        default:
            alert("Не пора года");
}
*/


////7
/*
var temp = +prompt("Задайте температуру в градусах за Цельсієм:  ");
var fareng = 9/5 * temp +32 ;
alert(fareng + " відповідна температура в градусах за Фаренгейтом");*/


///////8
/*
    var day = +prompt("Введите число(день недели)");
    switch (day) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Четверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье");
            break;
        default:
            alert("В недели только семь дней");
    }
*/








