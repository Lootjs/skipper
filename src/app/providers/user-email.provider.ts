import { randEmail } from '@ngneat/falso';
import type { inputableProviderType } from "../types";

export const userEmailProvider: inputableProviderType = {
    name: 'userEmailProvider',

    matcher: (input: HTMLInputElement) => input.name === 'email',

    filler: (): string => randEmail(),

    sendEvent: true,

    eventName: 'input'
}
