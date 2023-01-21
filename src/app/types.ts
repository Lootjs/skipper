export type providerType = {
    name: string;
    matcher(input: Element, label?: HTMLLabelElement): boolean;
    filler(): string;
    sendEvent: boolean;
    eventName?: string;
}
