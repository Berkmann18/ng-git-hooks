import { Component } from '@angular/core';

const someCOde = ["hello", "world", "!", "lorem", 'ipsum', 'dolore sit',];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-git-hooks';
}
