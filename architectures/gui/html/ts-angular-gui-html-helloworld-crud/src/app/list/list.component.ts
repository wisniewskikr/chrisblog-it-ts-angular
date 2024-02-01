import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Message } from '../../models/Message';
import { CrudService } from '../../services/CrudService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {  

  messages: Message[] = [];
  selectedMessageId: number | null = null;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.messages = this.crudService.readAll();
  } 

}
