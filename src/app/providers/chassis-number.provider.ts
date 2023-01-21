import { getVehicle } from 'testing-data';
import type { providerType } from "../types";

export const chassisNumberProvider: providerType = {
    name: 'chassisNumberProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {

        if (!label) {
            return false;
        }

        return label.innerText.indexOf('Chassis Number') !== -1;
    },

    filler(): string {
        const vehicle = getVehicle({});
        console.table(vehicle);
        return vehicle.vin as string;
    },

    sendEvent: true,

    eventName: 'input'
}
