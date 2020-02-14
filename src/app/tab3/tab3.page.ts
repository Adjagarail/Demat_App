import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  APropos: any;
  public donneees:any = [];
  link_postere = "http://app.joinpuzzle.com/public/uploads/images/postere/";
  api_Propos = "http://app.joinpuzzle.com/public/api/apropos.json";

  constructor(public http: HttpClient) {
    console.log('Ici la connexion à l\'api tous passe nickel');
    this.getPropos()
  }

  // Fetch tous les Données issues de l'entité A Propos
  getPropos() {
    return new Promise(resolve => {
      this.http.get(this.api_Propos).subscribe(data => {
        resolve(data);
        this.donneees = data
        console.log(this.donneees);
      }, err => {
        console.log(err);
      });
    });
  }
  // Pour la Actualisation et la reactualisation des Données
  doRefresh(event) {
    setTimeout(() => {
      this.getPropos()
        .then(() => {
          event.target.complete();
        })
        .catch(() => {
          event.target.complete();
        });
    }, 3000)

  }
}
