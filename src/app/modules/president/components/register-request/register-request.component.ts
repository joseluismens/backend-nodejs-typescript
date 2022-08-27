import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MemberService } from './memberservice';

@Component({
  selector: 'app-register-request',
  templateUrl: './register-request.component.html',
  styleUrls: ['./register-request.component.css']
})
export class RegisterRequestComponent implements OnInit {

  members: any =[];
  loading: boolean = false;

  constructor(private memberService: MemberService, private config: PrimeNGConfig) { }

  ngOnInit() {

    this.memberService.getCustomersLarge().then((members) => {
      this.members = members;
      console.log(this.members);

      this.loading = false;

      this.members.forEach(
        (members: any) => (members.date = new Date(members.date))
      );
    });
  }

}
