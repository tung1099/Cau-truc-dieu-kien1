function thongbao(){
    let point = Number(document.getElementById("point").value);
    let result=""
    if (point<0){
        result="Khong hop le";
    }
    else
        if (point<=4){
            result="Khong dat";
        } else
            if (point<=6){
                result="dat";
            }else
                if (point<=8){
                    result="Kha";
                } else
                    result="tot";
}