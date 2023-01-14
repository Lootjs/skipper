import { randPhoneNumber } from '@ngneat/falso';
import type {providerType} from "../types";

export const userPhoneProvider: providerType = {
    name: 'userPhoneProvider',

    matcher: (input: HTMLInputElement) => input.type === 'tel',

    filler(): string {
        // return '';
        const phone = randPhoneNumber({ countryCode: 'QA' }).replace(/\s/g, '');

        return phone.slice(4, 8) + ' ' + phone.slice(8);
    },

    sendEvent: true,

    eventName: 'input'
}
