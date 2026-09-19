# Bricks & Reviews

Statische affiliate-site over zelfgebouwde LEGO sets. Geen build tools nodig — het zijn gewoon HTML/CSS/JS-bestanden die je direct kunt hosten.

## Structuur

```
index.html              Homepage
about.html               Over-mij pagina
disclaimer.html          Affiliate-disclosure + LEGO trademark disclaimer
reviews/index.html       Overzicht van alle reviews
reviews/*.html           Losse reviewpagina's (1 per LEGO set)
css/style.css            Alle styling
js/main.js               Mobiel menu
robots.txt, sitemap.xml  Voor zoekmachines
```

## Een nieuwe review toevoegen

1. Kopieer een bestaand bestand in `reviews/`, bijv. `reviews/saturn-v-92176.html`, en hernoem het naar je nieuwe set (bijv. `reviews/x-wing-75355.html`).
2. Pas in dat nieuwe bestand aan: titel, setnummer, aantal stukjes, prijs, tekst, sterrenrating, en de kleur van het thumbnail-blokje (`style="background:#..."`).
3. Vervang de `#` in de twee `<a class="btn btn-bol">` / `<a class="btn btn-amazon">` links door je eigen affiliate-link (zie hieronder).
4. Voeg een kaartje toe aan `reviews/index.html` en (optioneel) aan `index.html` onder "Nieuwste reviews", met een link naar je nieuwe pagina.
5. Voeg de nieuwe URL toe aan `sitemap.xml`.

## Affiliate-links instellen

**Bol.com Partnerprogramma**
1. Meld je aan op https://partner.bol.com
2. Zoek de LEGO set op, genereer een partner-link
3. Plak die link in de `href="#"` van de bol.com-knop op de reviewpagina

**Amazon Associates**
1. Meld je aan op https://affiliate-program.amazon.com (of het .nl/.de programma)
2. Zoek de set, genereer een affiliate-link via SiteStripe
3. Plak die link in de `href="#"` van de Amazon-knop

Beide programma's moeten je site goedkeuren — zorg dat er voldoende originele content op staat (dus liever 5-10 echte reviews live voordat je je aanmeldt) en dat de disclaimer-pagina zichtbaar is, want dat vereisen ze.

## Eigen foto's toevoegen

De site gebruikt nu gekleurde placeholder-blokjes in plaats van foto's. Zet je eigen foto's in een map `images/`, en vervang bijvoorbeeld:

```html
<div class="review-thumb-large" style="background:#d6432b;">75192</div>
```

door:

```html
<img src="../images/millennium-falcon.jpg" alt="LEGO Millennium Falcon 75192" class="review-thumb-large" style="object-fit:cover;">
```

## Gratis live zetten

**Optie A — Netlify (drag & drop, geen account nodig om te testen)**
1. Ga naar https://app.netlify.com/drop
2. Sleep deze hele projectmap erin
3. Je krijgt direct een gratis `*.netlify.app` URL; later kun je er een eigen domein aan koppelen

**Optie B — Vercel of GitHub Pages**
Beide werken ook prima voor statische sites; zet de map in een git-repository en koppel die aan Vercel of GitHub Pages.

## SEO-tips voor de start

- Schrijf minimaal 400-600 woorden originele tekst per review (dit is al de richtlijn in de templates)
- Vul altijd de `<meta name="description">` in per pagina
- Voeg echte foto's toe van je eigen bouwwerk — uniek beeldmateriaal helpt enorm tegen sites die alleen doosfoto's overnemen
- Zodra je live staat: meld je site aan bij Google Search Console en dien `sitemap.xml` in
