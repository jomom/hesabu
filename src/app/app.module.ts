import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { MaterialModule } from "./shared/modules/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './shared/header/header.component';
import { StickyctaComponent } from './shared/stickycta/stickycta.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PricingComponent } from './shared/pricing/pricing.component';
import { FeaturesComponent } from './shared/features/features.component';
import { HeroComponent } from './shared/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    StickyctaComponent,
    FooterComponent,
    PricingComponent,
    FeaturesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
