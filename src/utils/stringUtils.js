// @TODO: Test Me
export function upperCaseWords(sentence) {
    return sentence.split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)} `);
};