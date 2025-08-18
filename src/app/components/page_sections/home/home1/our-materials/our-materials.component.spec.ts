import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMaterialsComponent } from './our-materials.component';

describe('OurMaterialsComponent', () => {
  let component: OurMaterialsComponent;
  let fixture: ComponentFixture<OurMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
