import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }

}
