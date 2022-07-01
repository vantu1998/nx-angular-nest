import {ChangeDetectionStrategy, Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ct-sidebar',
  template: `
    <div [style.width]="expanded ? '240px' : '24px'" class="h-full bg-[#f4f5f7] will-change-[width] transition-[width] ease-in">
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() expanded!: boolean;
}

@NgModule({
  declarations: [SidebarComponent],
  imports:[CommonModule],
  exports: [SidebarComponent]
})
export class SidebarComponentModule {}
