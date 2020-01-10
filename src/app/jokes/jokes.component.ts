import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  joke = '';
  categories: string[] = [];

  constructor(
    private chuckService: ChuckService
  ) { }

  ngOnInit() {
    this.getNewJoke();
  }

  getNewJoke() {
    this.chuckService.getJoke().subscribe(data => {
      if (data) {
        this.joke = data.value.joke;
        this.categories = data.value.categories;
      }
    })
  }

}
