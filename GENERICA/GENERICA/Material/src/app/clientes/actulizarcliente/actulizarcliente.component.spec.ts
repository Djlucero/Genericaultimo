import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulizarclienteComponent } from './actulizarcliente.component';

describe('ActulizarclienteComponent', () => {
  let component: ActulizarclienteComponent;
  let fixture: ComponentFixture<ActulizarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActulizarclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActulizarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
