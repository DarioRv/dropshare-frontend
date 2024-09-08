import { Component } from '@angular/core';
import { FileUploadComponent } from '@app/components/file-upload/file-upload.component';

@Component({
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
