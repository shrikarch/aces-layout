import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  persons = [];
  collectionArray = []
  constructor() { }

  ngOnInit() {
    this.collectionArray = [
      [
        {
          "index": 1,
          "name": {
            "first": "Fitzgerald",
            "last": "Buck"
          },
          "about": "Esse et enim deserunt adipisicing. Proident cupidatat dolore",
          "position": "et anim"
        },
        {
          "index": 2,
          "name": {
            "first": "Delgado",
            "last": "Olson"
          },
          "about": "Proident cupidatat dolore sunt pariatur ullamco fugiat.",
          "position": "magna officia"
        }
      ],
      [
        {
          "index": 1,
          "name": {
            "first": "Knight",
            "last": "Bowen"
          },
          "about": "Adipisicing mollit in nisi officia.",
          "position": "enim excepteur"
        },
        {
          "index": 2,
          "name": {
            "first": "Paulette",
            "last": "Bentley"
          },
          "about": "Ullamco Lorem commodo id ex irure amet amet nulla.",
          "position": "cillum consequat"
        },
        {
          "index": 3,
          "name": {
            "first": "Dana",
            "last": "Vaughn"
          },
          "about": "Aliquip cillum consectetur minim ea ipsum veniam occaecat culpa excepteur amet excepteur magna voluptate.",
          "position": "labore quis"
        }
      ],
      [
        {
          "index": 1,
          "name": {
            "first": "Hurley",
            "last": "Myers"
          },
          "about": "Culpa non esse est minim deserunt incididunt amet qui adipisicing.",
          "position": "aliquip adipisicing"
        },
        {
          "index": 2,
          "name": {
            "first": "Shirley",
            "last": "Kelly"
          },
          "about": "Ad tempor est culpa ea officia mollit laboris labore esse cupidatat.",
          "position": "ex magna"
        },
        {
          "index": 3,
          "name": {
            "first": "Hoffman",
            "last": "Short"
          },
          "about": "Lorem et ut dolore minim amet mollit qui commodo minim.",
          "position": "in et"
        },
        {
          "index": 4,
          "name": {
            "first": "Luna",
            "last": "Boone"
          },
          "about": "Eiusmod ut dolore excepteur ea Lorem irure sint eu quis in cupidatat.",
          "position": "nisi duis"
        },
        {
          "index": 5,
          "name": {
            "first": "Cherie",
            "last": "Patterson"
          },
          "about": "Ad et laboris cillum deserunt magna ipsum veniam culpa laborum ad consequat.",
          "position": "incididunt eiusmod"
        },
        {
          "index": 6,
          "name": {
            "first": "Contreras",
            "last": "Savage"
          },
          "about": "Laborum ad et eu culpa cillum non pariatur eu nisi mollit consectetur qui velit nulla.",
          "position": "sunt voluptate"
        },
        {
          "index": 7,
          "name": {
            "first": "Margaret",
            "last": "Drake"
          },
          "about": "Ea do consectetur cupidatat consequat nisi id exercitation consectetur fugiat adipisicing.",
          "position": "quis amet"
        },
        {
          "index": 8,
          "name": {
            "first": "Tanner",
            "last": "Lynn"
          },
          "about": "Consequat pariatur enim ipsum proident non nulla adipisicing aliqua cillum labore consequat pariatur qui.",
          "position": "veniam magna"
        },
        {
          "index": 9,
          "name": {
            "first": "England",
            "last": "Cole"
          },
          "about": "In Lorem dolore in eiusmod.",
          "position": "ex nostrud"
        }
      ]
    ]
  }

}
