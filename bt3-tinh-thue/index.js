function Submit() {
    var ten = document.getElementById('ten').value;
    var tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    var soNguoi = parseInt(document.getElementById('soNguoi').value);

    console.log('ten: ', ten);
    console.log('tongThuNhap: ', tongThuNhap);
    console.log('soNguoi: ', soNguoi);

    var thuNhapThue = 0;
    thuNhapThue = tongThuNhap - 4000000 - (soNguoi * 1600000);
    console.log('thuNhapThue: ', thuNhapThue);

    var thue = 0;
    if (thuNhapThue > 0 && thuNhapThue <= 60000000) {
        thue = thuNhapThue * 0.05;
    } else if (thuNhapThue <= 120000000) {
        thue = 60000000 * 0.05 + (thuNhapThue - 60000000) * 0.1;
    } else if (thuNhapThue <= 210000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapThue - 120000000) * 0.15;
    } else if (thuNhapThue <= 384000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapThue - 210000000) * 0.2;
    } else if (thuNhapThue <= 624000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapThue - 384000000) * 0.25;
    } else if (thuNhapThue <= 960000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapThue - 624000000) * 0.3;
    } else {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapThue - 960000000) * 0.35;
    }

    console.log('thue: ', thue);
    document.getElementById('result').innerHTML = `
    <p class="text-danger fs-3 fw-bold">Họ Tên: ${ten} - Tiền thuế thu nhập cá nhân: ${thue.toLocaleString()} VND</p>`;
}
