import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Message } from '../../models/Message';
import { CrudService } from '../../services/CrudService';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {  

  messages: Message[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.messages = this.crudService.readAll();
  }  

}
