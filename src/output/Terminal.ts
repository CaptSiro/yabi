import Push from "./Push";



export default class Terminal implements Push {
    private buffer: number[];

    constructor() {
        this.buffer = [];
    }

    push(byte: number): void {
        this.buffer.push(byte);
    }

    print(): void {
        console.log(String.fromCharCode(...this.buffer));
        this.buffer = [];
    }
}