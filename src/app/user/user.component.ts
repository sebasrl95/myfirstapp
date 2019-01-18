import { Component } from '@angular/core';
import { Post } from '../Post';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = "Jhon Carter";
  age: number = 28;
  
  users: string[] = ['ryan', 'joe', 'cameron'];
  posts: Post[];
  
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
        this.posts = data;
    });
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = "";
    newUser.focus();
    return false;
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}
