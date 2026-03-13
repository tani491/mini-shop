// data.js

const products = [
    {
        id: 1,
        name: "Laptop Ultrabook",
        price: 1250.00,
        description: "Léger, puissant, autonomie exceptionnelle.",
        image: "img/laptop.jpeg", 
        category: "ordinateur"
    },
    {
        id: 2,
        name: "Smartphone Pro",
        price: 950.00,
        description: "Écran AMOLED, appareil photo 108MP.",
        image: "img/phone.jpeg", 
        category: "telephone"
    },
    {
        id: 3,
        name: "Casque Audio Hifi",
        price: 320.00,
        description: "Réduction de bruit active.",
        image: "img/casque.jpeg", 
        category: "casque"
    },
    {
        id: 4,
        name: "Samsung",
        price: 320.00,
        description: "Smartphone performant.",
        image: "img/samsung.jpeg",
        category: "telephone"
    },
    {
        id: 5,
        name: "Iphone",
        price: 320.00,
        description: "Dernier cri.",
        image: "img/iphone.jpeg",
        category: "telephone"
    },
    {
        id: 7,
        name: "Air pod",
        price: 320.00,
        description: "Son sans fil.",
        image: "img/airpod.jpeg", 
        category: "airpod"
    },
    {
        id: 8,
        name: "Tablette",
        price: 320.00,
        description: "Écran tactile.",
        image: "img/tablette.jpeg",
        category: "tablette"
    },
    {
        id: 9,
        name: "Chargeur",
        price: 320.00,
        description: "Charge rapide.",
        image: "img/chargeur.jpeg",
        category: "chargeur"
    },
    {
        id: 10,
        name: "Mini Wifi",
        price: 320.00,
        description: "Connexion portable.",
        image: "img/wifi.jpeg",
        category: "miniwifi"
    },
    {
        id: 11,
        name: "Television",
        price: 320.00,
        description: "Grande image.",
        image: "img/tele.jpeg", 
        category: "television"
    },
    {
        id: 12,
        name: "REFRIGIRATEUR",
        price: 320.00,
        description: "Froid optimal.",
        image: "img/frigo.jpeg",
        category: "frigo"
    },
       {
        id: 13,
        name: "Baffle Bluetooth",
        price: 320.00,
        description: "Son puissant.",
        image: "img/baffle.jpeg",
        category: "baffle",      // <--- ATTENTION : Il faut une virgule ICI !
        hidden: true             // <--- C'est ce qui cache le produit
    },

        {
        id: 14,
        name: "HP Pavilion",
        price: 850.00,
        description: "PC portable puissant.",
        image: "img/hp.jpeg",
        category: "ordinateur", // ICI : Mettez le même mot que dans le menu HTML ('ordinateur')
        hidden: true            // ICI : On le cache de la page d'accueil
    },

        {
        id: 15,
        name: "Samsung Galaxy S24 Ultra",
        price: 1219.00,
        description: "Le roi des smartphones Android, stylet intégré.",
        image: "img/samsung_s24.jpeg",
        category: "telephone",
        hidden: true
    },
    {
        id: 16,
        name: "Google Pixel 8 Pro",
        price: 999.00,
        description: "La meilleure photo sur smartphone, pur Android.",
        image: "img/pixel8.jpeg",
        category: "telephone",
        hidden: true
    },
    {
        id: 17,
        name: "OnePlus 12",
        price: 899.00,
        description: "Performance extrême et charge ultra-rapide.",
        image: "img/oneplus12.jpeg",
        category: "telephone",
        hidden: true
    },
    {
        id: 18,
        name: "Xiaomi 14 Pro",
        price: 799.00,
        description: "Excellent rapport qualité/prix.",
        image: "img/xiaomi14.jpeg",
        category: "telephone",
        hidden: true
    },

        {
        id: 19,
        name: "ASUS ROG Gamer",
        price: 1899.00,
        description: "PC portable conçu pour le gaming haute performance.",
        image: "img/asus_rog.jpeg",
        category: "ordinateur",
        hidden: true
    },
    {
        id: 20,
        name: "HP EliteBook Pro",
        price: 1450.00,
        description: "L'outil idéal pour les professionnels.",
        image: "img/hp_elite.jpeg",
        category: "ordinateur",
        hidden: true
    },
    {
        id: 21,
        name: "Lenovo ThinkPad",
        price: 1100.00,
        description: "Robuste et fiable pour le travail.",
        image: "img/thinkpad.jpeg",
        category: "ordinateur",
        hidden: true
    },
    {
        id: 22,
        name: "Microsoft Surface Pro",
        price: 1350.00,
        description: "Tablette hybride 2 en 1, ultra polyvalente.",
        image: "img/surface.jpeg",
        category: "ordinateur",
        hidden: true
    },

    {
        id: 23,
        name: "Sony Bravia XR 65\"",
        price: 1799.00,
        description: "Qualité d'image cinématographique.",
        image: "img/sony_bravia.jpeg",
        category: "television",
        hidden: true
    },
    {
        id: 24,
        name: "LG NanoCell 55\"",
        price: 899.00,
        description: "Couleurs vives et réalistes.",
        image: "img/lg_nano.jpeg",
        category: "television",
        hidden: true
    },
    {
        id: 25,
        name: "TCL 4K 50\"",
        price: 449.00,
        description: "L'entrée de gamme 4K abordable.",
        image: "img/tcl_tv.jpeg",
        category: "television",
        hidden: true
    },
    {
        id: 26,
        name: "Philips Ambilight",
        price: 1199.00,
        description: "Lumière d'ambiance pour une immersion totale.",
        image: "img/philips_ambi.jpeg",
        category: "television",
        hidden: true
    },

        {
        id: 27,
        name: "Chargeur Voiture Rapide",
        price: 29.00,
        description: "Recharge rapide sur la route.",
        image: "img/chargeur_voit.jpeg",
        category: "chargeur",
        hidden: true
    },
    {
        id: 28,
        name: "Chargeur Sans Fil MagSafe",
        price: 49.00,
        description: "Aimanté pour iPhone et Android.",
        image: "img/chargeur_sans_fil.jpeg",
        category: "chargeur",
        hidden: true
    },
    {
        id: 29,
        name: "PowerBank 20000mAh",
        price: 39.00,
        description: "Batterie externe de grande capacité.",
        image: "img/powerbank.jpeg",
        category: "chargeur",
        hidden: true
    },
    {
        id: 30,
        name: "Kit Câbles USB-C",
        price: 19.00,
        description: "Lot de 3 câbles résistants.",
        image: "img/cables.jpeg",
        category: "chargeur",
        hidden: true
    },


    {
        id: 31,
        name: "Bose QuietComfort",
        price: 329.00,
        description: "Le meilleur silence du marché.",
        image: "img/bose_qc.jpeg",
        category: "casque",
        hidden: true
    },
    {
        id: 32,
        name: "Beats Studio Pro",
        price: 299.00,
        description: "Style et basses puissantes.",
        image: "img/beats_studio.jpeg",
        category: "casque",
        hidden: true
    },
    {
        id: 33,
        name: "JBL Tune 760",
        price: 99.00,
        description: "Casque audio confortable et puissant.",
        image: "img/jbl_tune.jpeg",
        category: "casque",
        hidden: true
    },
    {
        id: 34,
        name: "Marshall Major IV",
        price: 129.00,
        description: "Le son rock légendaire.",
        image: "img/marshall.jpeg",
        category: "casque",
        hidden: true
    },


        {
        id: 35,
        name: "iPad Air 5",
        price: 729.00,
        description: "Puce M1, puissance de pro.",
        image: "img/ipad_air.jpeg",
        category: "tablette",
        hidden: true
    },
    {
        id: 36,
        name: "Samsung Galaxy Tab S9",
        price: 849.00,
        description: "Écran AMOLED sublime et stylet inclus.",
        image: "img/tab_s9.jpeg",
        category: "tablette",
        hidden: true
    },
    {
        id: 37,
        name: "Huawei MatePad Pro",
        price: 599.00,
        description: "Design fin et écran 120Hz.",
        image: "img/matepad.jpeg",
        category: "tablette",
        hidden: true
    },
    {
        id: 38,
        name: "Amazon Fire HD 10",
        price: 149.00,
        description: "Parfaite pour les multimédias.",
        image: "img/fire_hd.jpeg",
        category: "tablette",
        hidden: true
    },


        {
        id: 39,
        name: "Frigo Américain LG",
        price: 1299.00,
        description: "Double porte, distributeur d'eau.",
        image: "img/frigo_lg.jpeg",
        category: "frigo",
        hidden: true
    },
    {
        id: 40,
        name: "Frigo Samsung Table Top",
        price: 499.00,
        description: "Compact mais très spacieux.",
        image: "img/frigo_samsung.jpeg",
        category: "frigo",
        hidden: true
    },
    {
        id: 41,
        name: "Frigo Bosch",
        price: 799.00,
        description: "Silencieux et économique.",
        image: "img/frigo_bosch.jpeg",
        category: "frigo",
        hidden: true
    },
    {
        id: 47,
        name: "Mini Frigo Camping",
        price: 129.00,
        description: "Idéal pour les petites pièces.",
        image: "img/mini_frigo.jpeg",
        category: "frigo",
        hidden: true
    },


        {
        id: 48,
        name: "AirPods Max",
        price: 579.00,
        description: "Casque à réduction de bruit Apple.",
        image: "img/airpods_max.jpeg",
        category: "airpod",
        hidden: true
    },
    {
        id: 49,
        name: "AirPods 3",
        price: 199.00,
        description: "Son spatial dynamique.",
        image: "img/airpods_3.jpeg",
        category: "airpod",
        hidden: true
    },
    {
        id: 50,
        name: "Galaxy Buds Pro 2",
        price: 189.00,
        description: "L'alternative parfaite pour Android.",
        image: "img/galaxy_buds.jpeg",
        category: "airpod",
        hidden: true
    },
    {
        id: 51,
        name: "Sony LinkBuds S",
        price: 179.00,
        description: "Légers et confortables.",
        image: "img/linkbuds.jpeg",
        category: "airpod",
        hidden: true
    },

        {
        id: 52,
        name: "Routeur 4G Portable",
        price: 79.00,
        description: "Internet partout avec votre carte SIM.",
        image: "img/routeur_4g.jpeg",
        category: "miniwifi",
        hidden: true
    },
    {
        id: 53,
        name: "658",
        price: 99.00,
        description: "Étend votre couverture wifi.",
        image: "img/repeteur.jpeg",
        category: "miniwifi",
        hidden: true
    },
    {
        id: 54,
        name: "Clé USB Wifi 6",
        price: 29.00,
        description: "Connectez votre PC au wifi nouvelle génération.",
        image: "img/cle_usb_wifi.jpeg",
        category: "miniwifi",
        hidden: true
    },
    {
        id: 55,
        name: "TP-Link Archer C6",
        price: 59.00,
        description: "Routeur wifi 5 puissant.",
        image: "img/archer_c6.jpeg",
        category: "miniwifi",
        hidden: true
    },

        {
        id: 56,
        name: "Sony SRS-XB43",
        price: 199.00,
        description: "Enceinte portable waterproof et basses profondes.",
        image: "img/sony_xb.jpeg",
        category: "baffle",
        hidden: true
    },
    {
        id: 57,
        name: "Bose SoundLink Flex",
        price: 149.00,
        description: "Son clair et puissant, indestructible.",
        image: "img/bose_flex.jpeg",
        category: "baffle",
        hidden: true
    },
    {
        id: 58,
        name: "Ultimate Ears Boom 3",
        price: 129.00,
        description: "Design cylindrique 360°.",
        image: "img/ue_boom.jpeg",
        category: "baffle",
        hidden: true
    },
    {
        id: 59,
        name: "Harman Kardon Aura",
        price: 299.00,
        description: "Design premium et son ambiophonique.",
        image: "img/hk_aura.jpeg",
        category: "baffle",
        hidden: true
    },




    
];

