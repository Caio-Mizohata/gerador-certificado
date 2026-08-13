import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from "./components/ui-base/ui-base";
import { Certificado } from "./pages/certificado/certificado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, UiBase, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
