/**
 * Created by tisamo on 2020. 01. 30..
 */
export class Profile {
  constructor(firstName: string, lastName: string, userName: string, settings: string, profiency: string, city: string, description: string, role: string[], header: string, image: string, facebook: string,
              twitter: string, deviantart: string, soundcloud: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.settings = settings;
    this.profiency = profiency;
    this.city = city;
    this.description = description;
    this.role = [];
    this.header = header;
    this.image = 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';
    this.facebook = facebook;
    this.twitter = twitter;
    this.deviantart = deviantart;
    this.soundcloud = soundcloud;
  }

  id: string;
  profiency: string;
  firstName: string;
  lastName: string;
  userName: string;
  settings: string;
  header: string;
  city: string;
  image: string;
  description: string;
  role: string[];
  facebook: string;
  twitter: string;
  deviantart: string;
  soundcloud: string;
}
