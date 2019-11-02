
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { EditorialModule } from './editorial/editorial.module';
import { InMemoryEditorialService } from './in-memory-editorial.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule, 
        HttpClientModule,
         HttpClientInMemoryWebApiModule.forRoot(InMemoryEditorialService, {delay : 100}),
         BrowserAnimationsModule,
         ToastrModule.forRoot(), // ToastrModule added
        AppRoutingModule,
        EditorialModule
    ],

    bootstrap: [AppComponent],

    providers: [InMemoryEditorialService]
})
export class AppModule {}