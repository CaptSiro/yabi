import Buffer from "./Buffer";



export default class ArrayBuffer implements Buffer {
    private readonly buffer: number[];
    private pointer: number;

    constructor() {
        this.buffer = [0];
        this.pointer = 0;
    }

    decrement(): void {
        this.buffer[this.pointer]--;
    }

    increment(): void {
        this.buffer[this.pointer]++;
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
}