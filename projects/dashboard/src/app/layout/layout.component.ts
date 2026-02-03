import { Component } from '@angular/core';
import { SugFunnelCardComponent } from '../sug-funnel-card/sug-funnel-card.component';
import { SugLeftNavBarComponent } from '../sug-left-nav-bar/sug-left-nav-bar.component';
import { SugPageTitleComponent } from '../sug-page-title/sug-page-title.component';
import { FunnelCard } from '../interface/funnel-card';
import { HeadingTags } from '../model/heading-types';
import { SugAdvertisementComponent } from '../sug-advertisement/sug-advertisement.component';

@Component({
  selector: 'app-layout',
  imports: [
    SugFunnelCardComponent,
    SugLeftNavBarComponent,
    SugPageTitleComponent,
    SugAdvertisementComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  //1. side navbar component > sug icon component
  navLinks = [
    {
      id: 'home',
      label: 'Home',
      icon: 'fa-house',
      iconSize: '32px',
      iconColor: '#919e55',
      navegationLink: '/#',
    },
    {
      id: 'groups',
      label: 'Groups',
      icon: 'fa-users',
      iconSize: '32px',
      iconColor: '#919e55',
      navegationLink: '/#',
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: 'fa-envelope-open-text',
      iconSize: '32px',
      iconColor: '#919e55',
      navegationLink: '/#',
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: 'fa-chart-pie',
      iconSize: '32px',
      iconColor: '#919e55',
      navegationLink: '/#',
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: 'fa-screwdriver-wrench',
      iconSize: '32px',
      iconColor: '#919e55',
      navegationLink: '/#',
    },
  ];

  //2. SUG Title component data
  pageTitle = "Let's create something great together for your group!";
  pageSubtitle =
    'Build custom sign-ups, forms, and payment collections the genius way: streamline group events, boost your bottom line, and take your organization to the next level.';
  pageTitleTag: HeadingTags = 'h3';

  //3. pass the hardcode date for SUG Funnel cards component
  funnelCards: FunnelCard[] = [
    {
      img: 'signup.png',
      title: 'Sign Up',
      desc: 'Organize events and volunteers in minutes',
      cardLink: '/#',
    },
    {
      img: 'fees.png',
      title: 'Fees and Registrations',
      desc: 'Collect dues, fees, registration forms, and more',
      cardLink: '/#',
    },
    {
      img: 'form.png',
      title: 'Form or Waiver',
      desc: 'Beautiful online forms and waivers for your group',
      cardLink: '/#',
    },
    {
      img: 'onlinestore.png',
      title: 'Online Store',
      desc: 'Move merch with e-commerce tools to help you sell more',
      cardLink: '/#',
    },
    {
      img: 'group_gift.png',
      title: 'Group Gift',
      desc: 'Instant tracking and the option to send gift cards makes life easy',
      cardLink: '/#',
    },
    {
      img: 'ticketed_event.png',
      title: 'Ticketed Event',
      desc: 'Enjoy quick and easy mobile ticketing check-ins',
      cardLink: '/#',
    },
    {
      img: 'athon_fundraiser.png',
      title: '"Athon" Fundraiser',
      desc: 'Launch a peer-to-peer fundraiser to raise money the fun way',
      cardLink: '/#',
    },
    {
      img: 'fundraiser.png',
      title: 'Fundraiser',
      desc: 'Raise money traditionally to support and case',
      cardLink: '/#',
    },
  ];
}
