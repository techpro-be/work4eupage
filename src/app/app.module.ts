import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { HomeModule } from "./modules/home/home.module";
import { SharedModule } from "./shared/modules/shared.module";
import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig
} from "ngx-cookieconsent";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: "https://thetechpro.be"
  },
  position: "bottom-right",
  theme: "classic",
  palette: {
    popup: {
      background: "#000000",
      text: "#ffffff",
      link: "#ffffff"
    },
    button: {
      background: "#f1d600",
      text: "#000000",
      border: "transparent"
    }
  },
  type: "info",
  content: {
    message:
      "This website uses cookies to ensure you get the best experience on our website.",
    dismiss: "Got it!",
    deny: "Refuse cookies",
    link: "Learn more",
    href: "https://thetechpro.be/#/privacy",
    policy: "Cookie Policy"
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgcCookieConsentModule.forRoot(cookieConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
