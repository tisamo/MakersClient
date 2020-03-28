import {Role} from './role';
/**
 * Created by tisamo on 2020. 02. 16..
 */
export class Roles {
  constructor(userName: string, projectName: string, roleOne: Role, roleTwo: Role, roleThree: Role, roleFour: Role) {
    this.userName = userName;
    this.projectName = projectName;
    this.roleOne = roleOne;
    this.roleTwo = roleTwo;
    this.roleThree = roleThree;
    this.roleFour = roleFour;
  }

  userName: string;
  projectName: string;
  roleOne: Role;
  roleTwo: Role;
  roleThree: Role;
  roleFour: Role;
}
