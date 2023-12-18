import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  openLink(link: string){
    window.open(link, '_blank')?.focus();
  }
}
