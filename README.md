# PGPhotographie - Site Web

<div style="text-align: center;">
    <img src=frontend/src/assets/Logo3.png alt="Description de l'image" width="300" height="300">
</div>

Le projet "PGPhotographie" est un site web dédié à mettre en valeur le travail d'un photographe. Ce site offre une expérience immersive pour les amateurs de photographie, leur permettant de découvrir et d'apprécier les œuvres du photographe, de laisser des commentaires, de rester informés sur les prochains événements auxquels il participera, et même de le contacter directement.

## Fonctionnalités Principales

### 1. Visualisation des Photos
Les visiteurs du site peuvent parcourir et visualiser les photographies captivantes. Les images sont présentées de manière attrayante, mettant en valeur le talent du photographe.

### 2. Commentaires
Les utilisateurs ont la possibilité d'exprimer leur appréciation en laissant des commentaires sur la page Livre d'or. Cela crée une interaction entre l'artiste et son public, permettant des échanges constructifs et des retours sur les œuvres.

### 3. Prochains Événements
Les visiteurs peuvent consulter les informations sur les prochains événements auxquels le photographe participera. Cela inclut des expositions, des ateliers, etc. Les détails sur ces événements sont présentés de manière claire sur la page d'accueil, facilitant la participation et la planification pour ceux qui souhaitent y assister.

## Technologies
Voici un résumé des technologies utilisées dans votre projet "pgPhotographie" et les raisons de leur choix :

### Javascript :  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  
[Documentation de Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)  
JavaScript est un langage de programmation essentiel pour le développement web. Il est utilisé pour créer des fonctionnalités interactives et dynamiques sur le site.

### React : 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
[Documentation de React](https://fr.legacy.reactjs.org/)  
React est une bibliothèque JavaScript largement utilisée pour la création d'interfaces utilisateur interactives et réactives. Il a été choisi pour sa flexibilité, ses performances élevées et sa grande communauté de développeurs, ce qui en fait un excellent choix pour créer une expérience utilisateur immersive sur le site.

### Vite.js :  
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  
[Documentation de Vite](https://vitejs.dev/)    
Vite.js est un outil de développement rapide pour les applications web. Son utilisation permet d'accélérer le développement grâce à des temps de compilation plus courts, ce qui est essentiel pour assurer une réactivité optimale du site.

### Yarn :  
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)  
[Documentation de Yarn](https://yarnpkg.com/)  
Yarn est un gestionnaire de paquets JavaScript alternatif à npm. Il est utilisé pour gérer les dépendances et les scripts dans le projet, offrant une expérience de développement fluide et efficace.

### Strapi :  
![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)  
[Documentation de Strapi](https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)
Strapi est un système de gestion de contenu (CMS) flexible et open source. Il a été choisi pour sa capacité à créer rapidement des API REST sur mesure, ce qui facilite la gestion des photographies, des commentaires, et des informations sur les événements.

### Docker :
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)  
[Documentation de Docker](https://docs.docker.com/)
Docker est une plateforme de conteneurisation qui permet de déployer et d'isoler des applications dans des conteneurs. Son utilisation simplifie le déploiement et la gestion de l'application, assurant une portabilité et une stabilité accrues.

### Base de données PostgreSQL :
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)  
[Documentation de PostgreSQL](https://www.postgresql.org/docs/)  
PostgreSQL est une base de données relationnelle reconnue pour sa robustesse et ses fonctionnalités avancées. Elle a été choisie pour stocker les données du site, notamment les photographies, les commentaires et les informations sur les événements, tout en garantissant la sécurité et la performance.

### Nginx :
Nginx est un serveur web réputé pour sa haute performance et sa capacité à gérer le trafic web. Il a été utilisé pour servir l'application React et les API Strapi, garantissant ainsi une distribution efficace du contenu aux utilisateurs.

### Google reCAPTCHA :
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)    
[Documentation de Google Recaptcha](https://developers.google.com/recaptcha/docs/v3)  
Google reCAPTCHA est un service de vérification de l'authenticité des utilisateurs et de prévention des abus. Son utilisation dans le formulaire de commentaire renforce la sécurité en empêchant les activités frauduleuses et en garantissant que les messages proviennent de véritables utilisateurs.

## Prérequis :clipboard:  
Suivez ces étapes pour mettre en route le projet :

### Cloner le dépôt :computer:   
### Frontend - Partie developpement
```
cd frontend
```
Pour installer les dépendances nécessaire, exécutez les commandes suivantes:  
```
yarn install
```
Pour lancer le frontend: 
```
yarn develop
```
Le frontend devrait être accessible à l'adresse "http://localhost:5173/"
### Backend - Partie developpement
```
cd backend
```
Pour installer les dépendances nécessaire, exécutez les commandes suivantes:  
```
yarn install
```
Pour lancer le backend: 
```
yarn develop
```
### Création des images Docker :whale:
Pour créer les images Docker pour le frontend et le backend, exécutez les scripts build.sh dans les répertoires correspondants : 

Backend :  
```
cd backend
./build.sh
```
Frontend :  
```
cd frontend
./build.sh
```
Ensuite, nous poussons les images vers un registre Docker :  
```
docker push (nom de l'image docker)(le tag de l'image)
```
### Partie production
On se connecte au serveur distant via SSH :
```
ssh (nom d'utilisateur)@XX.XXX.XXX.XXX(adresse IP du serveur distant)
```
On entre notre mot de passe :
```
(nom d'utilisateur)@XX.XXX.XXX.XXX(adresse IP du serveur distant) password :
```
