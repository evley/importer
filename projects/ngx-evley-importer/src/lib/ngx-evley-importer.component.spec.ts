import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEvleyImporterComponent } from './ngx-evley-importer.component';

describe('NgxEvleyImporterComponent', () => {
  let component: NgxEvleyImporterComponent;
  let fixture: ComponentFixture<NgxEvleyImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEvleyImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEvleyImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
