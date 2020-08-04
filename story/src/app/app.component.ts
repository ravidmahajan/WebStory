
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: '';
  username: '';
  description: ''
  submitted = false;
  data: any;
  postData: any;
  showData: boolean = false;

  constructor(private http: HttpClient, public appService: AppService) {

  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    this.title = form.value.title;
    this.username = form.value.username;
    this.description = form.value.description;
    const obj ={ 
      "id": uuidv4(),
      "title" :this.title,
      "username": this.username,
      "description": this.description
    };

    this.appService.createNews(obj).subscribe((data)=> {
      this.postData = data;
      console.log("postdata=>", this.postData);
    })    
    form.reset();                                       
  }

  viewStory() {
    this.showData = false;
    this.appService.getNews().subscribe((data) => {
      this.data = data;
      console.log("data",this.data);
      this.showData = true
    });
  }
}
