import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FileDetailsComponent } from '../file-details/file-details.component';

@Component({
  selector: 'dropzone',
  standalone: true,
  imports: [CommonModule, FileDetailsComponent],
  templateUrl: './dropzone.component.html',
})
export class DropzoneComponent {
  public file: File | null = null;
  public onDropFile = output<File>();

  onFileChange(event: any): void {
    this.file = event.target.files[0];
    this.onDropFile.emit(this.file!);
  }

  clearFile(): void {
    this.file = null;
  }
}
