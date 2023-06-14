# Procédure d'installation

## Homebrew

Dans le terminal :
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## NodeJS

1. Dans le terminal :
	```bash
	brew install node
	```
2. Pour vérifier la version de Node.js, saisissez :
	```bash
	Node --version
	```

3. Et pour vérifier la version de npm, lancez cette commande :
	```bash
	npm --version
	```

## Git

Dans un terminal :
```bash
brew install git
```
1.  Collez le texte ci-dessous en indiquant l’adresse e-mail de votre compte sur GitHub.
    
    ```shell
    $ ssh-keygen -t ed25519-sk -C "YOUR_EMAIL"
    ```
    
    **Remarque :**  Si la commande échoue et que l’erreur  `invalid format`  ou  `feature not supported,`  se produit, vous utilisez peut-être une clé de sécurité matérielle qui ne prend pas en charge l’algorithme Ed25519. Entrez plutôt la commande suivante.
    
    ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
    ```
    
2.  Quand vous y êtes invité, appuyez sur le bouton de votre clé de sécurité matérielle.
    
3.  Quand vous êtes invité à entrer un fichier dans lequel enregistrer la clé, appuyez sur Entrée pour accepter l’emplacement du fichier par défaut.
    
    ```shell
    > Enter a file in which to save the key (/Users/YOU/.ssh/id_ed25519_sk): [Press enter]
    ```
    
4.  Quand vous êtes invité à taper une phrase secrète, appuyez sur  **Entrée**.
    
    ```shell
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```
    
5.  Ajoutez la clé SSH à votre compte sur GitHub. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte GitHub](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».

## Création db Google BigQuery

1. Aller sur https://firebase.google.com

2. Cliquer sur Get strated puis sur Ajouter un projet

3. Ensuite donner lui le nom que vous souhaitez et cliquer sur continer puis creer le projet

4. Une fois le projet créé, cliquer dans la nav-bar de gauche sur "Créer" puis "Cloud Firestore"

5. Créer un base de données, démmarer la en mode test, cliquer sur suivant et choisiser un emplacement puis "Activer"

1. Connectez-vous à votre console Google Cloud.

2. Accédez à la section "BigQuery".

3. Cliquez sur "Créer un nouveau jeu de données" (dataset).

4. Donnez-lui un nom (par exemple "myDataset").

5. Cliquez sur "Créer un jeu de données".

À ce stade, vous avez créé un espace de stockage pour vos tables, mais vous n'avez pas encore créé de table.

6. Cliquez sur le nom de votre jeu de données ("myDataset").


7. Cliquez sur "Créer une table".

8. Sélectionnez "Créer à partir d'un fichier CSV" et téléchargez votre fichier "contact.csv".

9. Donnez un nom à votre table (par exemple "contacts").

10. Sélectionnez l'option "Auto-détection des schémas et des options d'entrée" si votre fichier CSV a une première ligne d'en-tête. Sinon, vous devrez spécifier le schéma manuellement.

11. Cliquez sur "Créer une table".

## Création de la serviceAccounteKey.json

1. Allez sur la console Google Cloud.

2. Dans le menu de navigation de gauche, cliquez sur "IAM & Admin", puis sur "Service Accounts".

3. Cliquez sur "Create Service Account" en haut de la page.

4. Remplissez les détails du compte de service, comme le nom et la description, puis cliquez sur "Create".

5. Dans la section "Service account permissions", ajoutez le rôle approprié pour votre compte de service. Pour BigQuery, vous pourriez avoir besoin de rôles tels que "BigQuery Data Viewer" pour lire les données, "BigQuery Data Editor" pour modifier les données, et "BigQuery Data Owner" pour posséder les données. Cliquez ensuite sur "Continue".

6. Cliquez sur "Done" pour terminer la création du compte de service.

7. Vous serez redirigé vers la liste des comptes de service. Cliquez sur le compte de service que vous venez de créer.

8. Cliquez sur l'onglet "Keys", puis sur "Add Key" et enfin sur "Create new key".

9. Choisissez "JSON" comme type de clé, puis cliquez sur "Create".

10. Le fichier JSON de la clé sera alors automatiquement téléchargé sur votre ordinateur. Vous pouvez l'utiliser pour authentifier votre application.

## Utiliser le serveur API

1. Dans un terminal, cloner le repo avec cette commande en vous plaçant la ou vous souhaitez que le projet soit :
	```bash
	git clone git@github.com:apaturel/nosql.git
	```

1. Une fois le projet cloné, il faut installer les dépendances nécessaires pour firebase :
	```bash
	npm install --save express body-parser cors @google-cloud/bigquery    
	```

2. Lancer le projet :
	```bash
	node server.js          
	```
3. Ensuite, via le swagger.yaml, en l'important sur postman ou via https://editor.swagger.io/ , vous pouvez faire des appels a la bdd via L'API