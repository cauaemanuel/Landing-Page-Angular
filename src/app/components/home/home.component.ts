import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";
import { DescriptionMeComponent } from "../description-me/description-me.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent, DescriptionMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
