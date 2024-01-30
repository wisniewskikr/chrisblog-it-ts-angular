import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', Validators.required)
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
