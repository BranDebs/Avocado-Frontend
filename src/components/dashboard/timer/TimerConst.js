const AVOCADORO_TIME = 1500;
const SHORT_BREAK_TIME = 300;
const LONG_BREAK_TIME = 900;

export class TimeConst {
  static get AVOCADORO_TIME() {
    return AVOCADORO_TIME;
  }

  static get SHORT_BREAK_TIME() {
    return SHORT_BREAK_TIME;
  }

  static get LONG_BREAK_TIME() {
    return LONG_BREAK_TIME;
  }
}

const timerState = Object.freeze({
  AVOCADORO: 1,
  SHORT_BREAK: 2,
  LONG_BREAK: 3
});

export class TimerState {
  static get AVOCADORO() {
    return timerState.AVOCADORO;
  }

  static get SHORT_BREAK() {
    return timerState.SHORT_BREAK;
  }

  static get LONG_BREAK() {
    return timerState.LONG_BREAK;
  }
}
