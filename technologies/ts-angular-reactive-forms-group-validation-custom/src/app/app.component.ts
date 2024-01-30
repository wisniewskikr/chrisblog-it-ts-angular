import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { customRequired } from './customRequired';

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
    name: new FormControl('', customRequired)
  });

  sendName() {
    const name = this.nameForm.controls['name'].value;

    if (name == null || name == '') {
      this.message = '';
      this.nameForm.controls['name'].markAsDirty();
      return;
    }

    this.message = "Hello World " + name;
    this.nameForm.controls['name'].reset();
  }

}
