/**
 * Created by j on 18/6/3.
 */

import $ from 'jquery'

const speechSU = new window.SpeechSynthesisUtterance();
speechSU.volume = 0.3;

$('#voice_btn').toggle(function () {
    speechSynthesis.pause();
}, function () {
    speechSynthesis.resume();
});

function voiceWarning () {
    let list = [];

    $('#point li').each(function () {
        let text = $(this).text();
        text && list.push(text);
    });

    let l = list.length;

    function xsp (e) {
        l += 1;
        let random = Math.random() * l * 1000;
        let first = list.shift();
        speechSU.text = first;
        list.push(first);
        setTimeout(function () {
            window.speechSynthesis.speak(speechSU);
        }, 4000);
    }

    speechSU.onend = xsp;

    xsp();
}

voiceWarning();
