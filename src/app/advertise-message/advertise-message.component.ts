import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertise-message',
  templateUrl: './advertise-message.component.html',
  styleUrls: ['./advertise-message.component.scss']
})
export class AdvertiseMessageComponent {

  newDate: Date = new Date();
  newMessage: string = 'Tu jest zadanie na dziś';

  constructor(
    private router: Router
  ) { }

  redirect() {
    this.router.navigate(['somewhere']);
  }

}
