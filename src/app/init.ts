import { findProvider } from "./matcher";

export function initInputHelpers() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => registerInputHelper(input));
}

export function registerInputHelper(input: HTMLInputElement) {
    // if (input.dataset.skipper) {
    //     return;
    // }

    const sibling = input.nextElementSibling as HTMLLabelElement;
    const provider = findProvider(input, sibling && sibling.nodeName === 'LABEL' ? sibling : null);

    if (!provider) {
        return;
    }

    input.dataset.skipper = provider.name;
    input.value = provider.filler();
    console.log(provider.filler())
    const event = new Event(provider.eventName, {
        bubbles: true,
        cancelable: true,
    });

    input.dispatchEvent(event);
}
