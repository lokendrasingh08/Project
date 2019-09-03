import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
    $('.sidebar-menu-container').on('click', function (x) {
      x.classList.toggle('change');
    });
  }

}
