import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  eleveNom = "";
  sexe = "";
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

    this.classeId = Number(this.route.snapshot.params['id']);
    console.log(this.classeId);
    this.elevesfiltre = this.chargerEleves();
  }


  addEleve() {
    const lastIndex = this.eleves.length - 1;
    const id = this.eleves[lastIndex].id + 1;
    this.eleves.push({ id, nom: this.eleveNom, sexe: this.sexe, idClasse: this.classeId });
    this.eleveNom = "";
    this.sexe = "";
    // console.log(this.eleves);
    this.elevesfiltre= this.chargerEleves();
  }

  chargerEleves(){
    return this.eleves.filter((eleve) => this.classeId === eleve.idClasse);
    
  }


}
