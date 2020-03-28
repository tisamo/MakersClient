import {Settings} from './settings';
/**
 * Created by tisamo on 2020. 01. 23..
 */
export class User {
  constructor(name: string, lastName: string, userName: string, email: string, password: string, password2: string) {
    this.firstName = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.password2 = password2;
    this.settings = JSON.stringify(new Settings('', '', ''));
    this.city = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.role = [];
    this.profiency = 'unemployed';
    this.header = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.description = '';
    this.image = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.facebook = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.twitter = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.deviantart = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.soundcloud = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
  }
  profiency: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  facebook: string;
  twitter: string;
  deviantart: string;
  soundcloud: string;
  password2: string;
  header: string;
  settings: string;
  city: string;
  role: string[];
  description: string;
  image: string;
}
