export type providerType = {
    name: string;
    matcher(input: HTMLInputElement, label?: HTMLLabelElement): boolean;
    filler(): string;
    sendEvent: boolean;
    eventName?: string;
}
