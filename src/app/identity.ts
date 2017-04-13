import { OnChanges, SimpleChange } from "@angular/core";
export class Identity {
    constructor(public ciIp = '',public ciDomain = '', public scm = false, public ci = false,public repo = false,public ops = false,public server = false, public quality = false,public organization = false,public communication = false) { }
}
