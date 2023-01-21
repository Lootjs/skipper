import type { providerType } from "../types";
import {randomNumber} from "../helpers";

export const passportNumberProvider: providerType = {
    name: 'qatarIdProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('Passport') !== -1;
    },

    filler(): string {
        return String(randomNumber(100000000, 9000000000));
    },

    sendEvent: true,

    eventName: 'input'
}
