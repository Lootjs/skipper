import { plateNumberProvider } from "./providers/plate-number.provider";
import { chassisNumberProvider } from "./providers/chassis-number.provider";
import { firstNameProvider } from "./providers/first-name.provider";
import { lastNameProvider } from "./providers/last-name.provider";
import { userPhoneProvider } from "./providers/user-phone.provider";
import { userEmailProvider } from "./providers/user-email.provider";
import { qatarIdProvider } from "./providers/qatar-id.provider";
import { passportNumberProvider } from "./providers/passport-number.provider";
import { phantomProvider } from "./providers/phantom.provider";

export const providers = [
    plateNumberProvider,
    chassisNumberProvider,
    firstNameProvider,
    lastNameProvider,
    userPhoneProvider,
    userEmailProvider,
    qatarIdProvider,
    passportNumberProvider,
    phantomProvider,
];

export function findProvider(input: Element, label?: HTMLLabelElement) {
    return providers.find(provider => provider.matcher(input, label));
}
