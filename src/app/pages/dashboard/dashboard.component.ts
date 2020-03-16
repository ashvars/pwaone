import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedEntity: string = '';

  elements: any = [
    {entities: '35',id: 'Dec 2019', first: '1300', trend: true, last: '4530110', handle: '1530'},
    {entities: '30',id: 'Nov 2019', first: '1088', trend: false, last: '4521000', handle: '1130'},
    {entities: '32',id: 'Oct 2019', first: '1100', trend: true, last: '4170220', handle: '1230'},
    {entities: '32',id: 'Sep 2019', first: '1030', trend: true, last: '4030590', handle: '1220'},
    {entities: '29',id: 'Aug 2019', first: '1010', trend: false, last: '4740110', handle: '1190'},
    {entities: '31',id: 'Jul 2019', first: '1099', trend: false, last: '4444110', handle: '1210'},
    {entities: '30',id: 'Jun 2019', first: '1195', trend: false, last: '4325210', handle: '1110'},
    {entities: '25',id: 'May 2019', first: '1250', trend: false, last: '4345210', handle: '1220'},
    {entities: '32',id: 'Apr 2019', first: '1300', trend: undefined, last: '4511110', handle: '1550'},
  ];

  headElements = ['Period', 'Entities','GSTR-1', 'Invoices', 'Liability (in Cr)'];

  elementsEntity: any = [
    {entities: '105',id: 'Dec 2019', first: '105', trend: true, last: '46000', handle: '120'},
    {entities: '101',id: 'Nov 2019', first: '101', trend: true, last: '41000', handle: '101'},
    {entities: '99',id: 'Oct 2019', first: '99', trend: false, last: '53000', handle: '103'},
    {entities: '100',id: 'Sep 2019', first: '100', trend: true, last: '49000', handle: '98'},
    {entities: '90',id: 'Aug 2019', first: '90', trend: false, last: '55000', handle: '106'},
    {entities: '103',id: 'Jul 2019', first: '103', trend: false, last: '54000', handle: '109'},
    {entities: '110',id: 'Jun 2019', first: '110', trend: true, last: '55000', handle: '100'},
    {entities: '98',id: 'May 2019', first: '98', trend: false, last: '50000', handle: '101'},
    {entities: '102',id: 'Apr 2019', first: '102', trend: undefined, last: '45000', handle: '95'},
  ];

  headElementsEntity = ['Period', 'GSTINs','GSTR-1', 'Invoices', 'Liability (in Cr)'];

  constructor() { }

  ngOnInit() {
  }

  public chartType: string = 'bar';

  chart1Datasets: Array<any> = [ { data: [1300, 1088, 1100, 1030, 1010, 1099, 1195, 1250, 1300], label: 'No. of GSTR-1 Filed' }];
  chart2Datasets: Array<any> = [ { data: [4530110,4521000,4170220,4030590,4740110,4444110,4325210,4345210,4511110], label: 'No. of Invoices Processed & Submitted' }];
  chart3Datasets: Array<any> = [ { data: [1530,1130,1230,1220,1190,1210,1110,1220,1550], label: 'Net Liability Reported (in Crores)' }];

  public chartLabels: Array<any> = ["Dec '19", "Nov '19", "Oct '19", "Sep '19", "Aug '19", "Jul '19", "Jun '19", "May '19", "Apr '19"];

  chart1Colors: Array<any> = [
    { backgroundColor: [ 'rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)',],
      borderColor: [ 'rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)','rgb(55, 149, 65,0.9)',],
      borderWidth: 2 }
  ];
  chart2Colors: Array<any> = [
    { backgroundColor: [ 'rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)',],
      borderColor: [ 'rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)','rgb(240, 76, 62,0.9)',],
      borderWidth: 2 }
  ];
  chart3Colors: Array<any> = [
    { backgroundColor: [ 'rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)',],
      borderColor: [ 'rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)','rgb(145, 39, 143,0.9)',],
      borderWidth: 2 }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}

interface DropdownOption {
  value: any;
  label: string;
}