import {ExtraOptions, Routes} from '@angular/router';
import {DashboardComponent} from "./project-management/dashboard/dashboard.component";
import {ProjectsComponent} from "./project-management/projects/projects.component";
import {ProjectsDetailsComponent} from "./project-management/projects-details/projects-details.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {OrderComponent} from "./order/order.component";
import {OrderItemComponent} from "./order-item/order-item.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserPostsComponent} from "./user-posts/user-posts.component";
import {UserFriendsComponent} from "./user-friends/user-friends.component";
import {UserPhotosComponent} from "./user-photos/user-photos.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectsDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'book/:id', component: BookDetailsComponent},
  {
    path: 'orders/:orderId',
    component: OrderComponent,
    children: [
      {
        path: 'items/:itemId',
        component: OrderItemComponent,
      }
    ]
  },
  {
    path: 'user/:userId',
    component: UserProfileComponent,
    children: [
      {path: 'posts', component: UserPostsComponent},
      {path: 'friends', component: UserFriendsComponent},
      {path: 'photos', component: UserPhotosComponent},
    ]
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

export const routerOptions: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
};
