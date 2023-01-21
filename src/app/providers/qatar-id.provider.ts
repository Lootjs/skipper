import { randomNumber } from "../helpers";
import type { providerType } from "../types";

const yearsOfCentury = {
    2: [50, 99],
    3: [10, 23],
}
export const qatarIdProvider: providerType = {
    name: 'qatarIdProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('QID') !== -1;
    },

    filler(): string {
        const century = randomNumber(2, 3)
        const years = yearsOfCentury[century];
        const year = randomNumber(years[0], years[1]);
        const code = randomNumber(100, 250);
        const uniqueId = randomNumber(10000, 99999)

        return `${century}${year}${code}${uniqueId}`;
    },

    sendEvent: true,

    eventName: 'input'
}
