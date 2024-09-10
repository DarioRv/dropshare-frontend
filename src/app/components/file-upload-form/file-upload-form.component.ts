import { Component, inject, output } from '@angular/core';
import { DropzoneComponent } from '../dropzone/dropzone.component';
import { FilesService } from '@app/services/files.service';
import { environment } from '@env/environment';

@Component({
  selector: 'file-upload-form',
  standalone: true,
  imports: [DropzoneComponent],
  templateUrl: './file-upload-form.component.html',
  host: {
    class: 'text-center',
  },
})
export class FileUploadFormComponent {
  private filesService = inject(FilesService);
  public file: File | null = null;
  public onUploadedFile = output<string>();

  public isUploading = false;
  public error: string = '';

  handleDropFile(file: File): void {
    this.file = file;
  }

  onSubmit(): void {
    if (this.file) {
      this.isUploading = true;
      this.filesService.upload(this.file).subscribe({
        next: (uploadedFile) => {
          this.isUploading = false;
          this.onUploadedFile.emit(this.generateLink(uploadedFile.slug));
        },
        error: (error) => {
          this.isUploading = false;
          this.error = error.error.message;
        },
      });
    }
  }

  generateLink(slug: string): string {
    const website = window.location.origin;
    return `${website}/${slug}`;
  }

  dismissError(): void {
    this.error = '';
  }
}
