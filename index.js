$(document).ready(function () {


    function sendData(screenName) {
        ga('set', {
            dimension1: '1234',
            dimension2: screenName,
            metric1: '12345'
        });

        ga('send', 'event');

        console.log(ga.getAll())
    }


    $('#next1').on('click', function () {
        sendData('1');
    });

    $('#next2').on('click', function () {
        sendData('2');
    });

    $('#next3').on('click', function () {
        sendData('3');
    });

    $('#next4').on('click', function () {
        sendData('4');
    });

});
