import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutComponent, LayoutComponentModule} from './layout.component';

@NgModule({
  imports: [
    LayoutComponentModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: []
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('@nx-angular-nest/web/feature-login').then(
          (m) => m.WebFeatureLoginModule
        )
      },
      {
        path: 'register',
        loadChildren: () => import('@nx-angular-nest/web/feature-register').then(
          (m) => m.WebFeatureRegisterModule
        )
      }
    ])
  ],
  exports: [RouterModule]
})
export class WebShellModule {
}
