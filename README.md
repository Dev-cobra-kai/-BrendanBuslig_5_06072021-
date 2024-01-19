#  Construisez un site e-commerce

Scénario :  

Félicitations ! Vous avez été recruté en tant que développeur front-end par Orinoco, une
entreprise de commerce en ligne.
Son credo ? Se démarquer des grands site e-commerce comme Amazon en créant des
applications thématiques ne vendant qu’un seul groupe de produits. Il y a par exemple Oribook
pour les livres ou Oritextil pour les vêtements.

Architecture générale  

L’application web sera composée de 4 pages :  

● une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;  
● une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;  
● une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end. Par exemple, pas de texte dans les champs date ;  
● une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.  

Produits présentés  

Dans un premier temps, une seule catégorie de produits sera présentée.
Choix à faire entre les 3 propositions suivantes :  

● ours en peluche faits à la main ;  
● caméras vintage ;  
● meubles en chêne.  

Planification de tests unitaires  

Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base de
code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat,
sans obligation d’écrire ces tests Expliquez quelles lignes seront testées, et quels
“test cases” seront envisagés.  

Informations complémentaires  

Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page
contenant un seul article aura un menu déroulant permettant à l'utilisateur de
choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur
ni reflétée dans la réponse du serveur.
Le code source devra être indenté et utiliser des commentaires. Il devra
également utiliser des fonctions globales.
Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.
