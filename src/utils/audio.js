import React from 'react';
import {Howl} from 'howler';
import AlarmSound from 'sounds/avocadoro_alarm_1.mp3';

const alarm = new Howl({
    src: [AlarmSound]
});

export function playAlarm() {
    const alarmId = alarm.play();
    alarm.fade(1, 0, 7000, alarmId);
}
