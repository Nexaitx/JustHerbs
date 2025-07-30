import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
      },
        {
            path: 'about',
            loadComponent: () => import('./pages/about/about').then(m => m.About)
        },
        {
            path: 'category',
            loadComponent: () => import('./pages/category/category').then(m => m.Category)
        },
        {
            path: 'blogs',
            loadComponent: () => import('./pages/blogs/blogs').then(m => m.Blogs)
        },
        {
            path: 'contact',
            loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
        }
    ]
   }
];
