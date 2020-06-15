import { Component, ViewEncapsulation, Input } from '@angular/core';
import { GitOperationsService } from './git-operations.service';

@Component({
  selector: 'app-momentum-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GitOperationsService ],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  name;
  
  constructor(private service: GitOperationsService){
    this.service.getRepos().subscribe((res) => {
      this.name = res.owner.login;
    });
  }
}
