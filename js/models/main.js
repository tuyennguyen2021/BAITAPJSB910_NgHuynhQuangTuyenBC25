function getEle (id){
    return document.getElementById(id);
}

// khoi tao doi tuong dsnv tu lop doi tuong congty

var dsnv = new DanhSachNhanVien();

//khoi tao doi tuong validation tu lop doi tuong Validation

var validation = new Validation();

getLocalStorage();

function layThongTinNhanVien(){
    var taiKhoan = getEle('tknv').value;
    var tenNV = getEle('name').value;
    var emailNV = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;


    // tao bien co flag

    var isValid = true;

    // kiem tra taiKhoan: trong, do dai ky so tu 4 - 6, trung

    isValid &= validation.kiemTraRong(taiKhoan, "tbTKNV", "(*) vui lòng nhập tài khoản") &&
    validation.kiemTraDoDaiKyTu(taiKhoan, "tbTKNV", "(*) vui lòng nhập tài khoản có từ 4 - 6 ký tự", 4, 6 ) &&
    validation.kiemTraSo(taiKhoan, "tbTKNV", "(*) vui lòng nhập tài khoản là ký tự số") 
    // && validation.kiemTraTrung(taiKhoan, "tbTKNV", "(*) tài khoản đã tồn tại", dsnv.arr);


    // kiem tra  ten nhan vien
    isValid &= validation.kiemTraRong(tenNV, "tbTen", "(*) vui lòng nhập tên nhân viên ") && 
    validation.kiemTraChuoiKyTu(tenNV, "tbTen", "(*) vui lòng nhập tên nhân viên là chữ");

    //kiem tra  email

    isValid &= validation.kiemTraRong(emailNV, "tbEmail", "(*) vui lòng nhập email") &&
    validation.kiemTraEmail(emailNV, "tbEmail", "(*) vui lòng nhập email đúng định đạng");

    //kiem tra  mat khau 

    isValid &= validation.kiemTraRong(matKhau, "tbMatKhau", "(*) vui lòng nhập mật khẩu")&&
    validation.kiemTraDoDaiKyTu(matKhau, "tbMatKhau", "(*) vui lòng nhập mật khẩu từ 6 - 10 ký tự", 6,10)&&
    validation.kiemTraPass(matKhau, "tbMatKhau", "(*) vui lòng nhập mật khẩu có chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");

    // kiem tra ngay lam

    isValid &= validation.kiemTraRong(ngayLam, "tbNgay", "(*) vui lòng nhập ngày làm")&&
    validation.kiemTraNgayLam(ngayLam, "tbNgay", "(*) vui lòng nhập ngày làm theo định dạng mm-dd-yyyy");

    // kiem tra luong co ban

    isValid &= validation.kiemTraRong(luongCB, "tbLuongCB", "(*) vui lòng nhập lương cơ bản")&&
    validation.kiemTraKhoangGiaTri(luongCB, "tbLuongCB", "(*) vui lòng nhập lương cơ bản hợp lệ", 1000000, 20000000);

    // kiem tra chuc vu hop le

    isValid &= validation.kiemTraChucVu(chucVu, "tbChucVu", "(*) vui lòng nhập chức vụ hợp lệ");

    //kiem tra so gio lam

    isValid &= validation.kiemTraRong(gioLam, "tbGiolam", "(*) vui lòng nhập giờ làm") &&
    validation.kiemTraKhoangGiaTri(gioLam, "tbGiolam", "(*) vui lòng nhập giờ làm hợp lệ", 80,200);











    

    if(isValid){

        var nhanVien = new NhanVien(taiKhoan,tenNV, emailNV, matKhau, ngayLam, luongCB, chucVu, gioLam);
        //goi ham tinh tong luong va xep loai nhan vien
    
        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNV();
        return nhanVien;
    }

}

//them nhan vien

getEle('btnThemNV').addEventListener("click", function(){

    var nhanVien = layThongTinNhanVien();
    if(nhanVien){

        dsnv.themNV(nhanVien);
        console.log(nhanVien);
        console.log(nhanVien.tongLuong);
        console.log(dsnv.arr)
        taoBang(dsnv.arr);
    
        setLocalStorage();
    }
    
});




function taoBang (arr){
    var content = "";
    for (i =0 ; i<arr.length; i++){
        var nv = arr[i];
        content +=`<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.emailNV}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-primary mb-2" data-toggle="modal" data-target ="#myModal" onclick="suaNV('${nv.taiKhoan}')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
            </td>
            
        </tr>

        `
    }

    getEle('tableDanhSach').innerHTML= content;

}

// xoa Nhan Vien

function xoaNV (taiKhoan){
    dsnv.xoaNV(taiKhoan);
    taoBang(dsnv.arr);
    setLocalStorage();
}


// sua thong tin nhan vien

function suaNV(taiKhoan){
    var nhanVien = dsnv.layThongTinNhanVien(taiKhoan);
    console.log(nhanVien);

    //dom hien thi ra ngoai lai cac the input

    getEle('tknv').value = nhanVien.taiKhoan;
    // getEle('tknv').disabled = true;
    getEle('name').value = nhanVien.tenNV;
    getEle('email').value = nhanVien.emailNV;
    getEle('password').value = nhanVien.matKhau;
    getEle('datepicker').value = nhanVien.ngayLam;
    getEle('luongCB').value = nhanVien.luongCB;
    getEle('chucvu').value = nhanVien.chucVu;
    getEle('gioLam').value = nhanVien.gioLam;

}

//cap nhat nhan vien

getEle('btnCapNhat').addEventListener("click", function(){
    var nhanVien = layThongTinNhanVien();

    dsnv.capNhatNV(nhanVien);
    console.log(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();

});


// tim kiem nhan vien theo loai

getEle('searchName').addEventListener("keyup", function(){

    console.log(123);
    var keyWord = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyWord);
    taoBang(mangTimKiem);
    setLocalStorage(); 
  })











function setLocalStorage(){
    //chuyen dsnv.arr tu JSON sang => String
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("dsnv", dataString);
};

function getLocalStorage(){
    var dataString = localStorage.getItem("dsnv");
    if (dataString){
        //chuyen tu string sang JSON
        var dataJson = JSON.parse(dataString);
        //nap data vao dssv
        dsnv.arr = dataJson;
    
        //render tro lai tbody
    
        taoBang(dsnv.arr);
    }
};
