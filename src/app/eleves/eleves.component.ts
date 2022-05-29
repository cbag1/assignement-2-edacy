import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  classeId: number = 0;
  eleves = [
    { id: 1, nom: "Cheikh Babacar GOUDIABY", sexe: "M", idClasse: 1 },
    { id: 2, nom: "Cheikh GOUDIABY", sexe: "M", idClasse: 1 },
    { id: 3, nom: "Kara GOUDIABY", sexe: "M", idClasse: 2 }

    
  ];

  elevesfiltre = this.eleves;

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.classeId = this.route.snapshot.params['id'];
    console.log(this.classeId);
    this.elevesfiltre = this.eleves.filter((eleve)=>this.classeId == eleve.idClasse);

  }

  

}
