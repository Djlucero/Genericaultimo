import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaxclienteComponent } from './ventaxcliente.component';

describe('VentaxclienteComponent', () => {
  let component: VentaxclienteComponent;
  let fixture: ComponentFixture<VentaxclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaxclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaxclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
