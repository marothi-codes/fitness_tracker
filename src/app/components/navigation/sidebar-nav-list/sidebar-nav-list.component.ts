import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-list',
  templateUrl: './sidebar-nav-list.component.html',
  styleUrl: './sidebar-nav-list.component.css'
})
export class SidebarNavListComponent implements OnInit {

  @Output()
  closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSidenav() {
    this.closeSidenav.emit();
  }

}
