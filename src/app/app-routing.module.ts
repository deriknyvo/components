import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShareComponent } from './components/share/share.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TabConversationsComponent } from './components/tab-conversations/tab-conversations.component';
import { TabContactsComponent } from './components/tab-contacts/tab-contacts.component';
import { TabArchivedConversationsComponent } from './components/tab-archived-conversations/tab-archived-conversations.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { 
        path: 'user', 
        component: UserComponent, 
        data: {animation: 'UserComponent'}
      },
      { 
        path: 'chat', 
        component: ChatComponent, 
        children: [
          { path: 'conversations',  component: TabConversationsComponent,         data: {animation: 'TabConversations'} },
          { path: 'contacts',       component: TabContactsComponent,              data: {animation: 'TabContacts'} },
          { path: 'archived',       component: TabArchivedConversationsComponent, data: {animation: 'TabArchivedConversations'} }
        ], 
        data: {animation: 'ChatComponent'}
      },
      { 
        path: 'dashboard', 
        component: DashboardComponent, 
        data: {animation: 'DashboardComponent'} 
      },
      { 
        path: 'share', 
        component: ShareComponent, 
        data: {animation: 'ShareComponent'} 
      },
      { 
        path: 'form', 
        component: FormComponent, 
        data: {animation: 'FormComponent'} 
      }
    ],
    canActivate: [AuthGuard],
    data: {animation: 'HomeComponent'}
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
