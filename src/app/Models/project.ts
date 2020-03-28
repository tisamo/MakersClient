import {Roles} from './Roles';
import {Role} from './role';
import {SettingsComponent} from '../components/settings/settings.component';
import {Settings} from './settings';
import {UpdateArticle} from './updateArticle';
/**
 * Created by tisamo on 2020. 02. 05..
 */
export class Project {
  userName: string;
  projectName: string;
  description: string;
  category: string;
  role: string;
  color: string;
  media: string;
  lookingFor: Role[];
  participants: string;
  updates: UpdateArticle[];
  demos: string;
  projectSettings: Settings;

  constructor(userName: string, projectName: string, category: string, description: string, media: string, updates: UpdateArticle[]) {
    this.userName = userName;
    this.projectName = projectName;
    this.description = description;
    this.category = category;
    this.color = 'rebeccapurple';
    this.media = media;
    this.lookingFor = [{
      projectName: this.projectName,
      id: 0,
      role: '',
      people: [],
      theChoosenOne: '',
      roleImage: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
      requirements: [],
      description: ''
    },
      {
        projectName: this.projectName,
        id: 1,
        role: '',
        people: [],
        theChoosenOne: '',
        roleImage: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
        requirements: [],
        description: ''
      },
      {
        projectName: this.projectName,
        id: 2,
        role: '',
        people: [],
        theChoosenOne: '',
        roleImage: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
        requirements: [],
        description: ''
      },
      {
        projectName: this.projectName,
        id: 3,
        role: '',
        people: [],
        theChoosenOne: '',
        roleImage: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
        requirements: [],
        description: ''
      }];
    this.participants = '';
    this.updates = updates;
    this.demos = '';
    this.projectSettings = new Settings('', 'rebeccapurple', 'white');
  }

}
