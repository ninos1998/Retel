import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatBox2Component } from './certificat-box2.component';

describe('CertificatBox2Component', () => {
  let component: CertificatBox2Component;
  let fixture: ComponentFixture<CertificatBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatBox2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
