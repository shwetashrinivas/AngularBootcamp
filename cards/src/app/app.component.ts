import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Array of objects
 posts = [
   {
    title: 'Neat Tree', 
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this tree today'
  },
  {
    title: 'Snowy Mountain', 
    imageUrl: 'assets/mountain.jpeg',
    username: 'mountainlover',
    content: 'Here is a picture of snowy mountain'
  },
  {
    title: 'Mountain Biking', 
    imageUrl: 'assets/biking.jpeg',
    username: 'bikinggirl',
    content: 'I did some biking today'
  }
  
 ];

}
