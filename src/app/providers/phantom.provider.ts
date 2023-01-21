import type { providerType } from "../types";

export const phantomProvider: providerType = {
    name: 'phantomProvider',

    matcher: () => true,

    filler: (): string => '',

    sendEvent: true,

    eventName: 'input'
}
