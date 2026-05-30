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
    { id: "nargile", categoryId: "nargileler", name: "Nargile", price: 280, description: "Özel harman standart nargile seçenekleri." },
    { id: "dark_nargile", categoryId: "nargileler", name: "Dark Nargile", price: 300, description: "Yoğun aroma ve yüksek sekment nargile tütünü." },

    // SICAK İÇECEKLER
    { id: "cay", categoryId: "sicak_icecekler", name: "Çay", price: 15 },
    { id: "demlik_cay", categoryId: "sicak_icecekler", name: "Demlik Çay", price: 250 },
    { id: "sicak_cikolata", categoryId: "sicak_icecekler", name: "Sıcak Çikolata", price: 120 },
    { id: "sahlep", categoryId: "sicak_icecekler", name: "Sahlep", price: 130 },
    { id: "muzlu_oralet", categoryId: "sicak_icecekler", name: "Muzlu Oralet", price: 45 },
    { id: "tarcinli_oralet", categoryId: "sicak_icecekler", name: "Tarçınlı Oralet", price: 45 },
    { id: "kivili_oralet", categoryId: "sicak_icecekler", name: "Kivili Oralet", price: 45 },
    { id: "cilekli_oralet", categoryId: "sicak_icecekler", name: "Çilekli Oralet", price: 45 },
    { id: "kakaolu_oralet", categoryId: "sicak_icecekler", name: "Kakaolu Oralet", price: 45 },
    { id: "kus_burnu_oralet", categoryId: "sicak_icecekler", name: "Kuşburnu Oralet", price: 45 },
    { id: "portakalli_oralet", categoryId: "sicak_icecekler", name: "Portakallı Oralet", price: 45 },
    { id: "nane_limon", categoryId: "sicak_icecekler", name: "Nane Limon", price: 60 },
    { id: "papatyali_oralet", categoryId: "sicak_icecekler", name: "Papatyalı Oralet", price: 70 },
    { id: "bitki_caylari", categoryId: "sicak_icecekler", name: "Bitki Çayları", price: 120 },

    // SOĞUK İÇECEKLER
    { id: "su", categoryId: "soguk_icecekler", name: "Su", price: 25 },
    { id: "kola", categoryId: "soguk_icecekler", name: "Kola", price: 75 },
    { id: "ayran", categoryId: "soguk_icecekler", name: "Ayran", price: 35 },
    { id: "fanta", categoryId: "soguk_icecekler", name: "Fanta", price: 75 },
    { id: "gazoz", categoryId: "soguk_icecekler", name: "Gazoz", price: 75 },
    { id: "ice_tea", categoryId: "soguk_icecekler", name: "Ice Tea", price: 75 },
    { id: "cappy", categoryId: "soguk_icecekler", name: "Cappy", price: 75 },
    { id: "redbull", categoryId: "soguk_icecekler", name: "Redbull", price: 120 },
    { id: "sade_soda", categoryId: "soguk_icecekler", name: "Sade Soda", price: 45 },
    { id: "meyveli_soda", categoryId: "soguk_icecekler", name: "Meyveli Soda", price: 50 },
    { id: "churchill", categoryId: "soguk_icecekler", name: "Churchill", price: 100 },
    { id: "portakal_suyu", categoryId: "soguk_icecekler", name: "Portakal Suyu", price: 150 },
    { id: "limonata", categoryId: "soguk_icecekler", name: "Limonata", price: 130 },
    { id: "milk_shake", categoryId: "soguk_icecekler", name: "Milkshake", price: 150 },

    // KAHVELER
    { id: "espresso", categoryId: "kahveler", name: "Espresso", price: 100 },
    { id: "americano", categoryId: "kahveler", name: "Americano", price: 120 },
    { id: "latte", categoryId: "kahveler", name: "Latte", price: 130 },
    { id: "cappuccino", categoryId: "kahveler", name: "Cappuccino", price: 130 },
    { id: "mocha", categoryId: "kahveler", name: "Mocha", price: 120 },
    { id: "nescafe", categoryId: "kahveler", name: "Nescafe", price: 70 },
    { id: "turk_kahvesi", categoryId: "kahveler", name: "Türk Kahvesi", price: 80 },
    { id: "dibek_kahvesi", categoryId: "kahveler", name: "Dibek Kahvesi", price: 100 },
    { id: "menengic_kahvesi", categoryId: "kahveler", name: "Menengiç Kahvesi", price: 100 },
    { id: "damla_sakizli_kahve", categoryId: "kahveler", name: "Damla Sakızlı Kahve", price: 100 },
    { id: "filtre_kahve", categoryId: "kahveler", name: "Filtre Kahve", price: 130 },

    // SOĞUK KAHVELER
    { id: "ice_latte", categoryId: "soguk_kahveler", name: "Ice Latte", price: 150 },
    { id: "ice_americano", categoryId: "soguk_kahveler", name: "Ice Americano", price: 150 },

    // KAHVALTILAR
    { id: "serpme_kahvalti", categoryId: "kahvaltilar", name: "Serpme Kahvaltı (2 Kişilik)", price: 900 },
    { id: "menemen", categoryId: "kahvaltilar", name: "Menemen", price: 170 },
    { id: "omlet", categoryId: "kahvaltilar", name: "Omlet", price: 130 },

    // MAKARNALAR
    { id: "penne_arabiata", categoryId: "makarnalar", name: "Penne Arabiata", price: 250 },
    { id: "koru_soslu_makarna", categoryId: "makarnalar", name: "Körili Makarna", price: 170 },
    { id: "kremali_tavuklu_makarna", categoryId: "makarnalar", name: "Kremalı Tavuklu Makarna", price: 270 },
    { id: "manti", categoryId: "makarnalar", name: "Mantı", price: 300 },

    // SALATALAR
    { id: "sezar_salata", categoryId: "salatalar", name: "Sezar Salata", price: 250 },
    { id: "ton_balikli_salata", categoryId: "salatalar", name: "Ton Balıklı Salata", price: 230 },
    { id: "tavuklu_salata", categoryId: "salatalar", name: "Tavuklu Salata", price: 250 },

    // TATLILAR
    { id: "fistik_ruyasi", categoryId: "tatlilar", name: "Fıstık Rüyası", price: 200 },
    { id: "san_sebastian", categoryId: "tatlilar", name: "San Sebastian Cheesecake", price: 200 },
    { id: "suffle", categoryId: "tatlilar", name: "Sufle", price: 200 },
    { id: "mozaik_pasta", categoryId: "tatlilar", name: "Mozaik Pasta", price: 170 },
    { id: "waffle", categoryId: "tatlilar", name: "Waffle", price: 200 },
    { id: "trilice", categoryId: "tatlilar", name: "Trileçe", price: 200 },

    // FAST FOOD
    { id: "hamburger_menu", categoryId: "fast_food", name: "Hamburger Menü", price: 350 },
    { id: "karisik_pizza", categoryId: "fast_food", name: "Karışık Pizza", price: 300 },
    { id: "kasarli_tost", categoryId: "fast_food", name: "Kaşarlı Tost", price: 180 },
    { id: "karisik_tost", categoryId: "fast_food", name: "Karışık Tost", price: 200 },
    { id: "sucuklu_tost", categoryId: "fast_food", name: "Sucuklu Tost", price: 180 },
    { id: "kasarli_gozleme", categoryId: "fast_food", name: "Kaşarlı Gözleme", price: 200 },
    { id: "patatesli_gozleme", categoryId: "fast_food", name: "Patatesli Gözleme", price: 200 },
    { id: "cips", categoryId: "fast_food", name: "Cips", price: 150 },
    { id: "double_cips", categoryId: "fast_food", name: "Double Cips", price: 200 },
    { id: "sigara_boregi", categoryId: "fast_food", name: "Sigara Böreği", price: 130 },
    { id: "et_kofte", categoryId: "fast_food", name: "Et Köfte", price: 420 }
  ]
};
