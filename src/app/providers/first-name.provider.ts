import { randFirstName } from '@ngneat/falso';
import type { providerType } from "../types";

export const firstNameProvider: providerType = {
    name: 'firstNameProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('First Name') !== -1;
    },

    filler: (): string => randFirstName(),

    sendEvent: false
}
