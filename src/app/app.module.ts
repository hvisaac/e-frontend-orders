import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PaytableComponent } from './components/paytable/paytable.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DataTablesModule } from 'angular-datatables';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PreloaderComponent } from './components/preloader/preloader.component'
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ProcessAlertComponent } from './components/process-alert/process-alert.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'

@NgModule({
  declarations: [
    AppComponent,
    PaytableComponent,
    HomeComponent,
    ProductFormComponent,
    NavBarComponent,
    PreloaderComponent,
    ProcessAlertComponent
  ],
  entryComponents: [
    ProductFormComponent,
    ProcessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
