import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {NavbarLeftComponentModule} from '@nx-with-chau-tran/web/shell/ui/navbar-left';

@Component({
  selector: 'ct-layout',
  template: `   
    <ct-navbar-left></ct-navbar-left>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
}

@NgModule({
  declarations: [LayoutComponent],

  imports: [MatToolbarModule, RouterModule, MatMenuModule, MatIconModule, NavbarLeftComponentModule],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
