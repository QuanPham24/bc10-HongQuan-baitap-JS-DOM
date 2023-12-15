/**
 * Khoi 1: nhan du lieu tu user
 * 
 * 
 * Khoi 2:
 * + luu du lieu vao bien
 * + tinh dien tich va chu vi
 * + dien tich = dai * rong
 * + chu vi = (dai + rong) * 2
 * 
 * khoi 3: output 
 */

function total4(){
    let dai = parseFloat(document.getElementById("dai").value);
    let rong = parseFloat(document.getElementById("rong").value);
    
    let dienTich = dai * rong;
    let chuVi = (dai + rong) * 2;
    
    document.getElementById("result4").innerText = "dien tich la " + dienTich + "\n chu vi la " + chuVi;
}