/**
 * Created by tisamo on 2020. 01. 24..
 */
export class Settings {
  constructor(cover: string, color: string, buttonTextColor: string) {
    this.cover = cover;
    this.color = color;
    this.buttonTextColor = buttonTextColor;
  }
  cover: string;
  color: string;
  buttonTextColor: string;
}
