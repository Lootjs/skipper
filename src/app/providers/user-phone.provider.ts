import { randomNumber } from "../helpers";
import type { providerType } from "../types";

const prefix = 974;

type phoneOptions = {
    withPrefix: boolean;
}

const primaryNumbers = [3, 5, 7];
const phoneRanges = [
    1000000,
    8000000,
]

const getRandPhone = (options: phoneOptions = { withPrefix: false }) => {
    const firstNumber = primaryNumbers[Math.floor(Math.random() * primaryNumbers.length)];
    const restNumbers = randomNumber(phoneRanges[0], phoneRanges[1]);

    return `${options.withPrefix ? prefix : ''}${firstNumber}${restNumbers}`;
}

export const userPhoneProvider: providerType = {
    name: 'userPhoneProvider',

    matcher: (input: HTMLInputElement) => input.type === 'tel',

    filler: getRandPhone,

    sendEvent: true,

    eventName: 'input'
}
