import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineBoxComponent } from './domaine-box.component';

describe('DomaineBoxComponent', () => {
  let component: DomaineBoxComponent;
  let fixture: ComponentFixture<DomaineBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomaineBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomaineBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
