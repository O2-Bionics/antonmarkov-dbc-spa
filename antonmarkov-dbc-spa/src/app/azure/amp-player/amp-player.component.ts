import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter, DoCheck, AfterViewInit } from '@angular/core';
import { Amp } from 'src/app/_models/amp';
import { Course } from 'src/app/_models/course';
import { Url } from 'url';


// module.exports = {
//   externals: {
//     jquery: 'azuremediaplayer'
//   }
// };

@Component({
  selector: 'app-amp-player',
  templateUrl: './amp-player.component.html',
  styleUrls: ['./amp-player.component.css']
})
export class AmpPlayerComponent implements OnInit {

  // @ViewChild('video', { static: true }) videoPlayer!: ElementRef;
  // @Input() id;
  // @Input() src;
  // @Input() autoplay;
  @Input() width = 640;
  @Input() height = 320;
  // public version = '2.2';
  @Input() course: Course;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    // console.log(this.course.urlvideo);
    const myPlayer = amp('azuremediaplayer');
    myPlayer.autoplay(false);
    myPlayer.controls(true);
    myPlayer.width(this.width);
    myPlayer.height(this.height);
    myPlayer.src({
        type: 'application/vnd.ms-sstr+xml',
        src: this.course.video_url
    });
  }
}
