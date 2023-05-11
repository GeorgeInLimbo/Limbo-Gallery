import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User("I am George Clam.", "findme@this.email", 3039407457, "default", "morning", true);

  topicHasError = true;

  validateTopic(value: string) {
    value === 'default'
      ? this.topicHasError = true
      : this.topicHasError = false;
  }
}
