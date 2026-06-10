// ==========================================
// EYLÜL CAFE NARGİLE - MENÜ VERİLERİ
// ==========================================

export const menuData = {
  categories: [
    { id: "nargileler", name: "Nargileler", icon: "💨", image: "cat_nargile.png" },
    { id: "sicak_icecekler", name: "Sıcak İçecekler", icon: "☕", image: "cat_sicak.png" },
    { id: "soguk_icecekler", name: "Soğuk İçecekler", icon: "🥤", image: "cat_soguk.png" },
    { id: "kahveler", name: "Kahveler", icon: "☕", image: "cat_kahve.png" },
    { id: "soguk_kahveler", name: "Soğuk Kahveler", icon: "🧊", image: "cat_soguk_kahve.png" },
    { id: "kahvaltilar", name: "Kahvaltılar", icon: "🍳", image: "cat_kahvalti.png" },
    { id: "makarnalar", name: "Makarnalar", icon: "🍝", image: "cat_makarna.png" },
    { id: "salatalar", name: "Salatalar", icon: "🥗", image: "cat_salata.png" },
    { id: "tatlilar", name: "Tatlılar", icon: "🍰", image: "cat_tatli.png" },
    { id: "fast_food", name: "Fast Food", icon: "🍔", image: "cat_fastfood.png" }
  ],
  
  items: [
    // NARGİLELER
    { id: "nargile", categoryId: "nargileler", name: "Nargile", price: 280, description: "Özel harman standart nargile seçenekleri.", image: "nargile.jpg" },
    { id: "dark_nargile", categoryId: "nargileler", name: "Dark Nargile", price: 300, description: "Yoğun aroma ve yüksek sekment nargile tütünü.", image: "dark_nargile.webp" },

    // SICAK İÇECEKLER
    { id: "cay", categoryId: "sicak_icecekler", name: "Çay", price: 15, image: "cay.jpg" },
    { id: "demlik_cay", categoryId: "sicak_icecekler", name: "Demlik Çay", price: 250, image: "demlik_cay.jpg" },
    { id: "sicak_cikolata", categoryId: "sicak_icecekler", name: "Sıcak Çikolata", price: 120, image: "sicak_cikolata.webp" },
    { id: "sahlep", categoryId: "sicak_icecekler", name: "Sahlep", price: 130, image: "sahlep.webp" },
    { id: "muzlu_oralet", categoryId: "sicak_icecekler", name: "Muzlu Oralet", price: 45, image: "muzlu_oralet.jpeg" },
    { id: "tarcinli_oralet", categoryId: "sicak_icecekler", name: "Tarçınlı Oralet", price: 45, image: "tarcinli_oralet.jpg" },
    { id: "kivili_oralet", categoryId: "sicak_icecekler", name: "Kivili Oralet", price: 45, image: "kivili_oralet.png" },
    { id: "cilekli_oralet", categoryId: "sicak_icecekler", name: "Çilekli Oralet", price: 45, image: "cilekli_oralet.jpeg" },
    { id: "kakaolu_oralet", categoryId: "sicak_icecekler", name: "Kakaolu Oralet", price: 45, image: "kakaolu_oralet.jpg" },
    { id: "kus_burnu_oralet", categoryId: "sicak_icecekler", name: "Kuşburnu Oralet", price: 45, image: "kus_burnu_oralet.jpg" },
    { id: "portakalli_oralet", categoryId: "sicak_icecekler", name: "Portakallı Oralet", price: 45, image: "portakalli_oralet.jfif" },
    { id: "nane_limon", categoryId: "sicak_icecekler", name: "Nane Limon", price: 60, image: "nane_limon.jfif" },
    { id: "papatyali_oralet", categoryId: "sicak_icecekler", name: "Papatyalı Oralet", price: 70, image: "papatyali_oralet.webp" },
    { id: "bitki_caylari", categoryId: "sicak_icecekler", name: "Bitki Çayları", price: 120, image: "bitki_caylari.jpg" },

    // SOĞUK İÇECEKLER
    { id: "su", categoryId: "soguk_icecekler", name: "Su", price: 25, image: "su.webp" },
    { id: "kola", categoryId: "soguk_icecekler", name: "Kola", price: 75, image: "kola.jpg" },
    { id: "ayran", categoryId: "soguk_icecekler", name: "Ayran", price: 35, image: "ayran.jfif" },
    { id: "fanta", categoryId: "soguk_icecekler", name: "Fanta", price: 75, image: "fanta.webp" },
    { id: "gazoz", categoryId: "soguk_icecekler", name: "Gazoz", price: 75, image: "gazoz.jpeg" },
    { id: "ice_tea", categoryId: "soguk_icecekler", name: "Ice Tea", price: 75, image: "ice_tea.jpg" },
    { id: "cappy", categoryId: "soguk_icecekler", name: "Cappy", price: 75, image: "cappy.webp" },
    { id: "redbull", categoryId: "soguk_icecekler", name: "Redbull", price: 120, image: "redbull.jpg" },
    { id: "sade_soda", categoryId: "soguk_icecekler", name: "Sade Soda", price: 45, image: "sade_soda.webp" },
    { id: "meyveli_soda", categoryId: "soguk_icecekler", name: "Meyveli Soda", price: 50, image: "meyveli_soda.jfif" },
    { id: "churchill", categoryId: "soguk_icecekler", name: "Churchill", price: 100, image: "churchill.jfif" },
    { id: "portakal_suyu", categoryId: "soguk_icecekler", name: "Portakal Suyu", price: 150, image: "portakal_suyu.jfif" },
    { id: "limonata", categoryId: "soguk_icecekler", name: "Limonata", price: 130, image: "limonata.jfif" },
    { id: "milk_shake", categoryId: "soguk_icecekler", name: "Milkshake", price: 150, image: "milk_shake.jfif" },

    // KAHVELER
    { id: "espresso", categoryId: "kahveler", name: "Espresso", price: 100, image: "espresso.webp" },
    { id: "americano", categoryId: "kahveler", name: "Americano", price: 120, image: "americano.webp" },
    { id: "latte", categoryId: "kahveler", name: "Latte", price: 130, image: "latte.jpeg" },
    { id: "cappuccino", categoryId: "kahveler", name: "Cappuccino", price: 130, image: "cappuccino.jfif" },
    { id: "mocha", categoryId: "kahveler", name: "Mocha", price: 120, image: "mocha.jfif" },
    { id: "nescafe", categoryId: "kahveler", name: "Nescafe", price: 70, image: "nescafe.jpg" },
    { id: "turk_kahvesi", categoryId: "kahveler", name: "Türk Kahvesi", price: 80, image: "turk_kahvesi.jfif" },
    { id: "dibek_kahvesi", categoryId: "kahveler", name: "Dibek Kahvesi", price: 100, image: "dibek_kahvesi.jfif" },
    { id: "menengic_kahvesi", categoryId: "kahveler", name: "Menengiç Kahvesi", price: 100, image: "menengic_kahvesi.jfif" },
    { id: "damla_sakizli_kahve", categoryId: "kahveler", name: "Damla Sakızlı Kahve", price: 100, image: "damla_sakizli_kahve.jfif" },
    { id: "filtre_kahve", categoryId: "kahveler", name: "Filtre Kahve", price: 130, image: "filtre_kahve.webp" },

    // SOĞUK KAHVELER
    { id: "ice_latte", categoryId: "soguk_kahveler", name: "Ice Latte", price: 150, image: "ice_latte.jfif" },
    { id: "ice_americano", categoryId: "soguk_kahveler", name: "Ice Americano", price: 150, image: "ice_americano.jfif" },

    // KAHVALTILAR
    { id: "serpme_kahvalti", categoryId: "kahvaltilar", name: "Serpme Kahvaltı (2 Kişilik)", price: 900, image: "serpme_kahvalti.jfif" },
    { id: "menemen", categoryId: "kahvaltilar", name: "Menemen", price: 170, image: "menemen.jfif" },
    { id: "omlet", categoryId: "kahvaltilar", name: "Omlet", price: 130, image: "omlet.jfif" },

    // MAKARNALAR
    { id: "penne_arabiata", categoryId: "makarnalar", name: "Penne Arabiata", price: 250, image: "penne_arabiata.jfif" },
    { id: "koru_soslu_makarna", categoryId: "makarnalar", name: "Körili Makarna", price: 170, image: "koru_soslu_makarna.jfif" },
    { id: "kremali_tavuklu_makarna", categoryId: "makarnalar", name: "Kremalı Tavuklu Makarna", price: 270, image: "kremali_tavuklu_makarna.jfif" },
    { id: "manti", categoryId: "makarnalar", name: "Mantı", price: 300, image: "manti.jfif" },

    // SALATALAR
    { id: "sezar_salata", categoryId: "salatalar", name: "Sezar Salata", price: 250, image: "sezar_salata.jfif" },
    { id: "ton_balikli_salata", categoryId: "salatalar", name: "Ton Balıklı Salata", price: 230, image: "ton_balikli_salata.jfif" },
    { id: "tavuklu_salata", categoryId: "salatalar", name: "Tavuklu Salata", price: 250, image: "tavuklu_salata.jfif" },

    // TATLILAR
    { id: "fistik_ruyasi", categoryId: "tatlilar", name: "Fıstık Rüyası", price: 200, image: "fistik_ruyasi.jfif" },
    { id: "san_sebastian", categoryId: "tatlilar", name: "San Sebastian Cheesecake", price: 200, image: "san_sebastian.jfif" },
    { id: "suffle", categoryId: "tatlilar", name: "Sufle", price: 200, image: "suffle.jfif" },
    { id: "mozaik_pasta", categoryId: "tatlilar", name: "Mozaik Pasta", price: 170, image: "mozaik_pasta.jfif" },
    { id: "waffle", categoryId: "tatlilar", name: "Waffle", price: 200, image: "waffle.jfif" },
    { id: "trilice", categoryId: "tatlilar", name: "Trileçe", price: 200, image: "trilice.jfif" },

    // FAST FOOD
    { id: "hamburger_menu", categoryId: "fast_food", name: "Hamburger Menü", price: 350, image: "hamburger_menu.jfif" },
    { id: "karisik_pizza", categoryId: "fast_food", name: "Karışık Pizza", price: 300, image: "karisik_pizza.jfif" },
    { id: "kasarli_tost", categoryId: "fast_food", name: "Kaşarlı Tost", price: 180, image: "kasarli_tost.jfif" },
    { id: "karisik_tost", categoryId: "fast_food", name: "Karışık Tost", price: 200, image: "karisik_tost.jfif" },
    { id: "sucuklu_tost", categoryId: "fast_food", name: "Sucuklu Tost", price: 180, image: "sucuklu_tost.jfif" },
    { id: "kasarli_gozleme", categoryId: "fast_food", name: "Kaşarlı Gözleme", price: 200, image: "kasarli_gozleme.jfif" },
    { id: "patatesli_gozleme", categoryId: "fast_food", name: "Patatesli Gözleme", price: 200, image: "patatesli_gozleme.jfif" },
    { id: "cips", categoryId: "fast_food", name: "Cips", price: 150, image: "cips.jfif" },
    { id: "double_cips", categoryId: "fast_food", name: "Double Cips", price: 200, image: "double_cips.png" },
    { id: "sigara_boregi", categoryId: "fast_food", name: "Sigara Böreği", price: 130, image: "sigara_boregi.jfif" },
    { id: "et_kofte", categoryId: "fast_food", name: "Et Köfte", price: 420, image: "et_kofte.jfif" }
  ]
};
