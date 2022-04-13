
// lop doi tuong nhan vien
var NhanVien = function (_taiKhoan,_tenNV, _emailNV, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam ){
    this.taiKhoan = _taiKhoan;
    this.tenNV =  _tenNV;
    this.emailNV = _emailNV;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhTongLuong = function (){
        if(this.chucVu =="Sếp"){
            this.tongLuong = this.luongCB*3;
            return this.tongLuong;

        }else if(this.chucVu =="Trưởng phòng"){
            this.tongLuong = this.luongCB*2;
            return this.tongLuong;
        }else{
            this.tongLuong = this.luongCB*1;
            return this.tongLuong;

    }
}
    this.xepLoaiNV = function (){
        if(this.gioLam >= 192){
            return this.xepLoai = "nhân viên xuất sắc";
        }else if (this.gioLam >= 176 && this.gioLam <192){
            return this.xepLoai = "nhân viên giỏi";
        }else if(this.gioLam >= 160 && this.gioLam <176){
            return this.xepLoai = "nhân viên khá";
        }else{
            return this.xepLoai = "nhân viên trung bình";
    }
}
}