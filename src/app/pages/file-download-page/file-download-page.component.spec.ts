import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDownloadPageComponent } from './file-download-page.component';

describe('FileDownloadPageComponent', () => {
  let component: FileDownloadPageComponent;
  let fixture: ComponentFixture<FileDownloadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDownloadPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDownloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
