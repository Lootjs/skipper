export const randomNumber = (minimum: number, maximum: number) =>
    Math.round( Math.random() * (maximum - minimum) + minimum);
