import { createRandomEmail } from 'testing-data';
import type { providerType } from "../types";

export const userEmailProvider: providerType = {
    name: 'userEmailProvider',

    matcher: (input: HTMLInputElement) => input.name === 'email',

    filler: (): string => createRandomEmail(),

    sendEvent: true,

    eventName: 'input'
}
