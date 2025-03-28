import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargSidebarComponent } from './larg-sidebar.component';

describe('LargSidebarComponent', () => {
  let component: LargSidebarComponent;
  let fixture: ComponentFixture<LargSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
