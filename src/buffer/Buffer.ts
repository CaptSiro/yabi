export default interface Buffer {
    set(byte: number): void;
    value(): number;
    next(): void;
    previous(): void;
    increment(): void;
    decrement(): void;
    reset(): void;
}