import { getFirstName } from 'testing-data';
import type { providerType } from "../types";

export const firstNameProvider: providerType = {
    name: 'firstNameProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('First Name') !== -1;
    },

    filler: (): string => getFirstName({}),

    sendEvent: false
}
