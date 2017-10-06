import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private title: string;
  private explanation: string;
  private imageURL: string;
  private myDate: Date;

  constructor(private request: RequestProvider, public navCtrl: NavController) {
    this.myDate = new Date();
  }

  doRequest(){
    console.log(this.myDate.toString());
    this.request.http.get('https://api.nasa.gov/planetary/apod?date='+this.myDate+'&api_key='+this.request.apiKey).subscribe(
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
