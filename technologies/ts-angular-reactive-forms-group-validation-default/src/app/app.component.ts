import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  message = '';

  nameForm = new FormGroup({
    name: new FormControl('')
  });

  sendName() {
    this.message = "Hello World " + this.nameForm.controls['name'].value;
    this.nameForm.controls['name'].reset();
  }

}
