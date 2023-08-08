import BrainfuckInterpreter from "./BrainfuckInterpreter";
import ByteBuffer from "./buffer/ByteBuffer";
import ArrayInput from "./input/ArrayInput";
import Terminal from "./output/Terminal";



const bf = new BrainfuckInterpreter(new ByteBuffer());
const t = new Terminal();

const helloWorld = ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]\n" +
    ">++++++++[<++++>-] <.>+++++++++++[<++++++++>-]<-.--------.+++\n" +
    ".------.--------.[-]>++++++++[<++++>- ]<+.[-]++++++++++.";

bf.interpret(
    helloWorld,
    new ArrayInput([]),
    t
);

t.print();