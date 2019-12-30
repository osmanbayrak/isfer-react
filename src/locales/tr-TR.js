import analysis from './tr-TR/analysis';
import exception from './tr-TR/exception';
import form from './tr-TR/form';
import globalHeader from './tr-TR/globalHeader';
import login from './tr-TR/login';
import menu from './tr-TR/menu';
import monitor from './tr-TR/monitor';
import result from './tr-TR/result';
import settingDrawer from './tr-TR/settingDrawer';
import settings from './tr-TR/settings';
import pwa from './tr-TR/pwa';
import component from './tr-TR/component';
import products from './tr-TR/products';

export default {
  name: 'İsim',
  message: 'Mesajınız',
  your_message: 'Lütfen mesajınızı buraya yazınız...',
  contact: 'İLETİŞİM',
  long_products_index: 'Rulo/Paket/Levha Sac, Dkp, Hrp, Galvanizli Sac, Boyalı Sac, Desenli Sac, Trapez Sac, Genişletilmiş/Delikli Sac.',
  flat_products_index: 'İnşaat Demiri, Çelik Hasır, Filmaşin, Npı/Npu, Hea/Heb/Ipe, Köşebent, Lama, Kare Dolu Demir, Düz Yuvarlak Demir, T Demiri, Transmisyon ve Soğuk Haddeler.',
  decorative_products_index: 'Motifler, Panolar, Cumbalar, Sıcak Baskı Desenler, Boğumlu/Yapraklı Parçalar, Mızraklar, Topuzlar',
  profile_products_index: 'Kutu Profiller, Galvanizli/Boyalı Profiller, Sanayi Boruları, Su ve Gaz Boruları, Çelik Çekme Borular, Spiral Borular',
  long_products: 'Uzun Mamüller',
  flat_products: 'Yassı Mamüller',
  profile_products: 'Profil Ürünleri',
  decorative_products: 'Dekoratif Ürünler',
  en: 'En(m)',
  boy: 'Boy(m)',
  et: 'Et(mm)',
  calculate: 'Ağırlık Hesaplama',
  cart_edit_info: 'Sepete eklemek istediklerinizi ürünler kısmından işaretlip, ekle butonuna basarak sepetinize ekleyebilirsiniz. Çıkarmak istediklerinizi de işaretleyip çıkart butonu ile sepetten çıkarabilirsiniz.',
  order_info: 'Siparişi onayla butonuna bastığınızda, e-mail servisi açılır ve istediğiniz ürünler ve açıklama bilgisi E-Postanızda yazılı şekilde karşınıza çıkar. Gönderirseniz siparişiniz bize ulaşır. Teşekkürler.',
  extra_description: 'Ek Açıklama',
  extra_description_ph: 'Siparişinizle alakalı eklemek istediğiniz bir şey varsa lütfen buraya yazınız.',
  success: 'Başarılı',
  add_Cart_success: 'Sepete başarıyla eklendi.',
  edit_cart: 'Sepeti Düzenle',
  email: 'E-Posta',
  products: 'Ürünler',
  list_appearence: 'Liste Görünümü',
  cart: 'Sepetim',
  weight: 'Ağırlık',
  add_to_cart: 'Sepete Ekle',
  uzunmamuller: 'Uzun Mamüller',
  yassimamuller: 'Yassı Mamüller',
  profiller: 'Profiller',
  activities: 'Faaliyetlerimiz',
  applications: 'Uygulamalarımız',
  description: 'Açıklama',
  usage: 'Kullanım Alanları',
  about: 'Hakkımızda',
  aboutus_text: 'Atalarımızdan öğrendiğimiz sıcak ve soğuk demircilik mesleğine, yaklaşık çeyrek asir önce kurdugumuz şirket ile ilk adımımızı attık. Sıcak, soğuk, profil köşebent vb. demirin her türü ile yoğrularak demir gibi, yolumuza devam ettik. Piyasanin ve müşterilerimizin talepleri doğrultusunda dekoratif demir sektöründe de çalışmaya başladık. İyi bildiğimiz maden demir işi üzerine daha yoğunlaşarak İstanbul Metal Ferforje İnş San Tic Ltd Şti’ni İSFER markasında kurumsallaştırarak müşterilerimizin dekoratif demir taleplerine de cevap vermeye başladık . ISO 9001 ve OHSAS 18001 sertifikalarini alarak ürün kalitemizle, müşteri memnuniyetini de pekiştirmis olarak daha da güçlendik. Kaliteden taviz vermeden bu piyasadaki yerimizi güçlendireceğimize ve bu yolda sizlerle beraber omuz omuza olacağımıza inancımız tamdır. Azmimiz ve müşteri odaklı çalışmalarımızla siz değerli müşterilerimizin daha iyi hitap etmek için yenilenip daha güçlü bir şekilde ve daima daha iyisini yapma gayretiyle sizlerle birlikte yolumuza devam edeceğiz. ',
  aboutus_init: 'Başlarken..',
  aboutus_footer1: 'Yakup POLAT',
  aboutus_footer2: 'Yönetim Kurulu Başkanı',
  faaliyet1_title: 'İsfer Örnek Faaliyeti',
  faaliyet1_desc:
    'Biz böyle böyle faaliyetler yapıyoruz. Buda onlardan biri .ok güzel bir faaliyet fakirlere yardım ediyoruz, herkesi besliyoruz demirler yapıyoruz. Güzel insanlarla güzel yerlerde buluşup iş yapıyoruz. Faaliyetlerin ardı arkası yok. Bu faaliyetimizde demirleri kestik, biçtik doğradık ve onlarla güzel ferforjeler ürettik ömer buraya güzel yazılar bul abi :D',
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.home.introduce': 'introduce',
  'app.forms.basic.title': 'Basic form',
  'app.forms.basic.description':
    'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
  ...analysis,
  ...exception,
  ...form,
  ...globalHeader,
  ...login,
  ...menu,
  ...monitor,
  ...result,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...products
};
