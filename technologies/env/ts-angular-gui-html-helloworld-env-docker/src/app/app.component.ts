import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  message: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/config.json').subscribe((config: any) => {
      this.message = config.message;
    });
  }

}
