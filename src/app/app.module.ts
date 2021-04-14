import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AuthViewComponent } from "./auth-view/auth-view.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [AppComponent, HelloComponent, AuthViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
