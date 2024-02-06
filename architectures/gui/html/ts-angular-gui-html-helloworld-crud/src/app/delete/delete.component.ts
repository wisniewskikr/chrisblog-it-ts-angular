import { Component } from '@angular/core';
import { Message } from '../../models/Message';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CrudService } from '../../services/CrudService';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  message: Message | null = null;

  constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.message = crudService.readById(params['id']);
    }); 

  }

  delete(id: string) {
    this.crudService.delete(Number(id));
    this.router.navigate(['']);
  }

}
