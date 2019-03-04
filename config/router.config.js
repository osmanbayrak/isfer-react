export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        name: 'Anasayfa',
        icon: 'home',
        component: './Dashboard/Analysis',
      },
      // list
      {
        path: '/corporate',
        icon: 'solution',
        name: 'Kurumsal',
        routes: [
          {
            path: '/corporate/activities',
            name: 'Faaliyetler',
            component: './Corporate',
          },
          {
            path: '/corporate/applications',
            name: 'Uygulamalar',
            component: './Corporate',
          },
          {
            path: '/corporate/about',
            name: 'Hakkımızda',
            component: './Corporate',
          },
        ],
      },
      {
        path: '/products',
        name: 'Ürünler',
        icon: 'appstore',
        routes: [
          {
            path: '/products/uzunmamuller',
            name: 'Uzun Mamüller',
            routes: [
              {
                path: '/products/uzunmamuller/yassidemirler',
                name: 'Yassi Demirler',
                component: './Products',
              },
              {
                path: 'products/uzunmamuller/profildemirler',
                name: 'Profil Demirler',
                component: './Products',
              },
              {
                path: 'products/uzunmamuller/dikeydemirler',
                name: 'Dikey Demirler',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/yassimamuller',
            name: 'Yassı Mamüller',
            routes: [
              {
                path: '/products/yassimamuller/boru',
                name: 'Yassi Demirler',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/profilboru',
                name: 'Profil Demirler',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/babademir',
                name: 'Dikey Demirler',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/profiller',
            name: 'Profiller',
            routes: [
              {
                path: '/products/profiller/t-demir',
                name: 'T-Demirler',
                component: './Products',
              },
              {
                path: '/products/profiller/L-Demirler',
                name: 'L-Demirler',
                component: './Products',
              },
              {
                path: '/products/profiller/X-Demirler',
                name: 'X-Demirler',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/dekoratifler',
            name: 'Dekoratif Demirler(Ferforje)',
            routes: [
              {
                path: '/products/dekoratifler/ferforje-ayak',
                name: 'Ferforje Ayak',
                component: './Products',
              },
              {
                path: '/products/dekoratifler/ferforje-kapi',
                name: 'Ferforje Kapı',
                component: './Products',
              },
              {
                path: '/products/dekoratifler/ferforje-merdiven',
                name: 'Ferforje Merdiven',
                component: './Products',
              },
            ],
          },
        ],
      },
      {
        path: '/cart',
        name: 'Sepetim',
        icon: 'shopping-cart',
        component: './Dashboard/Analysis',
      },
      {
        path: '/tech-info',
        name: 'Teknik Bilgiler',
        icon: 'tool',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            name: 'basic',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        path: '/contact',
        name: 'İletişim',
        icon: 'phone',
        component: './Dashboard/Analysis',
      },
      {
        component: '404',
      },
    ],
  },
];
