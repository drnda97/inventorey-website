export const locales = ["en", "sr"] as const;
export type Locale = (typeof locales)[number];

// Temporary address until the inventorey domain is bought — change it here only.
// Shown as plain text in the footer; signups go through the form (app/api/subscribe).
export const contactEmail = "contact@wanderway.rs";

// All copy lives here. This is the only file you edit to change text.
const en = {
  "meta": {
    "title": "Inventorey — warehouse, sites and requisitions in one app",
    "description": "Inventorey keeps stock, sites and requisitions in one app. The foreman orders from the field, you approve from your phone. Now in development — sign up for early access."
  },
  "nav": {
    "home": "Home",
    "how": "How it works",
    "features": "Features",
    "roles": "Roles",
    "faq": "FAQ",
    "get": "Get early access",
    "learn": "Learn more"
  },
  "hero": {
    "title": "Your warehouse and your site, finally on the same page.",
    "body": "Inventorey keeps stock, sites and requisitions in one app. The foreman orders from the field, you approve from your phone, and the numbers add up on their own.",
    "badgeN": "Early access",
    "badgeLabel": "The app is in development — sign up to be among the first firms",
    "shotAlt": "Inventorey dashboard"
  },
  "intro": {
    "title": "An orderly warehouse for a construction firm",
    "stats": [
      {
        "n": "4",
        "label": "roles, each with its own view"
      },
      {
        "n": "1",
        "label": "price per company, not per head"
      },
      {
        "n": "EU",
        "label": "servers, backed up daily"
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Catalog & minimums",
        "body": "Categories, items, units and a floor for each item, so you know what to order before it runs out."
      },
      {
        "n": "02",
        "title": "Requests from the field",
        "body": "A worker fills the cart and sends the request straight from the site."
      },
      {
        "n": "03",
        "title": "One-tap approval",
        "body": "Approve or reject, stock moves by itself, and a record stays of who asked for what and when."
      },
      {
        "n": "04",
        "title": "Month-end reporting",
        "body": "Consumption by site, by person and by period. Export it to CSV when the bookkeeper wants paper."
      }
    ]
  },
  "features": {
    "title": "Everything that goes missing between the warehouse and the site",
    "items": [
      {
        "title": "Catalog and stock",
        "body": "Items with a code, a unit and a minimum",
        "photo": "Warehouse shelving stocked with material"
      },
      {
        "title": "Sites",
        "body": "Material, crew and cost kept per building",
        "photo": "Crew at work on a construction site"
      },
      {
        "title": "Requisitions and approvals",
        "body": "Nothing leaves the warehouse unsigned",
        "photo": "Foreman checking a phone on site"
      },
      {
        "title": "Reports and roles",
        "body": "Owner, storeman, foreman and worker each see their own",
        "photo": "Reviewing reports in the office"
      }
    ]
  },
  "why": {
    "title": "Why Inventorey?",
    "body": "Because it's built for firms where the storeman isn't an IT person and the foreman has no time for training.",
    "cards": [
      {
        "title": "Each role sees only its own",
        "body": "Owner, storeman, foreman and worker each get the screen they need — nothing to learn that isn't theirs."
      },
      {
        "title": "Billed per company, not per head",
        "body": "Add the whole crew at no extra cost. The worker sending a request shouldn't be a line in the budget."
      },
      {
        "title": "Your logo inside the app",
        "body": "White-label turns on with one switch, 1,900 RSD a month on top."
      }
    ]
  },
  "roles": {
    "title": "One app, four people who need it",
    "prev": "Previous role",
    "next": "Next role",
    "items": [
      {
        "role": "Owner",
        "body": "See where material goes and what each site costs, from your phone and without calling anyone. Stop paying twice for the same cable.",
        "photo": "Owner reviewing reports in the office",
        "src": "/photos/izvestaji-kancelarija.jpg"
      },
      {
        "role": "Storeman",
        "body": "Stock with minimums, every request arriving in one place, and every item that leaves the warehouse on the record.",
        "photo": "Storeman in a hi-vis vest holding a helmet",
        "src": "/photos/iskustvo-magacioner.jpg"
      },
      {
        "role": "Foreman",
        "body": "Order what the crew needs from the site and see the moment it's approved — no notebook, no chasing the warehouse.",
        "photo": "Foreman with a phone on site",
        "src": "/photos/trebovanje-teren.jpg"
      },
      {
        "role": "Worker",
        "body": "Fill a cart and send a request in a few taps. No paperwork, and no walk back to the warehouse to ask.",
        "photo": "Workers on a construction site",
        "src": "/photos/gradiliste-ekipa.jpg"
      }
    ]
  },
  "faq": {
    "title": "What we get asked most",
    "note": "Not answered here? Leave your email below and we'll get back to you.",
    "photo": "Stacked timber on pallets",
    "items": [
      {
        "q": "Is Inventorey available yet?",
        "a": "Not yet — the app is in development. Leave your email and we'll write as soon as early access opens."
      },
      {
        "q": "Do we pay for every worker?",
        "a": "No. The subscription is per company, so you can add the whole crew at no extra cost."
      },
      {
        "q": "How is it billed, and can we cancel?",
        "a": "A subscription per company — monthly, six-monthly or yearly, with a discount for longer terms. Cancel at any point."
      },
      {
        "q": "Can the app carry our logo?",
        "a": "Yes. White-label turns on with one switch, for 1,900 RSD a month on top of the subscription."
      },
      {
        "q": "Where is our data kept?",
        "a": "On servers inside the European Union, with daily backups. Exporting everything to CSV is one click."
      }
    ]
  },
  "cta": {
    "title": "Ready for the warehouse to finally add up?",
    "body": "Inventorey is in development. Leave your email and we'll let you know as soon as early access opens — no card, no sales call.",
    "blurb": "Warehouse software for construction firms, made in Serbia.",
    "contact": "Contact",
    "columns": [
      {
        "title": "Product",
        "links": [
          { "label": "How it works", "href": "#how" },
          { "label": "Features", "href": "#features" },
          { "label": "Roles", "href": "#roles" },
          { "label": "FAQ", "href": "#faq" }
        ]
      },
      {
        "title": "Who it's for",
        "links": [
          { "label": "Owners", "href": "#roles" },
          { "label": "Storemen", "href": "#roles" },
          { "label": "Foremen", "href": "#roles" },
          { "label": "Workers", "href": "#roles" }
        ]
      }
    ],
    "copyright": "© 2026 Inventorey"
  },
  "signup": {
    "label": "Email address",
    "placeholder": "you@company.com",
    "button": "Sign up",
    "sending": "Sending…",
    "success": "Thanks — you're on the list. We'll write as soon as early access opens.",
    "invalid": "That email address doesn't look right.",
    "error": "Something went wrong. Try again in a minute.",
    "consent": "We only use your email to tell you about early access. Reply to any of our emails to unsubscribe.",
    "mailSubject": "You're on the Inventorey early access list",
    "mailBody": "Hi,\n\nThanks for signing up. Inventorey is still in development — we'll write to you as soon as early access opens.\n\nIf you didn't sign up, ignore this email. To unsubscribe, just reply to it.\n\nThe Inventorey team"
  }
};

const sr: typeof en = {
  "meta": {
    "title": "Inventorey — magacin, gradilišta i trebovanja u jednoj aplikaciji",
    "description": "Inventorey drži zalihe, gradilišta i trebovanja u jednoj aplikaciji. Poslovođa naruči sa terena, ti odobriš sa telefona. Aplikacija je u izradi — prijavi se za rani pristup."
  },
  "nav": {
    "home": "Početna",
    "how": "Kako radi",
    "features": "Mogućnosti",
    "roles": "Uloge",
    "faq": "Pitanja",
    "get": "Rani pristup",
    "learn": "Saznaj više"
  },
  "hero": {
    "title": "Magacin i gradilište, na istoj strani.",
    "body": "Inventorey drži zalihe, gradilišta i trebovanja u jednoj aplikaciji. Poslovođa naruči sa terena, ti odobriš sa telefona, a stanje se slaže samo.",
    "badgeN": "Rani pristup",
    "badgeLabel": "Aplikacija je u izradi — prijavi se i budi među prvim firmama",
    "shotAlt": "Kontrolna tabla aplikacije Inventorey"
  },
  "intro": {
    "title": "Uredan magacin za građevinsku firmu",
    "stats": [
      {
        "n": "4",
        "label": "uloge, svaka sa svojim prikazom"
      },
      {
        "n": "1",
        "label": "cena po firmi, ne po čoveku"
      },
      {
        "n": "EU",
        "label": "serveri, uz dnevni bekap"
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Katalog i minimumi",
        "body": "Kategorije, artikli, jedinice mere i donja granica po artiklu, da znaš šta da naručiš pre nego što nestane."
      },
      {
        "n": "02",
        "title": "Trebovanje sa terena",
        "body": "Radnik ubaci artikle u korpu i pošalje zahtev direktno sa gradilišta."
      },
      {
        "n": "03",
        "title": "Odobrenje jednim dodirom",
        "body": "Odobriš ili odbiješ, stanje se skida samo, a ostaje trag ko je šta tražio i kada."
      },
      {
        "n": "04",
        "title": "Izveštaj na kraju meseca",
        "body": "Potrošnja po gradilištu, po čoveku i po periodu. Izvoz u CSV kada knjigovođa traži papir."
      }
    ]
  },
  "features": {
    "title": "Sve što se u građevini gubi između magacina i terena",
    "items": [
      {
        "title": "Katalog i zalihe",
        "body": "Artikli sa šifrom, jedinicom mere i minimumom",
        "photo": "Police u magacinu sa materijalom"
      },
      {
        "title": "Gradilišta",
        "body": "Materijal, ljudi i troškovi odvojeno po objektu",
        "photo": "Ekipa na gradilištu"
      },
      {
        "title": "Trebovanja i odobrenja",
        "body": "Ništa ne izlazi iz magacina bez potpisa u aplikaciji",
        "photo": "Poslovođa sa telefonom na terenu"
      },
      {
        "title": "Izveštaji i uloge",
        "body": "Vlasnik, magacioner, poslovođa i radnik vide svako svoje",
        "photo": "Pregled izveštaja u kancelariji"
      }
    ]
  },
  "why": {
    "title": "Zašto Inventorey?",
    "body": "Zato što se pravi za firme u kojima magacioner nije IT čovek, a poslovođa nema vremena za obuku.",
    "cards": [
      {
        "title": "Svaka uloga vidi samo svoje",
        "body": "Vlasnik, magacioner, poslovođa i radnik dobijaju ekran koji im treba — ništa što nije njihovo ne moraju da uče."
      },
      {
        "title": "Naplata po firmi, ne po čoveku",
        "body": "Dodaj celu ekipu bez doplate. Radnik koji šalje trebovanje ne treba da bude stavka u budžetu."
      },
      {
        "title": "Tvoj logo u aplikaciji",
        "body": "White-label se uključuje jednim prekidačem, uz doplatu od 1.900 RSD mesečno."
      }
    ]
  },
  "roles": {
    "title": "Jedna aplikacija, četiri čoveka kojima treba",
    "prev": "Prethodna uloga",
    "next": "Sledeća uloga",
    "items": [
      {
        "role": "Vlasnik",
        "body": "Vidiš gde ide materijal i koliko košta svako gradilište, sa telefona i bez ijednog poziva. Prestaješ da plaćaš dva puta isti kabl.",
        "photo": "Vlasnik pregleda izveštaje u kancelariji",
        "src": "/photos/izvestaji-kancelarija.jpg"
      },
      {
        "role": "Magacioner",
        "body": "Zalihe sa minimumima, svi zahtevi na jednom mestu i trag za svaki artikal koji izađe iz magacina.",
        "photo": "Magacioner u fluorescentnom prsluku sa šlemom",
        "src": "/photos/iskustvo-magacioner.jpg"
      },
      {
        "role": "Poslovođa",
        "body": "Naruči sa gradilišta ono što ekipi treba i vidi čim je odobreno — bez sveske i bez jurenja magacina.",
        "photo": "Poslovođa sa telefonom na terenu",
        "src": "/photos/trebovanje-teren.jpg"
      },
      {
        "role": "Radnik",
        "body": "Ubaci artikle u korpu i pošalji zahtev u par dodira. Bez papira i bez odlaska do magacina da pitaš.",
        "photo": "Radnici na gradilištu",
        "src": "/photos/gradiliste-ekipa.jpg"
      }
    ]
  },
  "faq": {
    "title": "Ono što nas najčešće pitaju",
    "note": "Nema odgovora ovde? Ostavi mejl ispod i javićemo ti se.",
    "photo": "Građa složena na paletama",
    "items": [
      {
        "q": "Da li je Inventorey već dostupan?",
        "a": "Još nije — aplikacija je u izradi. Ostavi mejl i javićemo ti čim otvorimo rani pristup."
      },
      {
        "q": "Da li plaćamo za svakog radnika?",
        "a": "Ne. Pretplata je po firmi, pa možeš da dodaš celu ekipu bez doplate."
      },
      {
        "q": "Kako se plaća i može li da se otkaže?",
        "a": "Pretplata po firmi — mesečno, na šest meseci ili godišnje, uz popust za duži period. Otkazivanje ide u svakom trenutku."
      },
      {
        "q": "Može li aplikacija da nosi naš logo?",
        "a": "Može. White-label se uključuje jednim prekidačem, uz doplatu od 1.900 RSD mesečno na pretplatu."
      },
      {
        "q": "Gde se čuvaju naši podaci?",
        "a": "Na serverima u Evropskoj uniji, uz dnevni bekap. Izvoz svega u CSV je jedan klik."
      }
    ]
  },
  "cta": {
    "title": "Spreman da magacin konačno štima?",
    "body": "Inventorey je u izradi. Ostavi mejl i javićemo ti čim otvorimo rani pristup — bez kartice i bez poziva prodavca.",
    "blurb": "Softver za magacin građevinskih firmi, napravljen u Srbiji.",
    "contact": "Kontakt",
    "columns": [
      {
        "title": "Proizvod",
        "links": [
          { "label": "Kako radi", "href": "#how" },
          { "label": "Mogućnosti", "href": "#features" },
          { "label": "Uloge", "href": "#roles" },
          { "label": "Pitanja", "href": "#faq" }
        ]
      },
      {
        "title": "Za koga",
        "links": [
          { "label": "Vlasnici", "href": "#roles" },
          { "label": "Magacioneri", "href": "#roles" },
          { "label": "Poslovođe", "href": "#roles" },
          { "label": "Radnici", "href": "#roles" }
        ]
      }
    ],
    "copyright": "© 2026 Inventorey"
  },
  "signup": {
    "label": "Email adresa",
    "placeholder": "ti@firma.rs",
    "button": "Prijavi se",
    "sending": "Šaljem…",
    "success": "Hvala — na listi si. Javićemo ti čim otvorimo rani pristup.",
    "invalid": "Ova email adresa ne izgleda ispravno.",
    "error": "Nešto nije u redu. Pokušaj ponovo za minut.",
    "consent": "Mejl koristimo samo da ti javimo za rani pristup. Za odjavu samo odgovori na bilo koji naš mejl.",
    "mailSubject": "Na listi si za rani pristup Inventoreyu",
    "mailBody": "Zdravo,\n\nHvala na prijavi. Inventorey je još u izradi — javićemo ti čim otvorimo rani pristup.\n\nAko se nisi ti prijavio, slobodno ignoriši ovaj mejl. Za odjavu samo odgovori na njega.\n\nInventorey tim"
  }
};

export const content = { en, sr };
export type Content = typeof en;
