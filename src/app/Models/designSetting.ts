import {Settings} from './settings';
/**
 * Created by tisamo on 2020. 02. 24..
 */
export class DesignSetting {
  constructor(projectName: string, settings: Settings) {
    this.projectName = projectName;
    this.settings = settings;
  }
  projectName: string;
  settings: Settings;
}
