import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringInvoicesComponent } from './recurring-invoices.component';

describe('RecurringInvoicesComponent', () => {
  let component: RecurringInvoicesComponent;
  let fixture: ComponentFixture<RecurringInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringInvoicesComponent]
    });
    fixture = TestBed.createComponent(RecurringInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
