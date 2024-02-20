import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  message: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/", {responseType: 'text'});
    response.subscribe((data)=>{      
      this.message = data
    });
  }
  
}
