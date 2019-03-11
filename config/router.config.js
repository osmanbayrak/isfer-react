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
        name: 'ANASAYFA',
        component: './Dashboard/Analysis',
      },
      // list
      {
        path: '/corporate',
        name: 'KURUMSAL',
        routes: [
          {
            path: '/corporate/announces',
            name: 'DUYURULAR',
            component: './Corporate',
          },
          {
            path: '/corporate/about',
            name: 'HAKKIMIZDA',
            component: './Corporate',
          },
        ],
      },
      {
        path: '/activities',
        name: 'FAALİYETLER',
        routes: [
          {
            path: '/activities/production',
            name: 'Üretim',
            component: './Activities',
          },
          {
            path: '/activities/applications',
            name: 'Uygulamalar',
            component: './Activities',
          },
        ],
      },
      {
        path: '/products',
        name: 'ÜRÜNLER',
        routes: [
          {
            path: '/products/uzunmamuller',
            name: 'Uzun Mamüller',
            routes: [
              {
                path: '/products/uzunmamuller/insaatdemiri',
                name: 'İnşaat Demiri',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/celikhasir',
                name: 'Çelik Hasır',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/filmasin',
                name: 'Filmaşin',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/inp',
                name: 'NPI / NPU Profiller',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/hea',
                name: 'HEA / HEB / IPE Profiller',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/kosebent',
                name: 'Köşebent',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/lama',
                name: 'Lama / Silme',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/karedd',
                name: 'Kare Dolu Demir',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/dyd',
                name: 'Düz Yuvarlark Demir',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/t-demiri',
                name: 'T Demiri',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/transmisyon',
                name: 'Transmisyon ve Soğuk Haddeler',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/yassimamuller',
            name: 'Yassı Mamüller',
            routes: [
              {
                path: '/products/yassimamuller/shr',
                name: 'Rulo / Paket / Levha Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/dkp',
                name: 'DKP Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/hrp',
                name: 'HRP Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/gr',
                name: 'Galvanizli Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/bs',
                name: 'Boyalı Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/bgds',
                name: 'Baklavalı / Gözyaşı Desenli Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/tos',
                name: 'Trapez / Oluklu Sac',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/gds',
                name: 'Genişletilmiş / Delikli Sac',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/profiller',
            name: 'Profiller',
            routes: [
              {
                path: '/products/profiller/kdkp',
                name: 'Kare Diktörget Kutu Profiller',
                component: './Products',
              },
              {
                path: '/products/profiller/gkpb',
                name: 'Galvanizli Kutu Profil ve Borular',
                component: './Products',
              },
              {
                path: '/products/profiller/sb',
                name: 'Sanayi Boruları',
                component: './Products',
              },
              {
                path: '/products/profiller/sgb',
                name: 'Su ve Gaz Boruları',
                component: './Products',
              },
              {
                path: '/products/profiller/ccb',
                name: 'Çelik Çekme Borular',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/dekoratifler',
            name: 'Dekoratif Demirler',
            component: './Products',
          },
        ],
      },
      {
        path: '/cart',
        name: 'SEPETİM',
        component: './Cart',
      },
      {
        path: '/tech-info',
        name: 'TEKNİK BİLGİLER',
        routes: [
          {
            path: '/tech-info/calculate',
            name: 'Ağırlık Hesaplama',
            routes: [
              {
                path: '/tech-info/calculate/yassimamuller',
                name: 'Yassı Mamül Hesaplama',
                component: './Tech',
              },
              {
                path: '/tech-info/calculate/profiller',
                name: 'Boru ve Profil Hesaplama',
                component: './Tech',
              },
              {
                path: '/tech-info/calculate/lama',
                name: 'Lama Hesaplama',
                component: './Tech',
              },
            ],
          },
          {
            path: '/tech-info/certificates',
            name: 'Kalite Belgeleri',
            component: './Tech',
          },
        ],
      },
      {
        path: '/contact',
        name: 'İLETİŞİM',
        component: './Dashboard/Analysis',
      },
      {
        component: '404',
      },
    ],
  },
];
