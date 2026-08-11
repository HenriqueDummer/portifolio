# Point do Açaí, Concept 01: Bloom, Tropical Editorial

**Design read:** local food/beverage landing page for an açaí shop, for a
design-conscious younger urban audience, with a vibrant modern-Amazonian
tropical language, leaning toward bold sans display type and confident
asymmetric composition.

100% HTML/CSS/JS puro, sem dependências além do Google Fonts. Sem build step.

## Dials

- **DESIGN_VARIANCE 7**, asymmetric split hero, asymmetric bento menu (one
  big featured tile + three small ones), off-grid blobs behind the hero
  visual. Not chaotic: grid stays legible, negative space stays generous.
- **MOTION_INTENSITY 6**, fluid CSS reveals on scroll (IntersectionObserver),
  a slow floating loop on the hero bowl, hover lift on cards/buttons. All
  motion collapses to static under `prefers-reduced-motion: reduce`.
- **VISUAL_DENSITY 3**, airy section padding, max 2-4 content elements per
  section, no data-dump lists (toppings are a pill cloud, not a table).

## Palette

| Token | Hex | Use |
|---|---|---|
| Base background | `#f5f8ef` | Light theme, most sections |
| Deep band background | `#133328` | Sobre section + footer only (section-level tint, not a theme flip) |
| Text on light bg | `#16241c` | Body/headline text on light sections |
| Text on dark bg | `#eef4ea` | Body/headline text on the deep band |
| Accent (only accent, used identically everywhere) | `#d81b5f` | CTAs, links, price highlights, active dots, hover states |
| Secondary neutral | `#6b7d68` | Borders, secondary/muted text only, never a competing accent |

## Type

- Display/headlines: **Bricolage Grotesque** (500/700/800, optical sizing)
- Body/UI: **Plus Jakarta Sans** (400-700)
- Loaded via `<link>` to Google Fonts (static site, no build step, so this is
  the correct approach here).
- Emphasis inside headlines uses italic/bold of the same family (see the hero
  headline), never a mixed font family for one word.

## Shape system (applied everywhere, no exceptions)

- Cards, photo tiles, menu tiles → **16px** radius
- Inputs → **8px** radius (documented for consistency; this page has no form
  fields, but any added later must follow this radius)
- Buttons → **full pill** radius

## Layout families used (one per section, no repeated zigzag)

1. **Hero**, Asymmetric Split Hero (text left, `tigela.png` right, floating
   blobs)
2. **Sobre**, full-width stacked on the dark green band, single full-bleed
   photo below (not a text/image split, avoids repeating the hero pattern)
3. **Galeria**, horizontal scroll-snap carousel with arrows + dots
4. **Cardápio**, asymmetric bento (1 large + 3 small tiles) + wrapped
   topping pill cloud
5. **Depoimentos**, horizontal scroll strip of 3 quote cards
6. **Localização**, split info list / Google Maps iframe (the only other
   split besides the hero)
7. **Footer**, multi-column (brand+social, nav, contact, hours)

## Before publishing to a real client

- [ ] Trocar o número de WhatsApp `5591999999999`, aparece no rodapé, botão
      flutuante e seção de localização
- [ ] Trocar o link `https://www.anota.ai/` pelo link real do cardápio digital
      do cliente (header, hero, seção de cardápio e localização)
- [ ] Atualizar endereço e horário de funcionamento (seção `#localizacao` e
      rodapé)
- [ ] Atualizar as coordenadas do `<iframe>` do Google Maps e do bloco `geo`
      no JSON-LD (`<head>`)
- [ ] Trocar os links de Instagram/Facebook no rodapé
- [ ] Ajustar tamanhos, preços e quantidade de complementos grátis por
      tamanho conforme o negócio real, os preços aparecem no HTML visível
      (seção `#cardapio`) e no bloco JSON-LD do `<head>`; mantenha os dois
      sincronizados
- [ ] As fotos em `public/acai_1.jpg`-`acai_5.jpg` são genéricas (não são do
      cliente real), substituir pelas fotos reais do produto/ambiente antes
      de publicar
- [ ] Ajustar nome do negócio, textos e depoimentos
- [ ] Atualizar o crédito de desenvolvimento no rodapé

## Visualizar

Abra `index.html` diretamente no navegador, ou sirva a pasta com um servidor
estático:

    npx serve .
    # ou
    python3 -m http.server 8080
