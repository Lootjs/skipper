import { randomNumber } from "../helpers";
import type { providerType } from "../types";
export const plateNumberProvider: providerType = {
    name: 'plateNumberProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('Plate') !== -1;
    },

    filler: (): string => randomNumber(10000, 90000).toString(),

    sendEvent: true,

    eventName: 'input'
}
