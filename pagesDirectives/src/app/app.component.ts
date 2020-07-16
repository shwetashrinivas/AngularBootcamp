import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;
  images= [
    {
      title: 'At the Beach',
      url:'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'   
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1534426402029-6ca434a63b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1462121594302-c1ed6b9ab32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

checkPageIndex( index: number){
  return Math.abs(this.currentPage - index) < 5;
}

}
