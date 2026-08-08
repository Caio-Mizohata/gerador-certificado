import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from "./components/ui-base/ui-base";
import { Certificados } from "./pages/certificados/certificados";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, UiBase, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
