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
            name: 'ÜRETİM',
            component: './Activities',
          },
          {
            path: '/activities/applications',
            name: 'UYGULAMALAR',
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
            name: 'UZUN MAMÜLLER',
            routes: [
              {
                path: '/products/uzunmamuller/insaatdemiri',
                name: 'İNŞAAT DEMİRİ',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/celikhasir',
                name: 'ÇELİK HASIR',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/inp',
                name: 'NPI / NPU PROFİLLER',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/hea',
                name: 'HEA / HEB / IPE PROFİLLER',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/kosebent',
                name: 'KÖŞEBENT',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/lama',
                name: 'LAMA / SİLME',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/karedd',
                name: 'KARE DOLU DEMİR',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/dyd',
                name: 'DÜZ YUVARLAK DEMİR',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/t-demiri',
                name: 'T DEMİRİ',
                component: './Products',
              },
              {
                path: '/products/uzunmamuller/transmisyon',
                name: 'TRANSMİSYON VE SOĞUK HADDELER',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/yassimamuller',
            name: 'YASSI MAMÜLLER',
            routes: [
              {
                path: '/products/yassimamuller/shr',
                name: 'RULO / PAKET / LEVHA SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/dkp',
                name: 'DKP SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/hrp',
                name: 'HRP SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/gr',
                name: 'GALVANİZLİ SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/bs',
                name: 'BOYALI SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/bgds',
                name: 'BAKLAVALI / GÖZYAŞI DESENLİ SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/tos',
                name: 'TRAPEZ / OLUKLU SAC',
                component: './Products',
              },
              {
                path: '/products/yassimamuller/gds',
                name: 'GENİŞLETİLMİŞ / DELİKLİ SAC',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/profiller',
            name: 'PROFİLLER',
            routes: [
              {
                path: '/products/profiller/kdkp',
                name: 'KARE DİKDÖRTGEN KUTU PROFİLLER',
                component: './Products',
              },
              {
                path: '/products/profiller/gkpb',
                name: 'GALVANİZLİ KUTU PROFİL ve BORULAR',
                component: './Products',
              },
              {
                path: '/products/profiller/sb',
                name: 'SANAYİ BORULARI',
                component: './Products',
              },
              {
                path: '/products/profiller/ccb',
                name: 'ÇELİK ÇEKME BORULAR',
                component: './Products',
              },
              {
                path: '/products/profiller/bkp',
                name: 'BOYALI KUTU PROFİLLER',
                component: './Products',
              },
            ],
          },
          {
            path: '/products/dekoratifler',
            name: 'DEKORATİF DEMİRLER',
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
            name: 'AĞIRLIK HESAPLAMA',
            routes: [
              {
                path: '/tech-info/calculate/yassimamuller',
                name: 'YASSI MAMÜL HESAPLAMA',
                component: './Tech',
              },
              {
                path: '/tech-info/calculate/profiller',
                name: 'BORU ve PROFİL HESAPLAMA',
                component: './Tech',
              },
              {
                path: '/tech-info/calculate/lama',
                name: 'LAMA HESAPLAMA',
                component: './Tech',
              },
            ],
          },
          {
            path: '/tech-info/certificates',
            name: 'KALİTE BELGELERİ',
            component: './Tech',
          },
        ],
      },
      {
        path: '/contact',
        name: 'İLETİŞİM',
        component: './Contact',
      },
      {
        component: '404',
      },
    ],
  },
];
