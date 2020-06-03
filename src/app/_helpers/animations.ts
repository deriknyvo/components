import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('TabConversations <=> TabContacts', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms ease-out', style({ display: 'none'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%', overflow: 'hidden'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('TabContacts <=> TabArchivedConversations', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms ease-out', style({ display: 'none'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('TabArchivedConversations <=> TabConversations', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms ease-out', style({ display: 'none'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);

export const slideMenuAnimation = trigger('changeMenu', [
  transition('UserComponent <=> ChatComponent', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('UserComponent <=> DashboardComponent', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('UserComponent <=> ShareComponent', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);