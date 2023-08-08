import Push from "./Push";



export default class TerminalPush implements Push {
    push(byte: number): void {
        console.log(String.fromCharCode(byte));
    }
}