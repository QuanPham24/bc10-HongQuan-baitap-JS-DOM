/**
 * Khoi 1: nhan du lieu tu user
 * 
 * 
 * Khoi 2:
 * + luu du lieu vao bien
 * + USD * 23,500
 * 
 * khoi 3: output 
 */


function total3(){
    let usd = parseFloat(document.getElementById("USD").value);
    
    let trans = usd * 23500;
    // console.log(medium);
    // console.log(medium);
    document.getElementById("result3").innerText = "so tien ban doi duoc la " + trans + "vnd";
}