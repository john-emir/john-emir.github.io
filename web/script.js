$('.slider').slick({
    dots: true,
    //  autoplay: true   
});
$('.conteinerPost').slick({
    dots: true,
    // autoplay: true   
});
//кнопка
document.querySelector('.meny-icons-wraper').onclick = function () {
    document.querySelector('.meny-icons').classList.toggle('meny-icons-active');
}
document.querySelector('.meny-icons-wraper').onclick = function () {
    document.querySelector('.meny-icons').classList.toggle('meny-icons-active');
    mobailNavConteiner.classList.toggle("mobailNavActive")
    
}
const mobailNavConteiner = document.querySelector("#mobailNav");



