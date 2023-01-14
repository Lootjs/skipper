import { getVehicle } from 'testing-data';
import type { providerType } from "../types";
export const plateNumberProvider: providerType = {
    name: 'plateNumberProvider',

    matcher(input: HTMLInputElement, label?: HTMLLabelElement) {
        if (!label) {
            return false;
        }

        return label.innerText.indexOf('Plate') !== -1;
    },

    filler(): string {
        const vehicle = getVehicle({});
        console.table(vehicle);
        return vehicle.numberPlate as string;
    }
}
