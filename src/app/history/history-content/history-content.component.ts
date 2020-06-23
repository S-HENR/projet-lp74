import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-content',
  templateUrl: './history-content.component.html',
  styleUrls: ['./history-content.component.css']
})
export class HistoryContentComponent implements OnInit {

  id:number;
  story: any;
  play: any;
  pause:any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  startAudio(url: string) {
    this.story = new Audio(url);
    this.story.play();
    this.play = document.getElementById("play");
    this.pause = document.getElementById("pause");
    this.play.style.display = "none";
    this.pause.style.display = "block";
  }

  stopAudio() {
    this.story.pause();
    this.play = document.getElementById("play");
    this.pause = document.getElementById("pause");
    this.play.style.display = "block";
    this.pause.style.display = "none";
  }
  
}
