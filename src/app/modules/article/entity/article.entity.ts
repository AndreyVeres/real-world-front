import { Entity } from '@app/modules/shared/entity';
import { UniqueId } from '@app/modules/shared/uuid';
import { ArticleSlug } from '../value-objects/article-slug';
import { ArticleTitle } from '../value-objects/article-title';
import { ArticleDescription } from '../value-objects/article-description';
import { ArticleTagList } from '../value-objects/artiticle-taglist';

//   slug: string;
//   title: string;
//   description: string;
//   body: string;
//   tagList: string[];
//   createdAt: string;
//   updatedAt: string;
//   favorited: boolean;
//   favoritesCount: number;
//   author: {
//     username: string;
//     bio: string;
//     image: string;
//     following: boolean;
//   };

export class Article extends Entity {
  override equalsTo(objectToCompare: this): boolean {
    return true;
  }

  // id: UniqueId;
  // body: NoteBody;
  // color: NoteColor;
  // todos: LimitedList<TodoItem>;

  constructor(
    public id: UniqueId,
    public slug: ArticleSlug,
    public title: ArticleTitle,
    public description: ArticleDescription,
    public tagList: ArticleTagList
  ) {
    super();
  }

  // constructor(
  //   id: UniqueId,
  //   body: NoteBody,
  //   color: NoteColor,
  //   todos: LimitedList<TodoItem>
  // ) {
  //   super();
  //   this.id = id;
  //   this.body = body;
  //   this.color = color;
  //   this.todos = todos;
  // }

  // static empty(): Note {
  //   return new Note(
  //     UniqueId.generate(),
  //     new NoteBody('Put your description here...'),
  //     new NoteColor(NoteColor.DEFAULT_COLOR),
  //     LimitedList.empty(Note.MAX_TODOS_NUMBER)
  //   );
  // }

  // isCompleted(): boolean {
  //   return this.todos.value.every((todo) => todo.isCompleted());
  // }

  // isUncompleted(): boolean {
  //   return !this.isCompleted();
  // }

  // addTodo(todo: TodoItem): void {
  //   this.todos = this.todos.add(todo);
  // }

  // updateTodo(todo: TodoItem): void {
  //   this.todos = this.todos.update(todo);
  // }

  // removeTodo(todo: TodoItem): void {
  //   this.todos = this.todos.remove(todo);
  // }

  // equalsTo(objectToCompare: this): boolean {
  //   return this.id.equalsTo(objectToCompare.id);
  // }
}
