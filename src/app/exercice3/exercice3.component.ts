import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  p1: string;
  p2: string;

  status: boolean;

  constructor() {
    this.p1 = "P1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna.";
    this.p2 = "P2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et eros vulputate, sollicitudin tortor vel, suscipit nunc. Pellentesque condimentum turpis sit amet sem pretium, quis commodo elit dignissim. Vivamus at.";
  }

  ngOnInit(): void {
    this.status = true;

  }

  changeStatut(): void {
    this.status = ! this.status;

  }

}
