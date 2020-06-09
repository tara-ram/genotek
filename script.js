$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', showBody);
});

function showBody(target){
    $(this).find('.arrow_show').toggleClass('active');
    $(this).next().slideToggle(500);
}