---
title: Poke baston
frontmatter___featuredImage: ../../img/poke-baston.png
date: "2019-11-01T22:12:03.284Z"
description: "C'est l'heure de la bagarre"
---

Projet personnel basé sur l'API <a href="https://pokeapi.co/" target="_blank">pokeapi</a>.

Le projet est déployé sur une Page Github visible <a href="https://alexlabrioche.github.io/poke-baston/" target="_blank">ici</a>

#### L'idée :

Utiliser l'api pokeapi autrement que pour faire le classique pokedex. Pokebaston est un jeu de combat basé sur l'aléatoire et la puissance de l'équipe choisie.

#### Détails :

- Chaque pokemon a des points de puissance l'utilisateur ne doit pas dépasser 600
- Le choix des pokemons de l'adversaire sont générés aléatoirement sur la même puissance maximum
- L'attaque de chaque pokemon est basé sur leur **power**, **effort** et **base_stat** délivrées par l'API
- Le taux de succès de base est de 80% puis dégradé si l'**effort** ou le **power** sont trop elevés
- Un pourcentage de réussite aléatoire est ajouté au taux de succès pour que chaques combats soient différents

#### Libs utilisées :

- React avec le bundle CRA (Create-react-app)
- CSS basé sur <a href="https://nostalgic-css.github.io/NES.css/" target="_blank">NES.css</a> et ré implémenté sur sous forme de composants
