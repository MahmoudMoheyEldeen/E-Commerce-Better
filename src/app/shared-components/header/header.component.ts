import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CartComponent } from 'src/app/e-commerce/cart/cart.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { AuthModule } from '../../auth/auth.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from '../../app.component';
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
    ConfirmDialogModule,
    DialogModule,
    AuthModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService],
})
export class HeaderComponent {
  visible: boolean = false;

  constructor(
    private _confirmService: ConfirmationService,
    private _route: Router
  ) {}

  confirm() {
    console.log('sadasd');
    this._confirmService.confirm({
      message: '',
      accept: () => {
        this._route.navigateByUrl('/E-Commerce/cart');
      },
    });
  }

  showDialog() {
    this.visible = true;
  }
}
