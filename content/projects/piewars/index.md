---
title: Star Wars Data-Viz
date: "2019-12-01T22:12:03.284Z"
description: "The Pie-wars of charts"
---

##### <a href="https://alexlabrioche.github.io/pie-wars/" target="_blank">Le projet est déployé sur une Page Github, visible ici</a>

#### L'idée :

Utiliser l'api Swapi pour faire de la Data-Viz.

#### Détails :

- J'ai scrappé l'API **Swapi** pour récuperer toute la donnée en local
- chaque donnée à visualiser est associé à une **couleur** (eye_color, skin_color...)
- La donnée est triée sur forme de **Pie Chart** ou **Bar Chart** selon le type
- La liste des personnages/vaisseaux/espèces est mise a jour selon les filtres appliqués

#### Libs utilisées :

- React avec le bundle CRA (Create-react-app)
- API <a href="https://swapi.co/" target="_blank">SWAPI</a>
- React Chart Js
