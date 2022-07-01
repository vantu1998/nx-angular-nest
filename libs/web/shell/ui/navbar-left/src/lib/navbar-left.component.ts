import {ChangeDetectionStrategy, Component, NgModule, OnInit} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@Component({
  selector: `ct-navbar-left`,
  template: `
    <div class="w-[64px] bg-[#0747a6] h-screen flex items-center py-8 flex-col color-white">
      <div class="py-4 cursor-pointer" routerLink="/">
        <img src="assets/logo.svg" alt="Logo" class="w-10 h-10">
      </div>
      <div *ngFor="let item of navItems" [matTooltip]="item.tooltip" matTooltipPosition="right" class="my-1 cursor-pointer">
        <mat-icon class="text-white">{{item.icon}}</mat-icon>
      </div>
      <div class="flex-auto"></div>
      <div matTooltip="Admin user" matTooltipPosition="right" class="cursor-pointer border-2 border-solid border-transparent hover:border-blue-500 rounded-full w-10 h-10">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             alt="avatar" class="rounded-full object-cover object-center">
      </div>
      <div class="cursor-pointer text-white w-8 h-8 my-2 border-4 border-solid border-transparent hover:border-blue-500 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLeftComponent implements OnInit {
  navItems!: NavItem[];

  ngOnInit() {
    this.navItems = [
      new NavItem('search', 'Search issues'),
      new NavItem('add', 'Create issue')
    ]
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler?: Handler) {
  }
}

type Handler = () => void;

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [NavbarLeftComponent],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftComponentModule {
}
