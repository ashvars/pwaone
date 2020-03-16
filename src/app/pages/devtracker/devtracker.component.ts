import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devtracker',
  templateUrl: './devtracker.component.html',
  styleUrls: ['./devtracker.component.scss']
})
export class DevtrackerComponent implements OnInit {

  selectedEntity: string = '';
  itemFlag: boolean;

  elements: any = [
    { id: '123', status: 'Not Started', desc: 'Create returns screen', start: '15-Jan-2020', end: '16-Jan-2020', uat: '19-Jan-2020', esc: false },
    { id: '176', status: 'In Progress', desc: 'API development for ANX-2 Save', start: '11-Jan-2020', end: '15-Jan-2020', uat: '17-Jan-2020', esc: false },
    { id: '111', status: 'In Progress', desc: 'API development for ANX-1 Get', start: '03-Jan-2020', end: '11-Jan-2020', uat: '12-Jan-2020', esc: true }
  ];

  headElements = ['REQ ID', 'Status', 'Description','Start Date', 'End Date', 'UAT Date', 'Escalation' ];

  constructor() { }

  ngOnInit() {
  }
}

interface DropdownOption {
  value: any;
  label: string;
}