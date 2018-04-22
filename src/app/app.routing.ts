import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/customer/login/login.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { ProfileComponent} from './components/customer/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { OwnerProfileComponent } from './components/owner/owner-profile/owner-profile.component';
import { ModuleWithProviders } from '@angular/core';
import { OwnerHomeComponent } from './components/owner/owner-home/owner-home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CafeNewComponent } from './components/cafe/cafe-new/cafe-new.component';
import { CafeListComponent } from './components/cafe/cafe-list/cafe-list.component';
import { CafeProfileComponent } from './components/cafe/cafe-profile/cafe-profile.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import {AdminProfileComponent} from './components/admin/admin-profile/admin-profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: 'owner', component: OwnerHomeComponent},
  {path: 'owner/profile', component: OwnerProfileComponent},
  {path: 'admin', component: AdminHomeComponent},
  {path: 'owner/cafe/new', component: CafeNewComponent},
  {path: 'owner/cafe', component: CafeListComponent},
  {path: 'admin/users', component: UserListComponent},
  {path: 'admin/profile', component: AdminProfileComponent},
  {path: 'owner/cafe/:place_id', component: CafeProfileComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
