import { oak } from "../deps.ts";
import { redisClient } from "../redis/index.ts";

const tasks: string[] = []

async function updateRedis(tasks: string[]) {
  const tasksOnRedis = 
    await redisClient.set("todos", JSON.stringify(tasks))
  return tasksOnRedis;
}

updateRedis(tasks);

async function getFromRedis() {
  const tasksOnRedis = await redisClient.get("todos");
  return tasksOnRedis
}

export async function getTodos(ctx: oak.Context) {
  const taks = await getFromRedis();
  ctx.response.body = taks
  return;
}

export function getTodoById(ctx: oak.Context) {
  const params = oak.helpers.getQuery(ctx, { mergeParams: true })
  const id = params.id;
  const todo = tasks.filter((_, index) => (index+1) === Number(id));
  ctx.response.body = todo;
  return;
}

export async function createTodo(ctx: oak.Context) {
  const body = await ctx.request.body().value;
  console.log(body);
  const todo = body.todo;
  tasks.push(todo);
  updateRedis(tasks);
  ctx.response.body = tasks;
  return;
}

export async function deleteTodoById(ctx: oak.Context) {
  const params = oak.helpers.getQuery(ctx, { mergeParams: true })
  const id = params.id;
  const todo = tasks.filter((_, index) => (index+1) === Number(id));
  tasks.splice(Number(id)-1, 1);
  updateRedis(tasks);
  ctx.response.body = todo;
  return;
}

export async function updateTodoById(ctx: oak.Context) {
  const params = oak.helpers.getQuery(ctx, { mergeParams: true })
  const id = params.id;
  const body = await ctx.request.body().value;
  const todo = body.todo;
  tasks.splice(Number(id)-1, 1, todo);
  updateRedis(tasks);
  ctx.response.body = todo;
  return;
}