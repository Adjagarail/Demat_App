import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  programme: any;
  public donnee: any = [];
  shownSessions: any = [];
  api_Programme = "http://app.joinpuzzle.com/public/api/programmes.json";
  constructor(public http: HttpClient) {
    console.log('Ici la connexion à l\'api tous passe nickel');
    this.getProgramme()
  }

  // Fetch tous les Données issues de l'entité Programme
  getProgramme() {
    return new Promise(resolve => {
      this.http.get(this.api_Programme).subscribe(data => {
        resolve(data);
        this.donnee = data
        console.log(this.donnee);
      }, err => {
        console.log(err);
      });
    });
  }

  // Pour la Actualisation et la reactualisation des Données
  doRefresh(event) {
    setTimeout(() => {
      this.getProgramme()
        .then(() => {
          event.target.complete();
        })
        .catch(() => {
          event.target.complete();
        });
    }, 3000)
  }
}
