# House Plant Management

## Description

Cette application web permet aux utilisateurs d'ajouter les différentes plantes de leur appartement ou maison et de suivre les besoins en eau de chacune (par exemple : 1L d'eau, tous les 3 jours).
Les utilisateurs doivent pouvoir ajouter des plantes, définir leurs besoins spécifiques en eau et recevoir des notifications pour les arrosages.

## Statut du projet

Open source

## Demarrer avec le projet

### Depandance

L'ensemble des packages utilisés sont référencé dans le fichier `requirements.txt`

### Outils utilisés

- SE : Ubuntu 22.04.2 LTS
- IDE : VS Code
- Bqse de donnée : SQL Lite
- Langage : Python 3.10.12
- Framework : Django Rest Framework

### Installation

Etapes d'intallation de quelques outils du projet

- Installation de l'environnement `python`

        $ sudo apt install software-properties-common
        $ sudo add-apt-repository ppa:deadsnakes/ppa
        $ sudo apt install python3.9

        $ sudo apt install -y python3-pip
        $ sudo apt install -y python3-venv

- Création de l'environnement virtuel grace a la commande

        $ python3 -m venv name_venv

### Démarrage

- Création d'un environnement virtuel :

        $ python3 -m venv <name_environment>

- Lancement de l'environnement avec :

        $ source ./<name_environment>/bin/activate

- Installation des dependances du projet

        $ pip install -r requirements.txt

- Effectuer une migration sur le serveur de base de donnee :

        $ python manage.py makemigrations

        $ python manage.py migrate

- Demarrer le serveur django :

        $ python manage.py runserver

## Contributeur

`@Quentin Monthe`

## Licence

RAS
