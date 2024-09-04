import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
  switchLanguage(event: any) {
    const language = event.value;
    this.translate.use(language);
  }
}
