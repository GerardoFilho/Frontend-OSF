import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-template',
  templateUrl: './movie-list-template.component.html',
  styleUrls: ['./movie-list-template.component.scss']
})
export class MovieListTemplateComponent implements OnInit {

  @Input() title: string = '';
  @Input() movieList: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}