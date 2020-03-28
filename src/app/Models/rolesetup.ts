import {Role} from './role';
/**
 * Created by tisamo on 2020. 03. 11..
 */
export class RoleSetup {
  userName: string;
  roles: Role[];
  constructor(userName: string, roles: Role[]) {
    this.userName = userName;
    this.roles = roles;
  }
}
