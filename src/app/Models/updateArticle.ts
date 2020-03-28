/**
 * Created by tisamo on 2020. 02. 05..
 */
export class UpdateArticle {
  constructor(id: number, date: string, title: string, description: string, media: string, youtube: string, motto: string) {
    this.id = id;
    this.date = date;
    this.youtube = youtube;
    this.motto = motto;
    this.title = title;
    this.description = description;
    this.media = media;
  }

  id: number;
  date: string;
  youtube: string;
  motto: string;
  title: string;
  description: string;
  media: string;
}
