var tien0 = 500;
var tien51 = 650;
var tien101 = 850;
var tien151 = 1100;
var tienConLai = 1300;

function Submit() {
    var name = document.getElementById('ten').value;
    var soKw = document.getElementById('soKw').value * 1;
    var tongTien = 0;

    if (soKw > 0 && soKw <= 50) {
        tongTien = tien0 * soKw;
    } else if (soKw <= 100) {
        tongTien = tien0 * 50 + (soKw - 50) * tien51;
    } else if (soKw <= 200) {
        tongTien = tien0 * 50 + tien51 * 50 + (soKw - 100) * tien101;
    } else if (soKw <= 350) {
        tongTien = tien0 * 50 + tien51 * 50 + tien101 * 100 + (soKw - 200) * tien151;
    } else if (soKw > 350) {
        tongTien = tien0 * 50 + tien51 * 50 + tien101 * 100 + tien151 * 150 + (soKw - 350) * tienConLai;
    }

    document.getElementById('result').innerHTML =
        `<p class="text-danger fs-3 fw-bold">Họ Tên: ${name} - Tiền Điện: ${tongTien.toLocaleString()} VND</p>`;
}
