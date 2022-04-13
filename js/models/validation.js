function Validation (){
    this.kiemTraRong = function (value, divId, mess){
        if(value == ""){
            // bi loi 
            getEle(divId).innerHTML =mess;
            getEle(divId).style.display="block";
            return false;
        }else{
            //ko bi loi
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
    }

    this.kiemTraChucVu = function (value, divId, mess){
        if(value === "Chọn chức vụ"){
            // bi loi
            getEle(divId).innerHTML =mess;
            getEle(divId).style.display="block";
            return false;

        }else{
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
    }
    }

    this.kiemTraDoDaiKyTu = function (value, divId, mess, min, max){
        if(value.trim().length >=min && value.trim().length <=max){
            //hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
        // ko hop le
        getEle(divId).innerHTML =mess;
        getEle(divId).style.display="block";
            return false;
        
    }

    this.kiemTraSo = function (value, divId, mess){

        var letter = /^[0-9]+$/;
        if(value.match(letter)){
            // hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
        //khong hop le

        getEle(divId).innerHTML =mess;
        getEle(divId).style.display="block";
        return false;


    }

    this.kiemTraTrung = function (value, divId, mess, arr){
        var status = false;
        for(var i =0; i< arr.length;i++){
            var nv = arr[i];
            if(nv.taiKhoan === value){
                status = true;
                break;
            }
        }

        if(status){
            //khong hop le

        getEle(divId).innerHTML =mess;
        getEle(divId).style.display="block";
        return false;

        }
         // hop le
         getEle(divId).innerHTML ="";
         getEle(divId).style.display="none";
         return true;
        

        }
    this.kiemTraChuoiKyTu = function (value, divId, mess){
            var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if((value.toString()).match(letter)){
            // hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;

        }

            //khong hop le

            getEle(divId).innerHTML =mess;
            getEle(divId).style.display="block";
            return false;

        }

    this.kiemTraEmail = function (value, divId, mess){
            var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(letter)){
            // hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
            //khong hop le

            getEle(divId).innerHTML =mess;
            getEle(divId).style.display="block";
            return false;
            }

    this.kiemTraPass = function (value, divId, mess){
        var letter =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(value.match(letter)){
            // hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
            //khong hop le

            getEle(divId).innerHTML =mess;
            getEle(divId).style.display="block";
            return false;

        }
    
    this.kiemTraNgayLam = function (value, divId, mess){
        var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

        if(value.match(letter)){
            // hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
        //khong hop le

        getEle(divId).innerHTML =mess;
        getEle(divId).style.display="block";
        return false;
    }

    this.kiemTraKhoangGiaTri = function (value, divId, mess, min, max){

        if(value.trim() >=min && value.trim() <=max){
            //hop le
            getEle(divId).innerHTML ="";
            getEle(divId).style.display="none";
            return true;
        }
        // ko hop le
        getEle(divId).innerHTML =mess;
        getEle(divId).style.display="block";
            return false;

    }




}

