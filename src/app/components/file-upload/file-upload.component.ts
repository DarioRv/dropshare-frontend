import { Component } from '@angular/core';
import { FileUploadFormComponent } from '../file-upload-form/file-upload-form.component';

@Component({
  selector: 'file-upload',
  standalone: true,
  imports: [FileUploadFormComponent],
  templateUrl: './file-upload.component.html',
  host: {
    class: 'block max-w-2xl mx-auto',
  },
})
export class FileUploadComponent {
  public generatedLink: string = 'dasdsadasdas';
  clickedCopyButton: boolean = false;

  handleUploadedFile(link: string): void {
    this.generatedLink = link;
  }

  copyLink(): void {
    this.clickedCopyButton = true;
    navigator.clipboard.writeText(this.generatedLink);
    setTimeout(() => {
      this.clickedCopyButton = false;
    }, 2000);
  }
}
