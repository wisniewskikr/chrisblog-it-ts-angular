import { Component } from '@angular/core';
import { Message } from '../../models/Message';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CrudService } from '../../services/CrudService';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  message: Message | null = null;

  constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.message = crudService.readById(params['id']);
    }); 

  }

  update(id: string, text: string) {
    this.crudService.update(new Message(Number(id), text));
    this.router.navigate(['']);
  }

}
