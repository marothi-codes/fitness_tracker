import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavListComponent } from './sidebar-nav-list.component';

describe('SidebarNavListComponent', () => {
  let component: SidebarNavListComponent;
  let fixture: ComponentFixture<SidebarNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
