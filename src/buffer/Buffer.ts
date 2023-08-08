export default interface Buffer {
    value(): number;
    next(): void;
    previous(): void;
    increment(): void;
    decrement(): void;
    reset(): void;
}