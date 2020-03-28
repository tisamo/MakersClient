/**
 * Created by tisamo on 2020. 02. 14..
 */
export class ProjectUpdate {
  constructor(projectName: string, newProjectName: string, media: string, description: string,) {
    this.projectName = projectName;
    this.media = media;
    this.newProjectName = newProjectName;
    this.description = description;
  }

  projectName: string;
  newProjectName: string;
  media: string;
  description: string;
}
