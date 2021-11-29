// Đăng kí

var full_name = /^[A-Za-z0-9_]{1,22}$/;
var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
var check_password = /^[a-z0-9]{8,20}$/;

function checknull(txt) {
    return txt.value.length == 0;

}

function checksize(txt) {
    return txt.value.length < 8;
}

function cmp(txt, reg) {
    return txt.value === reg.value;
}

function validform(f) {
    if (checknull(f.fullname)) {
        alert(" Bạn chưa nhập tài khoản!");
        f.fullname.focus();
        return;
    }
    if (checksize(f.fullname)) {
        alert("Tên đăng kí phải hơn 8 kí tự");
        f.fullname.focus();
        return;
    }
    if (checknull(f.email)) {
        alert(" Nhập sai, mời nhập lại!");
        f.email.focus();
        return;
    }
    if (checknull(f.sdt)) {
        alert(" Nhập sai, mời nhập lại!");
        f.sdt.focus();
        return;
    }
    if (checknull(f.password)) {
        alert("  Nhập sai, mời nhập lại!");
        f.password.focus();
        return;
    }
    if (checknull(f.confirmpassword)) {
        alert("  Nhập sai, mời nhập lại!");
        f.confirmpassword.focus();
        return;
    }
    if (!cmp(f.password, f.confirmpassword)) {
        alert("Mật khẩu không khớp");
        f.password.focus();
        f.confirmpassword.focus();
        return;
    }
    alert("all fields are valid!!!");
}