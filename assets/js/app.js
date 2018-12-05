
/**
 * menu mobile
 */
let $ = document.querySelector.bind(document);
$('.btn-mobile').addEventListener('click', function(e) {
    $('html').classList.add('active');
});
$('html').addEventListener('click', function(e) {
    e.target.nodeName == 'HTML' && this.classList.remove('active');
});
$('.btn-mobile-close').addEventListener('click', function(e) {
    $('html').classList.remove('active');
});