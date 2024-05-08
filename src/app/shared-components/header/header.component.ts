import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CartComponent } from 'src/app/e-commerce/cart/cart.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { AuthModule } from '../../auth/auth.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AuthModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService],
})
export class HeaderComponent {
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef
  ) {}

  show() {
    const ref = this.dialogService.open(LoginComponent, {
      width: '50%',
      closeOnEscape: true,
    });

    // Subscribe to signInClicked event from LoginComponent
    ref.onClose.subscribe((result: any) => {
      if (result === 'signInClicked') {
        console.log('Sign In clicked, closing dialog');
        ref.close();
      }
    });
  }
}
