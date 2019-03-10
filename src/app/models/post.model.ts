export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: string;
  constructor(title: string, content: string, loveIts: number, createdAt: string) {
    this.content = content;
    this.title = title;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }
}
