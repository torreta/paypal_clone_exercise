
:::::: api
# por ser una subcarpeta de un git mayor se creo con el comando
rails new paypal-api --api -T --skip-git

# devise token auth (si, a lo terco... knock demasiadas cosas a pedal...)
https://github.com/lynndylanhurley/devise_token_auth
rails g devise_token_auth:install User auth

:::::: front
# la aplicacion react la cree con 
 npx create-react-app paypal-front

# le agrego react core (app - para maquetado)
https://material-ui.com/getting-started/installation/
 yarn add @material-ui/core
