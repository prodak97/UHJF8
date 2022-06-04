import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  @Input() item='';
  constructor() { }

  ngOnInit(): void {
  }

}
