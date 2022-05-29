import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classeNom = "";


  classes = [
    {
      id: 1, nom: "Terminal S2"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  addClasse() {
    const lastIndex = this.classes.length - 1;
    const id = this.classes[lastIndex].id + 1;
    this.classes.push({ id, nom: this.classeNom });
    this.classeNom = "";
  }

  deleteClasse(classeId: number) {
    const classeIndex = this.classes.findIndex((classe) => classe.id === classeId);
    this.classes.splice(classeIndex, 1);
  }
}
