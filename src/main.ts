import BrainfuckInterpreter from "./BrainfuckInterpreter";
import ByteBuffer from "./buffer/ByteBuffer";
import ArrayInput from "./input/ArrayInput";
import TerminalPush from "./output/TerminalPush";



const bf = new BrainfuckInterpreter(new ByteBuffer());

const helloWorld = ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-]<.>+++++++++++[<++++++++>-]<-.--------.+++.------.--------.[-]>++++++++[<++++>-]<+.[-]++++++++++.";



bf.interpret(
    helloWorld,
    new ArrayInput([]),
    new TerminalPush()
);