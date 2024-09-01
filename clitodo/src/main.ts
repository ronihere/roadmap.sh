import { TTodoType } from "../types";
import createTodo from "./utils/createTodo";
import infoFunction from "./utils/infoInstruction";
import markTask from "./utils/markTask";
import showAllTodos from "./utils/showTodos";

const args = process.argv;
const instruction = args[2];
performAction(instruction);

async function performAction(instruction: string) {
  switch (instruction) {
    case "add":
      createTodo(args[3]);
      break;
    case "ls":
      console.log(await showAllTodos(args[3] as TTodoType));
      break;
    case "done":
      markTask(args[3] as string, instruction);
      break;
    case "in_progress":
      markTask(args[3], "in_progress");
      break;
    case "help":
      infoFunction();
      break;
    default:
      infoFunction();
  }
}