function DanhSachNhanVien (){
    this.arr =[];
    this.themNV = function(nhanVien){
            this.arr.push(nhanVien);
    }
    this.timViTriNV = function (taiKhoan){
        var index = -1;
        for (i = 0; i< this.arr.length ; i++){
            var nhanVien = this.arr[i];
            if(nhanVien.taiKhoan == taiKhoan){
                index =i;
                break;
            }
        }
        return index;
    }
    this.xoaNV = function(taiKhoan){
        // tim vi tri
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1){
            //xoa
            this.arr.splice(index,1);
            
        }
        
    }
    this.layThongTinNhanVien = function (taiKhoan){
        //tim vi tri
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1){
            var nhanVien = this.arr[index];
            return nhanVien;
        }
        return null;
    }

    this.capNhatNV = function (nhanVien){
        var index = this.timViTriNV(nhanVien.taiKhoan);
        if(index !== -1){
            this.arr[index] = nhanVien;
        }
    }

    this.timKiemNhanVien = function (keyWord){
        var mangTimKiem = [];
    
        for (var i =0 ; i < this.arr.length; i++){
            var nhanVien = this.arr[i];
            if(nhanVien.xepLoai.toLowerCase().indexOf(keyWord.toLowerCase())!== -1){
                mangTimKiem.push(nhanVien)
            }
        }
        return mangTimKiem;
    };
    
}