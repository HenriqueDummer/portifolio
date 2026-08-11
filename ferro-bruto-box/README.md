# Ferro Bruto Box, Concept 01: Forja, Industrial Strength Editorial

**Design read:** landing page para uma academia de força boutique
(powerlifting, CrossFit, levantamento olímpico), para um público que treina
por números, não por estética. A linguagem é galpão industrial cru, não
tropical nem clássico-elegante: concreto e chapa de aço, óxido/ferrugem como
única cor de destaque contra um quase-preto, tipografia condensada pesada e
bordas duras, com um motivo de canto cortado (como uma chapa estêncil) e
composição arquitetônica direta — cortes diagonais e blocos deslocados em
vez de curvas.

100% HTML/CSS/JS puro, sem dependências além do Google Fonts. Sem build step.

## Dials

- **DESIGN_VARIANCE 8**, hero com corte diagonal, grade de treinadores em
  zigue-zague, galeria em mosaico (masonry), colagem assimétrica no
  manifesto. Levemente mais alto que o Point do Açaí (7) porque o idioma
  industrial se apoia em disrupção geométrica dura (ângulos/deslocamentos),
  não em blobs orgânicos.
- **MOTION_INTENSITY 7**, reveals de borda dura (sem easing "flutuante"),
  contagem numérica animada na faixa de números, hover com "snap" mecânico
  (leve scale + sombra dura) em vez de um lift suave. Todo movimento colapsa
  sob `prefers-reduced-motion: reduce`.
- **VISUAL_DENSITY 6**, mais denso que o Point do Açaí (3) porque o conteúdo
  é numérico por natureza (planos, estatísticas, grade de horários); ainda
  assim sem poluição — a densidade vem de números/rótulos com propósito, não
  de decoração.

## Palette

| Token | Hex | Uso |
|---|---|---|
| `--bg` (vazio carvão) | `#121210` | Fundo base, maioria das seções |
| `--bg-surface` (concreto) | `#1e1e1a` | Cards, painéis, faixa de números |
| `--border` (aço bruto) | `#38372e` | Linhas finas, divisores, bordas de card |
| `--text` (calcário) | `#f2efe4` | Texto em fundo escuro |
| `--text-muted` (cinza cimento) | `#8f8c80` | Texto secundário, legendas |
| `--accent` (óxido) | `#ff4a1f` | CTAs, preços, números, borda do plano em destaque |
| `--bg-light` (concreto claro) | `#e8e4d8` | Única seção clara (Sobre/manifesto) |
| `--text-on-light` | `#17160f` | Texto na faixa clara |

Sem segunda cor de destaque concorrente — óxido é usado de forma idêntica
em todos os lugares onde aparece.

## Type

- Display/títulos: **Anton** (caixa alta, peso condensado póster)
- Corpo/UI: **IBM Plex Sans** (400–700)
- Números/estatísticas: **IBM Plex Mono** (preços, contadores, grade de
  horários) — textura de placar/cronômetro reforçando a identidade
  "orientada a números" da academia
- Carregadas via `<link>` do Google Fonts (site estático, sem build step).

## Shape system (aplicado em todo lugar, sem exceções)

- Cards / tiles de foto → **6px** de radius
- Inputs (nenhum nesta página, documentado para consistência) → **4px**
- Botões → **2px** (quase quadrado)
- Motivo assinatura: **canto superior direito cortado** (`clip-path`) nos
  botões primários, no card do plano em destaque e no card flutuante de
  localização — o equivalente, neste site, ao botão pill do Point do Açaí ou
  à suavidade uniforme da Barbearia Império.

## Layout families usadas (uma por seção, sem zigue-zague repetido)

1. **Hero**, Diagonal Clip Hero — título Anton descomunal saindo do canto
   superior esquerdo, painel de foto com borda cortada na diagonal à
   direita, chip flutuante de métrica sobre a foto
2. **Números** (faixa sem âncora de nav) — faixa full-bleed escura, 4
   estatísticas em mono com contagem animada
3. **Sobre**, colagem-manifesto na única faixa clara — parágrafo-manifesto +
   foto inserida em ângulo sobrepondo o texto (não é um split 50/50)
4. **Treinadores**, grade escalonada — cards de treinador em zigue-zague
   vertical, foto duotone + tag de especialidade + badge de PR/credencial
5. **Planos**, cards de preço com tier em destaque — 3 colunas, card central
   elevado com borda óxido, canto cortado e fita "MAIS PROCURADO"
6. **Galeria**, mosaico verdadeiro (masonry) — tiles de altura irregular,
   hover de preto-e-branco para cor com legenda de equipamento
7. **Grade de Treinos**, placar de horários — tags de modalidade + tabela de
   dias × horários com scroll horizontal, dígitos em mono
8. **Depoimentos**, notas fixadas/rotacionadas — cards em fileira
   escalonada, rotação alternada (±2°), efeito de mural de cortiça
9. **Localização**, split sobreposto invertido — mapa à esquerda, card de
   informações sobrepondo a borda direita do mapa (canto cortado)
10. **CTA final** — faixa full-bleed com padrão diagonal de "fita de
    perigo" (óxido/carvão)
11. **Rodapé**, multi-coluna (marca+social / navegação / contato+horário /
    crédito de desenvolvimento), estilo "chapa de aço" com rebites nos
    cantos

Botão flutuante de WhatsApp e "voltar ao topo" presentes como plumbing
compartilhado (apenas com tokens de cor/forma aplicados).

## Antes de publicar para um cliente real

- [ ] Trocar o número de WhatsApp `5531999999999` (cabeçalho, hero, planos,
      localização, CTA final, rodapé, botão flutuante)
- [ ] Atualizar endereço e horário de funcionamento (`#localizacao` e
      rodapé)
- [ ] Atualizar as coordenadas do `<iframe>` do Google Maps e o bloco `geo`
      do JSON-LD (`<head>`)
- [ ] Trocar os links de Instagram/TikTok no rodapé e no botão flutuante
- [ ] Ajustar nomes/preços dos planos — mantenha o HTML visível (`#planos`)
      e o bloco `makesOffer` do JSON-LD sincronizados
- [ ] Substituir todas as imagens em `public/` (são placeholders SVG
      gerados, não fotos reais) pelas fotos reais da academia, equipamentos
      e treinadores: `banner.svg`, `sobre.svg`, `treino_1.svg`–`treino_7.svg`,
      `coach_1.svg`–`coach_4.svg`
- [ ] Ajustar nome do negócio, texto do manifesto, nomes/especialidades dos
      treinadores e depoimentos
- [ ] Confirmar grade de horários e modalidades reais (`#grade`)
- [ ] Atualizar o crédito de desenvolvimento no rodapé (`Desenvolvido por
      Webify`, placeholder)

## Visualizar

Abra `index.html` diretamente no navegador, ou sirva a pasta com um servidor
estático:

    npx serve .
    # ou
    python3 -m http.server 8080
