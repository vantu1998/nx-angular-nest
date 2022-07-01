import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'ct-resizer',
  template: `
    <div (click)="toggle()" class="w-6 relative h-full border-l-2 border-[#dfd3d3] border-solid hover:border-blue-600 hover:cursor-ew-resize ">
      <div class="absolute top-8 left-[-14px] border border-solid rounded-full overflow-hidden">
        <button class="w-[24px] h-[24px] flex items-center justify-center bg-white hover:bg-blue-500 hover:text-white">
          <mat-icon class="text-[20px] w-auto h-auto">{{expanded ? 'chevron_left' : 'chevron_right'}}</mat-icon>
        </button>  
      </div>
      
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizerComponent implements OnInit{
  @Input() expanded = false;
  @Output() expandedChange = new EventEmitter();
  toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }
  ngOnInit() {
    this.handleResizer();
  }
  handleResizer() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      this.expanded = e.matches;
      this.expandedChange.emit(this.expanded);
    });
  }
}

@NgModule({
  declarations: [ResizerComponent],
  imports: [
    MatIconModule
  ],
  exports: [ResizerComponent]
})
export class ResizerComponentModule {}
