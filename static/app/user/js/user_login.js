function check_input() {

    var password = $("#password").val();
    console.log("password"+password);
    $("#password").val(md5(password));

    return true
}
window.onload=function(){
    login();
}

function login(){
    err_name = $('#err_name').val();
    err_password = $('#err_password').val();
    if(err_name){
        alert(err_name);
    }else if(err_password){
        alert(err_password);
    }
}