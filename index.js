
//hiển thị thông báo
setTimeout(function() {
    document.getElementById('overlay').style.display = 'flex';
}, 1000);


function closePopup() {
// tắt thông báo
document.getElementById('overlay').style.display = 'none';
}