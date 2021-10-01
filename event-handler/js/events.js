function transformUpperCase(_val){
    return _val.toUpperCase();
}
let elNamapengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
}}