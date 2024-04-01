let diemChuan, diem1, diem2, diem3, diemUT1 = 0, diemUT2 = 0;

document.addEventListener('DOMContentLoaded', () => {
    var selectKhuVuc = document.getElementById("khuVuc");
    selectKhuVuc.addEventListener("change", (event) => {
        diemUT1 = phanLoai1(event.target.value);
    })

    var selectDoiTuong = document.getElementById("doiTuong");
    selectDoiTuong.addEventListener("change", (event) => {
        diemUT2 = phanLoai2(event.target.value);
    })
})

function Submit() {
    diemChuan = parseFloat(document.getElementById('diemChuan').value);
    diem1 = parseFloat(document.getElementById('diem1').value);
    diem2 = parseFloat(document.getElementById('diem2').value);
    diem3 = parseFloat(document.getElementById('diem3').value);

    var ketQua = '';
    let tong = 0;

    tong = tinhDiem(diem1, diem2, diem3, diemUT1, diemUT2);

    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        ketQua = 'Bạn đã rớt do có điểm liệt!!! Chia buồn cùng bạn';
    } else {
        if (tong >= diemChuan) {
            ketQua = 'Chúc mừng bạn đã đậu!!!';
        } else {
            ketQua = 'Bạn không đủ điểm chuẩn!! Chia buồn nhé!!';
        }
    }

    console.log('diemChuan: ', diemChuan);
    console.log('diem1: ', diem1);
    console.log('diem2: ', diem2);
    console.log('diem3: ', diem3);
    console.log('diemUT1: ', diemUT1);
    console.log('diemUT2: ', diemUT2);
    console.log('tong: ', tong);
    console.log('ketQua: ', ketQua);

    document.getElementById('result').innerHTML =
        `<p class="text-danger fs-3 fw-bold">Điểm xét tuyển: ${tong} - Kết Quả: ${ketQua}</p>`;
}
