function check_login(psw,name){
    var password = $("#"+psw).val();
    var username = $('#'+name).val();
    var time = $('#'+time).val();
    var temp=false;
    $.ajax({
        type: "POST",
        async:false,
        url: "http://www.yuncaijing.cn/member/ajax_check_login",
        data: "password=" + password +'&username='+username+'&time'+time,
        dataType: "json",
        success: function (data) {
              if (data.status == 400) {
                    temp = 400;
            }else if(data.status == 700){
                temp = 700;
            }else if(data.status == 401){
                  temp = 401;
              }
        }
    });
    return temp;
}
function check_phone(phoneid){
    var phone = $("#"+phoneid).val();
    var temp=false;
    $.ajax({
        type: "POST",
        async:false,
        url: "http://www.yuncaijing.cn/member/ajax_check_phone",
        data: "phone=" + phone ,
        dataType: "json",
        success: function (data) {
            if (data.status == 400) {
                temp = false;
            }else if(data.status == 700){
                temp = true;
            }
        }
    });
    return temp;
}
function check_sms(smsid,chk){
    var captcha_code = $("#"+smsid).val();
    var temp=false;
    $.ajax({
        type: "POST",
        async:false,
        url: "http://www.yuncaijing.cn/member/ajax_check_sms",
        data: "captcha_code=" + captcha_code ,
        dataType: "json",
        success: function (data) {
            if (data.status == 400) {

                temp = false;
            }else if(data.status == 700){

                temp = true;
            }
        }
    });
    return temp;
}
function check_captcha(captchaid){
    var captcha_code = $("#"+captchaid).val();
    var temp=false;
    $.ajax({
        type: "POST",
        async:false,
        url: "http://www.yuncaijing.cn/member/ajax_check_captcha",
        data: "captcha_code=" + captcha_code ,
        dataType: "json",
        success: function (data) {
            if (data.status == 400) {
                temp = false;
            }else if(data.status == 700){
                temp = true;
            }
        }
    });
    return temp;
}
function check_email(emailid){
    var email = $("#"+emailid).val();
    var temp=false;
    $.ajax({
        type: "POST",
        async:false,
        url: "http://www.yuncaijing.cn/member/ajax_check_email",
        data: "email=" + email ,
        dataType: "json",
        success: function (data) {
            if (data.status == 400) {
                temp = false;
            }else if(data.status == 700){
                temp = true;
            }
        }
    });
    return temp;
}