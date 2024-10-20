# Digitalisim - Luca Ciampi

Projet créé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts

Une fois le projet ouvert dans un éditeur de texte, lancer

### `npm install`

Pour installer les dépendences.

Puis,

### `npm start`

Pour lancer le projet en local.\
Ouvrir [http://localhost:3000](http://localhost:3000)

## Points d'amélioration

- [ ] Utiliser des chemins absolus en TypeScript plutôt que les chemins relatifs pour référencer les composants
- [ ] Ajouter le middleware de connexion
- [ ] Une fois la vue détaillé de l'utilisateur affichée, éviter de recharger les données lors du retour en arrière
- [ ] Probablement utiliser un contexte pour les filtres plutôt que de faire du prop-drilling
- [ ] Éviter d'écrire le CSS directement dans le composant, soit opter pour du CSS-in-HTML comme Tailwind, soit styled-components, soit un fichier CSS propre à chaque composant

## Commentaires
La plupart de mes projets ont été faits en Next.js, il a donc été un peu plus long pour moi pour comprendre le routage natif de React ainsi que d'autres bugs comme le chemin absolu en TypeScript.