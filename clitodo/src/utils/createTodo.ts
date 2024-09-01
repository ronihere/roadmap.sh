import { readFile, access, writeFile } from "fs/promises";
import { TTodo, TTodoObject } from "../../types";
import { v4 as uuidv4 } from "uuid";

const createTodo = async (task: string) => {
    if (!task) {
      console.log("filename and task must be provided");
      return null;
    }
  
    const filePath = `todo.json`;
    let fileData: TTodoObject = {
        done: {},
        general:{},
        in_progress:{}
    };
    try {
      await access(filePath);
      let fileContent = await readFile(filePath);
      if (fileContent) {
        fileContent = JSON.parse(fileContent.toString());
        fileData = {...fileData, ...fileContent};
      }
    } catch (error) {
      console.log(
        `error occured while reading file , no file named ${filePath} is present in the current directory`,
        error
      );
    }
  
    const newTodo: TTodo = {
      completedAt: null,
      content: task,
      createdAt: new Date().getTime(),
      id: uuidv4(),
      isCompleted: false,
      isInProgress: false,
    };
    fileData.general[newTodo.id] = newTodo;
    try {
      const file = await writeFile(filePath, JSON.stringify(fileData));

    } catch (error) {
      console.log(
        `error while appending the file in createTodo method. error is : ${error}`
      );
    }
  };

  export default createTodo;