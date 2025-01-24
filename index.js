document.addEventListener("DOMContentLoaded", function () {
let st=document.getElementById("fill1")
let rd=document.getElementById("fill2")
let stp=document.getElementById("fill3")
window.onStart=function(){
    st.style.fill="green"
    rd.style.fill="white"
    stp.style.fill="white"
}
window.onStarto=function(){
    rd.style.fill="orange"
    st.style.fill="white"
    stp.style.fill="white"
}
window.onStartr=function(){
    stp.style.fill="red"
    st.style.fill="white"
    rd.style.fill="white"
}
window.onDDClick=function(){
stp.style.fill="white"
    st.style.fill="white"
    rd.style.fill="white"
}
});
