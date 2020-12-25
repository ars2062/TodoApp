import { Task } from "./task";

export class Project {
  name: string;
  tasks: Task[];
  dueTime: Date;
  startTime: Date;
  constructor(name: string, tasks: Task[], dueTime: Date, startTime: Date) {
    this.name = name;
    this.tasks = tasks;
    this.dueTime = dueTime;
    this.startTime = startTime;
  }
}
