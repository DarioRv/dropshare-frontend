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
          console.error(error);
        },
      });
    }
  }

  generateLink(slug: string): string {
    return `${environment.apiUrl}/files/${slug}`;
  }
}
