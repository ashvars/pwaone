import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeLink : string;
  @ViewChild('navbar', { static: true }) navbar: NavbarComponent;
  @Input() currentPage: string;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeLink = this.currentPage;
  }

  redirectToPage(index, routePath) {
    this.navbar.hide();
    this.activeLink = index;
    this.router.navigate([routePath], { relativeTo: this.route });
  }

}
