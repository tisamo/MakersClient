/**
 * Created by tisamo on 2020. 02. 08..
 */
export class FormArray {
  constructor(name: string, formControlName: string) {
    this.name = name;
    this.formControlName = formControlName;
  }
  name: string;
  formControlName: string;
}
