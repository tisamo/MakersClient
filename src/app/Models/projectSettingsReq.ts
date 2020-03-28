import {ProjectSettings} from './projectsettings';
/**
 * Created by tisamo on 2020. 02. 08..
 */
export class ProjectReq {
  constructor(name: string, settings: ProjectSettings) {
    this.name = name;
    this.settings = settings;
  }
  name: string;
  settings: ProjectSettings;
}
