$(function () {
    // отлавливаем события "нажмите на клавишу"
    $(this).keydown(function (event) {
        //создаем переменную, в которую помещаем div с подходящим data-key
        var key = $(this).find('.key[data-key=' + event.which + ']');
        //находим на странице тег audio с нужным data-key и помещаем также в переменную для удобства
        var audio = $(this).find('audio[data-key=' + event.which + ']')[0];
        //присваиваем активный класс к клавише, чтобы подсветить ее
        key.toggleClass('playing');
        //проверяем сущетвует ли audio тег с таким data-key
        if (!audio) return;
        //воспроизводим звук
        audio.play();
        //сбрасываем таймер звуковой дорожки снова на 0
        audio.currentTime = 0;
    });
    //отслеживаем событие, когда пользователь отпускает кнопку
    $(this).keyup(function (event) {
        //снова создаем переменную с нужным data-key
        var key = $(this).find('.key[data-key=' + event.which + ']');
        //убираем класс, который подсвечивает кнопку
        key.toggleClass('playing');
    });
});