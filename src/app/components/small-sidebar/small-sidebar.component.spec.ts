import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSidebarComponent } from './small-sidebar.component';

describe('SmallSidebarComponent', () => {
  let component: SmallSidebarComponent;
  let fixture: ComponentFixture<SmallSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
