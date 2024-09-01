import { readFile, access } from "fs/promises";
import { TTodoObject, TTodoType } from "../../types";
export default async function showAllTodos(type?: TTodoType): Promise<TTodoObject> {
  try {
    await access("todo.json");
    let fileContent: TTodoObject={
        in_progress:{},
        done:{},
        general:{}
    };
    let content = await readFile("todo.json");
    if (content) {
        fileContent = JSON.parse(content.toString());
    }
    return fileContent;
  } catch (error) {
    console.log("error occured while showing all the Todos. ", error);
    throw error
  }
}
