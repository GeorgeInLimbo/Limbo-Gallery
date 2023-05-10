import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User("", "rob@test.com", 5555555555, "", "morning", true);
}
