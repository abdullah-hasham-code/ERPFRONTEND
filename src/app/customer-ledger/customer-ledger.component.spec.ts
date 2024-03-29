import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLedgerComponent } from './customer-ledger.component';

describe('CustomerLedgerComponent', () => {
  let component: CustomerLedgerComponent;
  let fixture: ComponentFixture<CustomerLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerLedgerComponent]
    });
    fixture = TestBed.createComponent(CustomerLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
