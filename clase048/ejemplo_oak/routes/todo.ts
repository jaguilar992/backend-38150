import { createTodo, deleteTodoById, getTodoById, getTodos, updateTodoById } from "../controller/todo.ts";
import { oak } from "../deps.ts"

const todoRouter = new oak.Router({
  prefix: "/todo",
})

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodoById);
todoRouter.delete("/:id", deleteTodoById);


export default todoRouter
;
