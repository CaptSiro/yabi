import Take from "./Take";



export default class ArrayInput implements Take {
    private pointer: number;

    constructor(private array: number[]) {
        this.pointer = 0;
    }

    take(): number {
        if (this.pointer >= this.array.length - 1) {
            return undefined;
        }

        return this.array[++this.pointer];
    }
}