import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CrudService } from '../../services/CrudService';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  message: Message | null = null;

  constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService) {

    this.activatedRoute.params.subscribe(params => {
      this.message = crudService.readById(params['id']);
    });  
    
  }

}
