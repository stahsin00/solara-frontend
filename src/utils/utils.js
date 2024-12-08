export function formatDoubleDigit(value) {
    return value < 10 ? `0${value}` : value;
}

export function formatTime(timeSpan) {
    const [hours, minutes, seconds] = timeSpan.split(':');

    const formattedSeconds = seconds.split('.');

    return {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(formattedSeconds)
      };
}