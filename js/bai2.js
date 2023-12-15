/**
 * khoi 1:
 * nhan du lieu tu User
 * user nhap 5 so thuc
 * 
 * khoi 2:
 * lay 5 gia tri tu user va gan vao bien;
 * (num1 + num2 +num3 +num 4 +num 5)/5;
 * 
 * khoi 3: output
 */

function total2(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);
    let n4 = parseFloat(document.getElementById("num4").value);
    let n5 = parseFloat(document.getElementById("num5").value);

    let medium = (n1 + n2 + n3 + n4 + n5) / 5;
    // console.log(medium);
    // console.log(medium);
    document.getElementById("result2").innerText = "gia tri trung binh la " + medium;
}