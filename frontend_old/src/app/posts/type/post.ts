export class Post {
  id: number;
  title: string;
  body: string;
  content?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
