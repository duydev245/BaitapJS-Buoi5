function phanLoai1(loai) {
    if (loai === 'A') {
        return 2;
    } else if (loai === 'B') {
        return 1;
    } else if (loai === 'C') {
        return 0.5;
    } else {
        return 0;
    }
}

function phanLoai2(loai) {
    if (loai === '1') {
        return 2.5;
    } else if (loai === '2') {
        return 1.5;
    } else if (loai === '3') {
        return 1;
    } else {
        return 0;
    }
}

function tinhDiem(d1, d2, d3, dut1, dut2) {
    var tongDiem = 0;
    tongDiem = d1 + d2 + d3 + dut1 + dut2;
    return tongDiem;
}

