import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-alert',
  templateUrl: './process-alert.component.html',
  styleUrls: ['./process-alert.component.scss']
})
export class ProcessAlertComponent implements OnInit{

  @Input('id-modal') idModal!: string;

  ngOnInit() {}

}
