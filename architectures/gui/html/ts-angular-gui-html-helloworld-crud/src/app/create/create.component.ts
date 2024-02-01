import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrudService } from '../../services/CrudService';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private crudService: CrudService) { }

  create(text: string) {
    this.crudService.create(text);
  }

}
