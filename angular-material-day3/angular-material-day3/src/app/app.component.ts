import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-day3';
  showFiller = false;

  constructor(private translate: TranslateService) {
    // Mengatur bahasa awal (misalnya Bahasa Inggris)
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
