import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'Le Loreopularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et,.',
      loveIts: 1,
      createdAt: Date.now()
    },
    {
      title: 'Post 2',
      content: 'Le Loreopularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et,.',
      loveIts: -1,
      createdAt: Date.now()
    },
    {
      title: 'Post 3',
      content: 'Le Loreopularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et,.',
      loveIts: 5,
      createdAt: Date.now()
    }
  ];
}
