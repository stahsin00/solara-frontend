export function formatDoubleDigit(value) {
    return value < 10 ? `0${value}` : value;
}