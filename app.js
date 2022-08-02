//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99,
// hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i=0; i<100; i++){
//     console.log(i);
//     if(i == 99){
//         alert(`${i} hoan thanh`);

//     }
// }

// 2 .Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// let number = 20;
// for (var i=0; i<=20; i++) {
    // console.log(fibonacci(i));
   
// }

// function fibonacci(n) {
//     var n1 = 0;
//     var n2 = 1;
//     var tern = 1;

//     if(n<0){
//         return -1;
//     }else if(n == 0 || n == 1){
//         return n;
//     }else{
//         for (let i = 2; i < n; i++) {
//             n1 = n2;
//             n2 = tern;
//             tern = n1 + n2;            
//         }
//         return tern;
//     }
    
// }
//Bài 3: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// for (var i=0; i<=20; i++) {
//     if((fibonacci(i) % 5 == 0) ){
//         // console.log(fibonacci(i));
//         break;
//     }
// }
//Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let total = 0;
// for (var i=0; i<20; i++) {
//     total +=fibonacci(i); 
// }
// console.log(total);
//Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let state = true;
while (i=0; i<=30; i++){
if((i) % 7 == 0)
    console.log(total);
    if(i == 30);{
        break
    }
}

//Bài 6: Hãy viết một chương trình in ra các số từ 1 đến 100. 
//Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
//Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz  --' , i);
//     }else if(i % 5 == 0){
//         console.log('Buzz --',i);
//     }else if(i % 3 == 0 ){
//         console.log('Fizz -- ',i);
//     }
// }
//Bài 7: Tính giai thừa của một số nguyên dương
