import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignement-2-edacy';

  classeNom = "";


  classes = [
    {
      id: 1, nom: "Terminal S2"
    }
  ]



  addClasse() {
    const lastIndex = this.classes.length - 1;
    const id = this.classes[lastIndex].id + 1;
    this.classes.push({ id, nom: this.classeNom });
    this.classeNom = "";
  }
}
