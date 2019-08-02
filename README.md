# OSS117

> Des millions ? Vous êtes charmante. Vous voyez ce que ça fait un million déjà Larmina ?

Site web listant des citations des films OSS 117.

## Origine

Les citations ont été notés sur l'application Notes il y a plusieurs années en regardant le film. Quand j'ai vu que le domaine oss-117.fr était libre je me suis dit que c'était le moment d'en faire quelque chose. 


## Base de données

La liste Notes a donc été parsé en tableau JSON pour l'insérer dans une base MongoDB. Elle est hébergée chez mLab.

## Hébergement

Le site est hébergé chez [www.heroku.com](https://www.heroku.com/)

## API

End Points disponibles :

```
http://www.oss-117.fr/api/v1/replique/

http://www.oss-117.fr/api/v1/replique/[permalien]/

http://www.oss-117.fr/api/v1/replique/random/
```


## API Piquette

Autre fonctionnalité mise en place pour mettre la piquette à ses ami.e.s [exemple](http://www.oss-117.fr/piquette/BBastou).
```
http://www.oss-117.fr/piquette/Jack 
```
Il suffit de remplacer [Jack] par le prénom de votre choix.


## Todo list

- :heavy_check_mark: Ajouter liens vers Github / compte [Twitter](https://twitter.com/LucienBramard_).
- :heavy_check_mark: Bouton Random pour changer de citation.
- :heavy_check_mark: Référencement : [sitemap](http://www.oss-117.fr/sitemap.xml) généré automatiquement, compte Google Webmaster Tool & Google Analytics.
-  :white_large_square: Améliorer la version mobile (environ 70% du traffic).
-  :white_large_square: Interface Admin pour insérer / modifier les citations.
