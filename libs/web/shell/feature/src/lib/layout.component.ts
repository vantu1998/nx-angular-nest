import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {NavbarLeftComponentModule} from '@nx-with-chau-tran/web/shell/ui/navbar-left';
import {SidebarComponentModule} from '@nx-with-chau-tran/web/shell/ui/sidebar';
import {ResizerComponentModule} from '@nx-with-chau-tran/web/shell/ui/resizer';

@Component({
  selector: 'ct-layout',
  template: `   
    <div class="flex">
      <ct-navbar-left></ct-navbar-left>
      <ct-sidebar [expanded]="expanded"></ct-sidebar>  
      <ct-resizer [(expanded)]="expanded"></ct-resizer>
      <div class="flex-auto bg-blue-200">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  expanded = true;
}

@NgModule({
  declarations: [LayoutComponent],

  imports: [MatToolbarModule, RouterModule, MatMenuModule, MatIconModule, NavbarLeftComponentModule, SidebarComponentModule, ResizerComponentModule],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
