import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShareComponent } from './components/share/share.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { TabsChatSidebarComponent } from './components/tabs-chat-sidebar/tabs-chat-sidebar.component';
import { TabConversationsComponent } from './components/tab-conversations/tab-conversations.component';
import { TabContactsComponent } from './components/tab-contacts/tab-contacts.component';
import { TabArchivedConversationsComponent } from './components/tab-archived-conversations/tab-archived-conversations.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserComponent,
    ChatComponent,
    DashboardComponent,
    ShareComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatSidebarComponent,
    TabsChatSidebarComponent,
    TabConversationsComponent,
    TabContactsComponent,
    TabArchivedConversationsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
