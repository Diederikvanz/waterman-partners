# QC-rapport — Waterman & Partners website

## Ronde 1

**Datum:** 11 juni 2026 · **Gecontroleerd:** index.html, css/style.css, js/main.js t.o.v. CONTENT.md

## Gecontroleerde punten

1. **Content-juistheid** — Alle teksten vergeleken met CONTENT.md: hero, over ons, kernwaarden, vier diensten, vacaturetekst, team (Andrea Waterman, Esther de Groot), contactgegevens. Adres (Jan van Goyenkade 12-2HG, 1075 HP Amsterdam) en KvK 34227168 correct overgenomen, ook in JSON-LD. Alle placeholder-content is in HTML-comments als [PLACEHOLDER] gemarkeerd. Spelling/grammatica Nederlands: geen fouten gevonden.
2. **Technische kwaliteit** — JSON-LD syntactisch valide (geverifieerd met parser). Geen dubbele id's. Alle nav-ankerlinks (#over-ons, #diensten, #team, #vacatures, #contact, #top, #main) hebben een bestaand doel. Heading-hiërarchie correct (één h1, daarna h2 per sectie, h3 binnen secties). Verwezen bestanden (css/style.css, js/main.js) bestaan.
3. **Toegankelijkheid & SEO** — lang="nl", meta description, Open Graph, canonical aanwezig. Skip-link, aria-labels op nav/toggle/logo, decoratieve SVG's met aria-hidden, formulierlabels gekoppeld, focus-visible-stijlen, prefers-reduced-motion gerespecteerd.
4. **JavaScript** — Alle selectors (.nav-toggle, #site-nav, #jaar, .reveal) matchen de HTML. Logica menu/jaartal/IntersectionObserver correct, incl. fallback en Escape-afhandeling. Geen fouten.

## Gevonden en direct gefixt

1. **Verzonnen telefoonnummer** — contact bevatte `href="tel:+31200000000"`, een niet in CONTENT.md voorkomend nummer. Link verwijderd; nu plain text "op aanvraag".
2. **Unescaped `&`** in meta description (regel 7) — vervangen door `&amp;`.
3. **Contrast eyebrow-labels** — goud (#c2a05a) op wit/tint haalde ~2,5:1 (WCAG AA vereist 4,5:1). Donkerder goud (#8a6d33, ~5,4:1) toegepast op lichte secties; origineel goud(licht) behouden op donkere secties.

## Openstaande aandachtspunten voor de klant

- **Bedrijfsstatus verifiëren:** volgens registervermeldingen is de onderneming mogelijk niet meer actief (zie CONTENT.md).
- **Aan te leveren:** telefoonnummer, e-mailadres bevestigen (info@watermanpartners.nl is een suggestie), actuele vacatures, teamsamenstelling (Esther de Groot verifiëren), privacyverklaring en algemene voorwaarden (footer-links zijn nu `href="#"`).
- **Contactformulier:** action="#" — backend/verwerking nog in te richten.
- **Geen og:image / favicon:** aan te leveren beeldmateriaal; aangeleverde bestanden (watermanpartners.jpg, logo_executive_search.gif) worden niet gebruikt — desgewenst inzetten of verwijderen.
- Footer-jaartal staat hardcoded op 2026 als no-JS-fallback en wordt door main.js dynamisch bijgewerkt (correct gedrag).

---

## Ronde 2

**Datum:** 11 juni 2026 (avond) · **Gecontroleerd:** herschreven index.html (echte content), nieuwe aanbevelingen.html, uitgebreide css/style.css — t.o.v. bijgewerkte CONTENT.md.

### 1. Content vs. bron — akkoord
- Steekproef 6+ aanbevelingen woordelijk vergeleken (Arthur de Boer/SRC, Ellen Swinkels/GVB, Elly van Leuven/ABN AMRO, Kees Jansen/ProQares, Patricia da Cruz/Tele2, Angelique Klar, Oscar Boesenach/TSI): citaten, namen, functies en bedrijven kloppen met CONTENT.md. Aanbevelingen.html bevat alle 19 referenties + 1 uitgelicht (3 op de homepage), inkortingen volgen de [...]-markeringen uit de bron.
- Contactgegevens correct op beide plekken én in JSON-LD: Koninginneweg 40B, 1075 CZ Amsterdam, 06 - 21838892, info@ en vacatures@watermanpartners.nl, KvK 34227168.
- Partners correct: Cindy Hunting (06 - 21681277, cindy@huntingcompliance.com, 21/17 jaar ervaring, sinds 2020 zelfstandig) en Diederik van Zantwijk (06 - 23071852, Nyenrode BSc/Erasmus MFI). Het verouderde "Esther de Groot" uit ronde 1 is verdwenen.
- Geen verzonnen feiten aangetroffen; alle teksten herleidbaar tot CONTENT.md.

### 2. Techniek — akkoord
- Geen dubbele id's per pagina (parser-check). JSON-LD valide (json.loads).
- Alle nav-ankers index.html (#over-ons, #diensten, #team, #opdrachtgevers, #vacatures, #contact, #stuur-cv, #top, #main) bestaan. Alle kruislinks aanbevelingen.html → index.html#... verwijzen naar bestaande id's.
- Heading-hiërarchie correct: index één h1 → h2 per sectie → h3; aanbevelingen h1 → h2.
- Verwezen bestanden bestaan: css/style.css, js/main.js, img/logo_executive_search.gif, img/watermanpartners.jpg. Alle nieuwe CSS-klassen (quote-grid-page, hero-compact, avatar-photo, e.d.) aanwezig in style.css.

### 3. Toegankelijkheid & SEO — akkoord
- Beide pagina's lang="nl"; alle 5 Engelstalige citaten op aanbevelingen.html hebben blockquote lang="en". Eigen title/description/canonical/OG per pagina; aria-current="page" op nav-item Aanbevelingen.
- Alt-teksten op logo en portretfoto; decoratieve SVG's aria-hidden; monogram-avatars aria-hidden. Eyebrow-contrastfix uit ronde 1 intact (donker goud op licht, licht goud op donker).

### 4. Consistentie — akkoord na fix
- Header/footer-structuur identiek op beide pagina's (logo linkt op aanbevelingen.html naar index.html — correct).
- Geen [PLACEHOLDER]/TODO-comments meer aanwezig.

### Gevonden en direct gefixt (ronde 2)
1. **algemene_voorwaarden_wp.pdf ontbrak** — beide footers linkten ernaar, maar het bestand stond niet in het project (404). Origineel (5 pag., PDF 1.5) gedownload van de live site www.watermanpartners.nl en in de projectroot geplaatst; links werken nu.
2. **Inconsistente telefoonnotatie** — mix van "06-21838892" en "06 - 21838892". Genormaliseerd naar "06 - 21838892" (notatie van de live site/CONTENT.md) op beide pagina's, óók voor Cindy en Diederik. tel:-href's ongewijzigd (+316...).

### Visuele controle
- Beide pagina's bekeken via preview (launch-config "waterman-site"): geen console-fouten of -warnings, geen mislukte netwerkrequests, 20 quote-cards renderen correct op aanbevelingen.html. Screenshot aanbevelingen-hero gecontroleerd: layout, logo en typografie in orde.

### Openstaand (ongewijzigd uit ronde 1, voor de klant)
- Contactformulier: action="#", backend nog in te richten.
- Favicon ontbreekt nog; og:image verwijst naar het logo-gif (werkt, maar een geschikter social-afbeelding is aan te raden).
- Bedrijfsstatus/registeradres (Jan van Goyenkade vs. Koninginneweg) ter bevestiging door de klant; site volgt het actuele websiteadres.
