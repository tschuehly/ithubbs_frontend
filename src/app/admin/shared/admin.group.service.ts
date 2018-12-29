import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Group} from '../../shared/group';
import {Observable} from 'rxjs';

@Injectable()
export class AdminGroupService {


  constructor(private http: HttpClient) {
  }

  getAllGroups() {
    return this.http.get<Group[]>(environment.adminGroupsUrl);
  }

  createNewGroup(newGroup: Group): Observable<Group> {
    return this.http.post<Group>(environment.adminGroupsUrl, newGroup);
  }
}
