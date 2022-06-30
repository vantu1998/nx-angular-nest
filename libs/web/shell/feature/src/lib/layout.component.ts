import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ct-layout',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
}

@NgModule({
  declarations: [LayoutComponent],

  imports: [MatToolbarModule, RouterModule, MatMenuModule, MatIconModule],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
