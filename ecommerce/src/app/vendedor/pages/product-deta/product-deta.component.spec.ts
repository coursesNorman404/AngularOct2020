import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaComponent } from './product-deta.component';

describe('ProductDetaComponent', () => {
  let component: ProductDetaComponent;
  let fixture: ComponentFixture<ProductDetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
