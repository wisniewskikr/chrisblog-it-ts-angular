import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });  
    
  }

}
