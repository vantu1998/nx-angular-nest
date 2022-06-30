import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';

@Component({
  selector: `ct-navbar-left`,
  template:`
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLeftComponent{}

@NgModule({
  declarations: [NavbarLeftComponent],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftComponentModule{}
