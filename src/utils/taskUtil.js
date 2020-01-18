import {
  TODO,
  IN_PROGRESS,
  COMPLETED,
  BTN_START,
  BTN_FINISH,
  BTN_ARCHIVE
} from 'const/Task';

export function getTaskButton(taskType) {
  switch (taskType) {
    case TODO:
      return BTN_START;
    case IN_PROGRESS:
      return BTN_FINISH;
    case COMPLETED:
      return BTN_ARCHIVE;
    default:
      return 'Button';
  }
}
