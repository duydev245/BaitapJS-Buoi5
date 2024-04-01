document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("mySelect");

    selectElement.addEventListener("change", function () {
        var inputSoKetNoiDN = document.getElementById("soKetNoiDN");
        if (this.value === "doanhNghiep") {
            inputSoKetNoiDN.style.display = "block";
        } else {
            inputSoKetNoiDN.style.display = "none";
        }
    });
});

function Submit() {
    var maKH = document.getElementById("maKH").value;
    var soKenhCC = document.getElementById("soKenhCC").value;
    var loaiKH = document.getElementById("mySelect").value;

    var phiXuLyHD, phiDichVuCoBan, phiKenhCaoCap, phiKetNoi = 0;

    if (loaiKH === "nhaDan") {
        phiXuLyHD = 4.5;
        phiDichVuCoBan = 20.5;
        phiKenhCaoCap = 7.5 * soKenhCC;
    } else if (loaiKH === "doanhNghiep") {
        phiXuLyHD = 15;
        phiDichVuCoBan = 75;
        var soKetNoi = document.getElementById("soKetNoi").value;
        phiKetNoi = (soKetNoi - 10) * 5;
        phiKenhCaoCap = 50 * soKenhCC;
    }

    var tongHoaDon = phiXuLyHD + phiDichVuCoBan + phiKenhCaoCap + phiKetNoi;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Hóa đơn cho khách hàng mã ${maKH}</h3>
        <p>Phí xử lý hóa đơn: $${phiXuLyHD.toFixed(2)}</p>
        <p>Phí dịch vụ cơ bản: $${phiDichVuCoBan.toFixed(2)}</p>
        <p>Phí thuê kênh cao cấp: $${phiKenhCaoCap.toFixed(2)}</p>
        <p>Phí thuê kết nối: $${phiKetNoi.toFixed(2)}</p>
        <h4>Tổng hóa đơn: $${tongHoaDon.toFixed(2)}</h4>
    `;
}
