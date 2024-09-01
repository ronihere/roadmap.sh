import { writeFile } from "fs/promises";
import { TTodoObject } from "../../types";
import showAllTodos from "./showTodos";
type TTodoType = "in_progress" | "done";

export default async function markTask(id: string, taskStatus: TTodoType) {
    try {
        const allTodos = await showAllTodos();
        await writeFile('todo.json',markTodo(id, allTodos, taskStatus) as string);
        return true
    } catch (error) {
        console.log('error occured while updating the Todo status. ', error);
        throw error
    }
}

function markTodo(
  id: string,
  allTodos: TTodoObject,
  taskToBeStatus: TTodoType
) {
    try {
        let type: "general" | "in_progress" = "general"; //only general and inprogress todos can be edited
        let tobeEditedTodoId = Object.keys(allTodos.general).find(
          (todo: string) => allTodos.general[todo].id === id
        );
        if (!tobeEditedTodoId) {
          type = "in_progress";
          tobeEditedTodoId = Object.keys(allTodos.in_progress).find(
            (todo: string) => allTodos.general[todo].id === id
          );
        }
      
        if (!tobeEditedTodoId) {
          console.log("Invalid Id");
          return;
        }
        const tobeAddedTodo = { ...allTodos[type][tobeEditedTodoId] };
        if (taskToBeStatus === "done") {
          if (tobeAddedTodo.isCompleted) return;
          tobeAddedTodo.completedAt = new Date().getTime();
          tobeAddedTodo.isCompleted = true;
          tobeAddedTodo.isInProgress = false;
      
          allTodos.done[tobeEditedTodoId as string] = { ...tobeAddedTodo };
          delete allTodos[type][tobeEditedTodoId];
        } else if (taskToBeStatus === "in_progress") {
          if (tobeAddedTodo.isInProgress) return;
          tobeAddedTodo.isInProgress = true;
      
          allTodos.in_progress[tobeEditedTodoId as string] = { ...tobeAddedTodo };
          delete allTodos[type][tobeEditedTodoId];
        }
        console.log(allTodos);
        return JSON.stringify(allTodos);
    } catch (error) {
        console.log('error occured in markTodo method.', error);
        throw error;
    }
 
}
