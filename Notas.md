
:::::: api
# por ser una subcarpeta de un git mayor se creo con el comando
rails new paypal-api --api -T --skip-git

# devise token auth (si, a lo terco... knock demasiadas cosas a pedal...)
https://dev.to/risafj/guide-to-devisetokenauth-simple-authentication-in-rails-api-pfj (guia...)
https://github.com/lynndylanhurley/devise_token_auth
rails g devise_token_auth:install User auth

# knock-backend (si, problemas de deprecation que hicieron super ladilla todo... y para no perder mas tiempo...)
https://medium.com/the-boujoukos-bulletin/basic-authentication-with-react-rails-knock-c10ff03e1399
rails g scaffold User email password_digest

# money...
https://stackoverflow.com/questions/1019939/what-is-the-best-method-of-handling-currency-money
rails g migration add_money_to_users money:decimal
add_column :items, :price, :decimal, :precision => 8, :scale => 2

rails g scaffold transaction amount:decimal sender:user:references receiver:user:references timestamp (ok)
    t.references :sender, foreign_key: { to_table: 'users' }
    t.references :receiver, foreign_key: { to_table: 'users' }

:::::: front
# la aplicacion react la cree con 
 npx create-react-app paypal-front

# le agrego react core (app - para maquetado)
https://material-ui.com/getting-started/installation/
 yarn add @material-ui/core
