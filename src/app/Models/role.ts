import {Requirement} from './requirement';
/**
 * Created by tisamo on 2020. 02. 23..
 */
export class Role {
  constructor(projectName: string, id: number, role: string, people: string[], theChoosenOne: string, roleImage: string, requirements: Requirement[], description: string) {
    this.projectName = projectName;
    this.id = id;
    this.role = role;
    this.roleImage = roleImage;
    this.people = people;
    this.theChoosenOne = theChoosenOne;
    this.requirements = requirements;
    this.description = description;

  }

  projectName: string;
  id: number;
  role: string;
  description: string;
  roleImage: string;
  people: string[];
  theChoosenOne: string;
  requirements: Requirement[];
}
