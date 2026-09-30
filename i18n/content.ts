export const locales = ["en", "sr"] as const;
export type Locale = (typeof locales)[number];

// All copy lives here. This is the only file you edit to change text.
const en = {
  "meta": {
    "title": "Inventorey — warehouse, sites and requisitions in one app",
    "description": "Inventorey keeps stock, sites and requisitions in one app. The foreman orders from the field, you approve from your phone."
  },
  "nav": {
    "home": "Home",
    "how": "How it works",
    "features": "Features",
    "says": "Testimonials",
    "faq": "FAQ",
    "get": "Get started",
    "learn": "Learn more"
  },
  "hero": {
    "title": "Your warehouse and your site, finally on the same page.",
    "body": "Inventorey keeps stock, sites and requisitions in one app. The foreman orders from the field, you approve from your phone, and the numbers add up on their own.",
    "badgeN": "400+",
    "badgeLabel": "sites running on Inventorey",
    "photo": "Drop a site / warehouse photo — 2400×1400"
  },
  "intro": {
    "title": "An orderly warehouse for a construction firm",
    "stats": [
      {
        "n": "2 min",
        "label": "from request to approval"
      },
      {
        "n": "14",
        "label": "days free, no card"
      },
      {
        "n": "0",
        "label": "spreadsheets to maintain"
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Catalog & minimums",
        "body": "Categories, items, units and a floor for each item. Drop in the sheet you already keep and you're done."
      },
      {
        "n": "02",
        "title": "Requests from the field",
        "body": "A worker fills the cart and sends the request from site, signal or no signal."
      },
      {
        "n": "03",
        "title": "One-tap approval",
        "body": "Approve or reject, stock moves by itself, and a record stays of who asked for what and when."
      },
      {
        "n": "04",
        "title": "Month-end reporting",
        "body": "Consumption by site, by person and by period. Export it when the bookkeeper wants paper."
      }
    ]
  },
  "clients": [
    "Gradnja Marković",
    "NB Blok 23",
    "Zemun Magistralna",
    "Vračar Njegoševa",
    "Nordika Depo",
    "Studio Papir"
  ],
  "features": {
    "title": "Everything that goes missing between the warehouse and the site",
    "items": [
      {
        "title": "Catalog and stock",
        "body": "Items with a code, a unit and a minimum",
        "photo": "Warehouse shelving photo"
      },
      {
        "title": "Sites",
        "body": "Material, crew and cost kept per building",
        "photo": "Construction site photo"
      },
      {
        "title": "Requisitions and approvals",
        "body": "Nothing leaves the warehouse unsigned",
        "photo": "Foreman with a phone on site"
      },
      {
        "title": "Reports and roles",
        "body": "Owner, storeman, foreman and worker each see their own",
        "photo": "Office / paperwork photo"
      }
    ]
  },
  "why": {
    "title": "Why Inventorey?",
    "body": "Because it was built for firms where the storeman isn't an IT person and the foreman has no time for training.",
    "photo": "Wide site or yard photo — 2400×1200",
    "cards": [
      {
        "title": "Works without signal",
        "body": "A requisition is kept on the phone and sent the moment there's a network. Basements are normal on a site."
      },
      {
        "title": "Billed per company, not per head",
        "body": "Add the whole crew at no extra cost. The worker scanning shouldn't be a line in the budget."
      },
      {
        "title": "Your logo inside the app",
        "body": "White-label turns on with one switch, 1,900 RSD a month on top."
      }
    ]
  },
  "says": {
    "title": "What the firms using it say",
    "quote": "“Material used to live in a notebook and on the phone. Now I see who took what, from which site and at what time — and I stopped paying twice for the same cable.”",
    "name": "Nikola Marković",
    "role": "owner, Gradnja Marković d.o.o.",
    "photo": "Portrait — 800×1000"
  },
  "faq": {
    "title": "What we get asked most",
    "note": "Not answered here? Write to zdravo@inventorey.rs — we reply the same day.",
    "photo": "Material on a pallet — 1200×900",
    "items": [
      {
        "q": "Does every worker need an account?",
        "a": "No. A foreman can send the requisition for the whole crew, and accounts aren't charged per person.",
        "open": false
      },
      {
        "q": "How long does setting up take?",
        "a": "The account takes a few minutes. The catalog is the only real work — an afternoon, and only once.",
        "open": false
      },
      {
        "q": "How is it billed, and can we cancel?",
        "a": "A subscription per company — monthly, six-monthly or yearly, with a discount for longer terms. Cancel at any point.",
        "open": false
      },
      {
        "q": "Does it work on a site with no signal?",
        "a": "It does. A requisition is written and kept on the phone, then sent the moment there's a network — basements are the normal condition on a site, not the exception.",
        "open": true
      },
      {
        "q": "Where is our data kept?",
        "a": "On servers inside the European Union, with daily backups. Exporting everything to CSV is one click.",
        "open": false
      }
    ]
  },
  "cta": {
    "title": "Ready for the warehouse to finally add up?",
    "body": "First 14 days free, no card and no call from a salesperson.",
    "photo": "Wide site photo — 2400×1400",
    "blurb": "Serbian warehouse software for construction firms. Belgrade.",
    "email": "Leave your email",
    "subscribe": "Subscribe",
    "columns": [
      {
        "title": "Product",
        "links": [
          "How it works",
          "Features",
          "FAQ",
          "Pricing"
        ]
      },
      {
        "title": "Who it's for",
        "links": [
          "Contractors",
          "Warehouses",
          "Foremen",
          "Subcontractors"
        ]
      },
      {
        "title": "Support",
        "links": [
          "Guide",
          "Onboarding",
          "Contact",
          "Status"
        ]
      },
      {
        "title": "Company",
        "links": [
          "About",
          "Terms",
          "Privacy",
          "© 2026 Inventorey"
        ]
      }
    ]
  }
};

const sr: typeof en = {
  "meta": {
    "title": "Inventorey — magacin, gradilišta i trebovanja u jednoj aplikaciji",
    "description": "Inventorey drži zalihe, gradilišta i trebovanja u jednoj aplikaciji. Poslovođa naruči sa terena, ti odobriš sa telefona."
  },
  "nav": {
    "home": "Početna",
    "how": "Kako radi",
    "features": "Mogućnosti",
    "says": "Iskustva",
    "faq": "Pitanja",
    "get": "Otvori nalog",
    "learn": "Saznaj više"
  },
  "hero": {
    "title": "Magacin i gradilište, na istoj strani.",
    "body": "Inventorey drži zalihe, gradilišta i trebovanja u jednoj aplikaciji. Poslovođa naruči sa terena, ti odobriš sa telefona, a stanje se slaže samo.",
    "badgeN": "400+",
    "badgeLabel": "gradilišta vođeno kroz Inventorey",
    "photo": "Fotografija gradilišta ili magacina — 2400×1400"
  },
  "intro": {
    "title": "Uredan magacin za građevinsku firmu",
    "stats": [
      {
        "n": "2 min",
        "label": "od zahteva do odobrenja"
      },
      {
        "n": "14",
        "label": "dana besplatno, bez kartice"
      },
      {
        "n": "0",
        "label": "tabela koje neko održava"
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Katalog i minimumi",
        "body": "Kategorije, artikli, jedinice mere i donja granica po artiklu. Prevučeš postojeću tabelu i gotovo."
      },
      {
        "n": "02",
        "title": "Trebovanje sa terena",
        "body": "Radnik ubaci artikle u korpu i pošalje zahtev sa gradilišta, i kada nema signala."
      },
      {
        "n": "03",
        "title": "Odobrenje jednim dodirom",
        "body": "Odobriš ili odbiješ, stanje se skida samo, a ostaje trag ko je šta tražio i kada."
      },
      {
        "n": "04",
        "title": "Izveštaj na kraju meseca",
        "body": "Potrošnja po gradilištu, po čoveku i po periodu. Izvoz kada knjigovođa traži papir."
      }
    ]
  },
  "clients": [
    "Gradnja Marković",
    "NB Blok 23",
    "Zemun Magistralna",
    "Vračar Njegoševa",
    "Nordika Depo",
    "Studio Papir"
  ],
  "features": {
    "title": "Sve što se u građevini gubi između magacina i terena",
    "items": [
      {
        "title": "Katalog i zalihe",
        "body": "Artikli sa šifrom, jedinicom mere i minimumom",
        "photo": "Fotografija polica u magacinu"
      },
      {
        "title": "Gradilišta",
        "body": "Materijal, ljudi i troškovi odvojeno po objektu",
        "photo": "Fotografija gradilišta"
      },
      {
        "title": "Trebovanja i odobrenja",
        "body": "Ništa ne izlazi iz magacina bez potpisa u aplikaciji",
        "photo": "Poslovođa sa telefonom na terenu"
      },
      {
        "title": "Izveštaji i uloge",
        "body": "Vlasnik, magacioner, poslovođa i radnik vide svako svoje",
        "photo": "Kancelarija / papirologija"
      }
    ]
  },
  "why": {
    "title": "Zašto Inventorey?",
    "body": "Zato što je pravljena za firme u kojima magacioner nije IT čovek, a poslovođa nema vremena za obuku.",
    "photo": "Široka fotografija gradilišta — 2400×1200",
    "cards": [
      {
        "title": "Radi bez signala",
        "body": "Trebovanje se sačuva na telefonu i pošalje čim uhvati mrežu. Podrum je normalno stanje na gradilištu."
      },
      {
        "title": "Naplata po firmi, ne po čoveku",
        "body": "Dodaj celu ekipu bez doplate. Radnik koji skenira ne treba da bude stavka u budžetu."
      },
      {
        "title": "Tvoj logo u aplikaciji",
        "body": "White-label se uključuje jednim prekidačem, uz doplatu od 1.900 RSD mesečno."
      }
    ]
  },
  "says": {
    "title": "Šta kažu firme koje ga koriste",
    "quote": "„Ranije se materijal vodio u svesci i po telefonu. Sad vidim ko je šta uzeo, sa kog gradilišta i u koliko sati — i prestao sam da plaćam dva puta isti kabl.“",
    "name": "Nikola Marković",
    "role": "vlasnik, Gradnja Marković d.o.o.",
    "photo": "Portret — 800×1000"
  },
  "faq": {
    "title": "Ono što nas najčešće pitaju",
    "note": "Nema odgovora ovde? Piši na zdravo@inventorey.rs — javljamo se isti dan.",
    "photo": "Materijal na paleti — 1200×900",
    "items": [
      {
        "q": "Mora li svaki radnik da ima nalog?",
        "a": "Ne mora. Trebovanje može da pošalje poslovođa za celu ekipu, a nalozi se ne naplaćuju po čoveku.",
        "open": false
      },
      {
        "q": "Koliko traje uvođenje?",
        "a": "Nalog se otvara za nekoliko minuta. Katalog je jedini pravi posao — jedno popodne, i to samo jednom.",
        "open": false
      },
      {
        "q": "Kako se plaća i može li da se otkaže?",
        "a": "Pretplata po firmi — mesečno, na šest meseci ili godišnje, uz popust za duži period. Otkazivanje ide u svakom trenutku.",
        "open": false
      },
      {
        "q": "Radi li na gradilištu bez signala?",
        "a": "Radi. Trebovanje se sastavi i sačuva na telefonu, a pošalje se čim uhvati mrežu — podrum i suteren su normalno stanje na gradilištu, ne izuzetak.",
        "open": true
      },
      {
        "q": "Gde se čuvaju naši podaci?",
        "a": "Na serverima u Evropskoj uniji, uz dnevni bekap. Izvoz svega u CSV je jedan klik.",
        "open": false
      }
    ]
  },
  "cta": {
    "title": "Spreman da magacin konačno štima?",
    "body": "Prvih 14 dana besplatno, bez kartice i bez poziva prodavca.",
    "photo": "Široka fotografija gradilišta — 2400×1400",
    "blurb": "Srpski softver za magacin građevinskih firmi. Beograd.",
    "email": "Ostavi mejl",
    "subscribe": "Prijavi se",
    "columns": [
      {
        "title": "Proizvod",
        "links": [
          "Kako radi",
          "Mogućnosti",
          "Pitanja",
          "Cene"
        ]
      },
      {
        "title": "Za koga",
        "links": [
          "Izvođači",
          "Magacini",
          "Poslovođe",
          "Podizvođači"
        ]
      },
      {
        "title": "Podrška",
        "links": [
          "Uputstvo",
          "Uvođenje",
          "Kontakt",
          "Status"
        ]
      },
      {
        "title": "Firma",
        "links": [
          "O nama",
          "Uslovi korišćenja",
          "Privatnost",
          "© 2026 Inventorey"
        ]
      }
    ]
  }
};

export const content = { en, sr };
export type Content = typeof en;
