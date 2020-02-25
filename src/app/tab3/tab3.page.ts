import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  APropos: any;
  public donneees: any = [];
  public donneeees: any = [];
  link_postere = "http://app.joinpuzzle.com/public/uploads/images/postere/";
  link_sponsor = "http://app.joinpuzzle.com/public/uploads/images/sponsor/";
  api_Propos = "http://app.joinpuzzle.com/public/api/apropos.json";
  api_Sponsor = "http://app.joinpuzzle.com/public/api/sponsors.json";
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 5,
    centeredSlides: true
  };
  private cartItem: any;

  constructor(public http: HttpClient) {
    console.log("Ici la connexion à l'api tous passe nickel");
    this.getPropos();
    this.getSponsor();
  }

  // Fetch tous les Données issues de l'entité A Propos
  getPropos() {
    return new Promise(resolve => {
      this.http.get(this.api_Propos).subscribe(
        data => {
          resolve(data);
          this.donneees = data;
          console.log(this.donneees);
        },
        err => {
          console.log(err);
        }
      );
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
    }, 3000);
    
  }
  // Fetch tous les Données issues de l'entité Sponsor et Partenaires

  getSponsor() {
    return new Promise(resolve => {
      this.http.get(this.api_Sponsor).subscribe(
        data => {
          resolve(data);
          this.donneeees = data;
          console.log(this.donneeees);
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  refreshSponsor(event) {
    setTimeout(() => {
      this.getSponsor()
        .then(() => {
          event.target.complete();
        })
        .catch(() => {
          event.target.complete();
        });
    }, 3000);

  }
}
