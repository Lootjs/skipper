import { getLastName } from 'testing-data';
import type { providerType } from "../types";

export const lastNameProvider: providerType = {
    name: 'lastNameProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('Family Name') !== -1;
    },

    filler: (): string => getLastName(),

    sendEvent: true,

    eventName: 'input'
}
