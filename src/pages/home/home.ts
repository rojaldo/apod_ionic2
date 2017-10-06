import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private title: string;
  private explanation: string;
  private imageURL: string;

  constructor(private request: RequestProvider, public navCtrl: NavController) {
    this.request.http.get('https://api.nasa.gov/planetary/apod?api_key='+request.apiKey).subscribe(
      (data) => {
        this.processData(data.json());
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }

  processData(input: any) {
    this.title = input.title;
    this.explanation = input.explanation;
    this.imageURL = input.url;
  }

}
