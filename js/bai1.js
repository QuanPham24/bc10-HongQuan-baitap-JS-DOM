// bai tap 1

/**
 * khoi 1:input nhan du lieu tu user
 * + luong cho 1 ngay 
 * + so ngay lam
 * 
 * khoi 2:
 * + B1: lay data tu form
 * + B2: luu data vao bien
 * + B3: luong = luong(1ngay) * so ngay lam
 * 
 * khoi 3:
 * Hien thi so luong User
 */


let salary = document.getElementById("salary");

let day = document.getElementById("day");

function total(){
    let salaryValue = salary.value;

    let dayValue = day.value;

    let tong = salaryValue * dayValue;

    let content=`luong 1 ngay cua ban: ${salaryValue} --- so ngay ban lam: ${dayValue}\ntong tien luong cua ban la ${tong}`;

    document.getElementById("result").innerText = content;
}


