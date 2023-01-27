import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers : [ApiService]
})
export class HomePage {
  users:any;
  constructor(private Apiservice:ApiService) {

  }

  ngOnInit(){
    this.users = this.Apiservice.get('users');
  }
}
