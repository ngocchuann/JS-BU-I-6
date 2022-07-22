// bai tap 1:
function soNguyenDuong() {
    var i = 0;
    var num = 0;

    for (var i = 0; num <= 10000; i++) {

        num = num + i;
        document.getElementById("txtResultmin").innerHTML = "Số nguyên dương nhỏ nhất :" + i;
    }

}
document.getElementById("btnnhan").onclick = soNguyenDuong;
// bai tap 2:
function tinhTong() {
    var x = document.getElementById("x").value;
    var n = document.getElementById("n").value;

    var tong = 0;

    for (var i = 1; i <= n; i++) {
        tong += Math.pow(x, i);

        document.getElementById("txtResulttinh").innerHTML = tong;
    }

}
document.getElementById("btntinh").onclick = tinhTong;
// Bai tap 3:
function tinhGiaiThua() {
    var giaiThua = document.getElementById("gt").value;
    var ketQua = 1

    for (var i = 1; i <= giaiThua; i++) {
        ketQua = ketQua * i;

        document.getElementById("txtResultbai3").innerHTML = ketQua;
    }

}
document.getElementById("btngt").onclick = tinhGiaiThua;
// Bai tap 4:
function thediv() {
    var divLe = '';
    var divChan = '';
    for(var i = 1; i<=10 ; i++){
        if(i % 2 == 0){
            divLe =  '<div class="bg-danger text-white p-2">Div chẵn</div>'

        }else{
            divLe = '<div class="bg-primary text-white p-2">Div lẽ</div>'
        }
        divChan += divLe;
        document.getElementById("txtResult4").innerHTML = divChan;
    }
}
document.getElementById("btntaodiv").onclick = thediv;
