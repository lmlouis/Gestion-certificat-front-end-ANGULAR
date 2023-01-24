# FrontGestionCertification
# Espace Admin

Ajouter certificat (selon voucher)

Supprimer certificat

Modifier les détails des certificats

Ajouter formulaire d’inscription des certificats

Consulter les inscrits avec validation 

# Espace Utilisateur
Inscription des certificats

Consulter les certificats

Proposer des certificats

Consulter résultat des certificats

page:
  * Login user
  * Rgister user
  * home
  * recherche
  * certificat
  * certificat details
  * user profil
  * Login user
  * Rgister user
  * admin dashboard
  * 404
## Le  Projet 
`ng new web-app`

`ng serve -o`

## Environnement de developpement
[environment.ts](/src/environments/environment.ts)
```
export const environment = {
  production: false,
  apiUri: 'http://localhost:9000',
  prefix: 'service'

};
```

## Bootstrapp
`npm install bootstrap@latest`

[styles.css](/src/styles.css)
```
@import "~bootstrap/dist/css/bootstrap.min.css"
```


ng g m route --routing

ng g c admin

ng g c user

ng g c home

ng g c notfound

Espace user

ng g m route/user-route --routing

ng g c /user/header

ng g c /user/footer

ng g c /user/sign-in

ng g c /user/sign-up

ng g s services/user/security-user

ng g class  modele/user/user

ng g guard route/guard/user-guard

ng g m route/certificat-route --routing
ng g c certificat
ng g c certificat/list-certificat
ng g c certificat/search-certificat
ng g c certificat/edit-certificat
ng g c certificat/inscription-certificat
ng g class  modele/certificat/certificat
ng g class  modele/certificat/inscription
ng g class  modele/user/profile

ng g s services/certificat/certificat
ng g s services/certificat/search-certificat


ng g c profile
ng g c profile/editer-profile

ng g c /admin/admin-sign-in

ng g c /admin/admin-sign-up




git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lmlouis/Gestion-certificat-front-end-ANGULAR.git
git push -u origin main



