/**
 * Khoi 1: nhan du lieu tu user
 * 
 * 
 * Khoi 2:
 * + luu du lieu vao bien
 * + tach chu so hang chuc va luu vao bien
 * + clay chu so hang don vi va luu vao bien
 * + Tinh tong 2 ky so
 * 
 * khoi 3: output 
 */

function total5(){
    let ten = Math.floor(parseInt(document.getElementById("number").value) / 10);
    let unit = parseInt(document.getElementById("number").value) % 10;
    
    let tong = ten + unit;
    console.log(ten + unit);
    document.getElementById("result5").innerText = "tong 2 ky so la " + tong;
}