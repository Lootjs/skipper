import { plateNumberProvider } from "./providers/plate-number.provider";
import { chassisNumberProvider } from "./providers/chassis-number.provider";
import { firstNameProvider } from "./providers/first-name.provider";
import { lastNameProvider } from "./providers/last-name.provider";
import { userPhoneProvider } from "./providers/user-phone.provider";
import { userEmailProvider } from "./providers/user-email.provider";

const providers = [
    plateNumberProvider,
    chassisNumberProvider,
    firstNameProvider,
    lastNameProvider,
    userPhoneProvider,
    userEmailProvider,
];

export function findProvider(input: HTMLInputElement, label?: HTMLLabelElement) {
    return providers.find(provider => provider.matcher(input, label));
}
