import { IAPI } from "./types";
import { Todo } from "../models/todo";
import axios from "../utils/axios";
import { AxiosResponse } from "axios";

class ApiFullstack extends IAPI {
  async createTodo(content: string): Promise<Todo> {
    const resp = await axios.post<AxiosResponse<Todo>>(`/tasks`, {
      content,
    });

    return resp.data.data;
  }

  async getTodos(): Promise<Array<Todo>> {
    const resp = await axios.get<AxiosResponse<Array<Todo>>>(`/tasks`);

    return resp.data.data;
  }

  async deleteTodo(todoId: string): Promise<string> {
    return todoId;
  }

  async deleteAllTodos(): Promise<void> {}

  async updateTodo(todo: Todo): Promise<Todo> {
    return todo;
  }

  async toggleAllStatus(checked: boolean): Promise<void> {
    console.log(checked);
    return;
  }
}

export default new ApiFullstack();
