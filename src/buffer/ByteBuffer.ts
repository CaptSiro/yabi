import Buffer from "./Buffer";



export default class ByteBuffer implements Buffer {
    private buffer: number[];
    private pointer: number;

    constructor() {
        this.buffer = [0];
        this.pointer = 0;
    }

    decrement(): void {
        const x = this.buffer[this.pointer];

        if (x === 0) {
            this.buffer[this.pointer] = 255;
            return;
        }

        this.buffer[this.pointer] = x - 1;
    }

    increment(): void {
        const x = this.buffer[this.pointer];

        if (x === 255) {
            this.buffer[this.pointer] = 0;
            return;
        }

        this.buffer[this.pointer] = x + 1;
    }

    next(): void {
        this.pointer++;

        if (this.pointer === this.buffer.length) {
            this.buffer.push(0);
        }
    }

    previous(): void {
        if (this.pointer === 0) {
            this.buffer.unshift(0);
            return;
        }

        this.pointer--;
    }

    value(): number {
        return this.buffer[this.pointer];
    }

    reset(): void {
        this.buffer = [0];
        this.pointer = 0;
    }

    set(byte: number): void {
        this.buffer[this.pointer] = Math.max(0, Math.min(byte, 255));
    }
}