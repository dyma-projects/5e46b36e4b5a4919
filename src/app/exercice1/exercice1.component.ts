import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {


  titre: string = "";
  intro: string = "";
  description: string = "";

  action: string;
  afficher: string;
  display: boolean;

  constructor() {
    this.action = "Plus info";
    this.display = false;
    this.afficher = "none";
  }

  ngOnInit(): void {
    this.titre = "Projet 2";
    this.intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus auctor elit.";
    this.description = "Proin faucibus vitae purus eu pharetra. Donec imperdiet dignissim ligula ac efficitur. Donec elit augue, laoreet suscipit suscipit et, tincidunt id enim. Etiam ac elit in orci varius pulvinar. Integer nec sem quis metus eleifend dignissim. Phasellus vel risus id eros venenatis ultrices at fermentum mi. Quisque laoreet est dictum mi volutpat suscipit. Vivamus sed commodo mi. Nullam in efficitur nisl. Sed varius ex a ante tristique, a facilisis nisi bibendum. Maecenas massa turpis, dignissim eu ex vel, lacinia imperdiet purus.";

  }

  toogleContenu(): void {
    this.display = ! this.display;

    if(this.display) {
      this.action = "Moins info";
      this.afficher = "block";
    } else {
      this.action = "Plus info";
      this.afficher = "none";
    }

  }

}
