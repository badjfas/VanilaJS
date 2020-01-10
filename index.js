//1.5
console.log('Im Working....');

/*1.6 변수 생성 과정
Create
Initialize
Use
*/

/*1.6 변수 예제1
a=221;
b=a-100;
console.log(b);
*/

/*1.6 변수 예제2
let a = 221; //변수를 생성-> Initialize해줘야함
let b = a-5; //참조할때는 let을 사용하지 않아도 됌. 
constant c = 999; //constant는 값 변경불가.
a=4;
console.log(b, a); 
//실행결과 216,4 출력 
//javascript는 코드를 위에서 아래로 실행
*/
/*
const what ="bjw";
console.log(what);
*/
//Array
const daysOfWeek = ["Monday","Tuesday","Wednsday","Thursday","Firday"];
console.log(daysOfWeek);
//Object 
const jinwooInfo={
  name:"배진우",
  age:27,
  gender:"male",
  isHandsome:true,
  favoirite:["exercise","지유"]
}
console.log(jinwooInfo.favoirite[0])
//``방식
function sayHello(name,age){
  return `Hello ${name} your age ${age}`;
}
sayHello("배진우",27); 

const hello = sayHello("배진우",27);
//sayHello의 return 값을 hello 에 대입해주는 방식

console.log(hello); //hello에 저장된 return값을 출력함
//Object에 function 만드는 법
const calculator = {
  add: function (num1,num2){
    return num1+num2;
  },
  sub: function (num1,num2){
    return num1-num2;
  },
  mul: function (num1,num2){
    return num1*num2;
  },
  div: function (num1,num2){
    return num1/num2;
  }
}
const add = calculator.add(1,5);
const sub = calculator.sub(1,5);
const mul = calculator.mul(1,5);
const div = calculator.div(1,5);

console.log(add);
console.log(sub);
console.log(div);
console.log(mul);

const title = document.getElementById("title");
title.innerHTML="hi FOrm js";
title.style.