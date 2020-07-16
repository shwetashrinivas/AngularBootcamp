import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
//Property to store the url of the fetched image
photoUrl: string;

  //Using DI to get access to the service in the component
  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
   }

  ngOnInit(): void {
  } 

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) =>{     //calling the method alone won't work until we subscribe to the observable.
    // console.log(response.urls.regular);  //Uses UnsplashResponse interface 
    this.photoUrl = response.urls.regular;
   });
  }
}
