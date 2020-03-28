import {UpdateArticle} from './updateArticle';
/**
 * Created by tisamo on 2020. 02. 05..
 */
export class ReqWithArray {
  constructor(name: string, data: UpdateArticle[]) {
    this.name = name;
    this.data = data;
  }
  name: string;
  data: UpdateArticle[];
}
