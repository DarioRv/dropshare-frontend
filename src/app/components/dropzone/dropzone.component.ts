import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'dropzone',
  standalone: true,
  imports: [CommonModule],
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

  getEquivalentSize(size: number): string {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`;
    } else {
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
  }
}
