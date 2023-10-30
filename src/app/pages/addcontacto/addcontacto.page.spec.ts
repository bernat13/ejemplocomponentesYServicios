import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcontactoPage } from './addcontacto.page';

describe('AddcontactoPage', () => {
  let component: AddcontactoPage;
  let fixture: ComponentFixture<AddcontactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddcontactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
