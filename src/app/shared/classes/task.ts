import { Tag } from "./Tag";

export class Task {
  name: string;
  tags: Tag[];
  dueTime: Date;
  startTime: Date;
  constructor(name: string, tags: Tag[], dueTime: Date, startTime: Date) {
    this.name = name;
    this.tags = tags;
    this.dueTime = dueTime;
    this.startTime = startTime;
  }
}
