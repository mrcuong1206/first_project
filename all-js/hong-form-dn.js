var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
var check_password = /^[a-z0-9]{8,20}$/;

function checknull(txt) {
    return txt.value.length == 0;

}

function cmp(txt, reg) {
    return txt.value === reg.value;
}

function validform(f) {
    if (checknull(f.email)) {
        alert(" Nhập sai, mời nhập lại!");
        f.email.focus();
        return;
    }
    if (checknull(f.password)) {
        alert("  Nhập sai, mời nhập lại!");
        f.password.focus();
        return;
    } else {
        alert("Đăng nhập thành công!")
    }
}