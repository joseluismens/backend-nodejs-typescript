import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable()
export class MemberService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/members-large.json')
            .toPromise()
            .then(res => <Member[]>res.data)
            .then(data => { return data; });
    }
}