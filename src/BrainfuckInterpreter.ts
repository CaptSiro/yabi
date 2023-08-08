import Buffer from "./buffer/Buffer";
import Take from "./input/Take";
import Push from "./output/Push";



type Instruction = "+" | "-" | "<" | ">" | "[" | "]" | "," | ".";




export default class BrainfuckInterpreter {
    private ip: number;
    private instructions: string;

    constructor(private readonly buffer: Buffer) {
        this.ip = 0;
    }

    interpret(instructions: string, input: Take, output: Push) {
        this.buffer.reset();
        this.ip = 0;
        this.instructions = instructions;

        const loopStack: number[] = [];

        do {
            const instruction = this.nextInstruction();
            switch (instruction) {
                case "+": {
                    this.buffer.increment();
                    break;
                }
                case "-": {
                    this.buffer.decrement();
                    break;
                }
                case "<": {
                    this.buffer.previous();
                    break;
                }
                case ">": {
                    this.buffer.next();
                    break;
                }
                case ",": {
                    const x = input.take();

                    if (x === undefined) {
                        console.error("Could not get input value.");
                        return;
                    }

                    this.buffer.set(x);
                    break;
                }
                case ".": {
                    output.push(this.buffer.value());
                    break;
                }
                case "[": {
                    loopStack.push(this.ip);
                    break;
                }
                case "]": {
                    const x = loopStack[loopStack.length - 1];

                    if (x === undefined) {
                        console.error("Syntax error: Unexpected loop enclosing character ']'");
                        return;
                    }

                    if (this.buffer.value() === 0) {
                        loopStack.pop();
                        break;
                    }

                    this.ip = x;
                    break;
                }
            }
        } while(true);
    }

    private nextInstruction(): Instruction | undefined {
        do {
            this.ip++;
            const char = this.instructions[this.ip];

            if (char === undefined) {
                return undefined;
            }

            if (this.isInstruction(char)) {
                return char as Instruction;
            }
        } while(true);
    }

    private isInstruction(instruction: string): boolean {
        return instruction === "-"
            || instruction === "+"
            || instruction === "<"
            || instruction === ">"
            || instruction === "["
            || instruction === "]"
            || instruction === ","
            || instruction === ".";
    }
}