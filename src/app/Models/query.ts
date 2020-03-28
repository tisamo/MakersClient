/**
 * Created by tisamo on 2020. 02. 06..
 */
export class Query {
  constructor(creator: string, name: string, category: string) {
    this.creator = creator;
    this.name = name;
    this.category = category;
  }

  creator: string;
  name: string;
  category: string;

}
