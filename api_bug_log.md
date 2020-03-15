
+++++++++++++++++++++++++++++++++++++++++++++
To see why this extension failed to compile, please check the mkmf.log which can
be found here:

C:/Ruby26-x64/lib/ruby/gems/2.6.0/extensions/x64-mingw32/2.6.0/sqlite3-1.4.2/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in
C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/sqlite3-1.4.2 for inspection.
Results logged to
C:/Ruby26-x64/lib/ruby/gems/2.6.0/extensions/x64-mingw32/2.6.0/sqlite3-1.4.2/gem_make.out

An error occurred while installing sqlite3 (1.4.2), and Bundler cannot continue.
Make sure that `gem install sqlite3 -v '1.4.2' --source 'https://rubygems.org/'`
succeeds before bundling.

In Gemfile:
  sqlite3
         run  bundle binstubs bundler
Could not find gem 'sqlite3 (~> 1.4) x64-mingw32' in any of the gem sources
listed in your Gemfile.

solucion:

quitar la gema del gemfile (vamos a usar postgres)

++++++++++++++++++++++++++++++++++++++++++++++++

C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/bundler-2.1.4/lib/bundler/rubygems_integration.rb:346:in `block (2 levels) in replace_gem': Error loading the 'sqlite3' Active Record adapter. Missing a gem it depends on? sqlite3 is not part of the bundle. Add it to your Gemfile. (LoadError)
 

 solucion

 colocar la configuracion valida de postgres
 en database.yml

 +++++++++++++++++++++++++++++++++++

 rails aborted!
NoMethodError: undefined method `devise' for User (call 'User.connection' to establish a connection):Class

solucion:
 agregar   extend Devise::Models al modelo user... asi...

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  extend Devise::Models

  +++++++++++++++++++++++++++++++++++

NameError: uninitialized constant DeviseTokenAuthCreateUsers

solucion:

fallaba el 
rails g devise_token_auth:install User auth 
haciendo el archivo de la migracion, 
al ver el archivo mal formateado te dabas cuenta de volver a generarlo

++++++++++++++++++++++++++++++++++++

Rails: Can't verify CSRF token authenticity when making a POST request

solucion

class ApplicationController < ActionController::Base
        # este cambio solo es valido si todo ltus request son por el apo
        protect_from_forgery unless: -> { request.format.json? }
        include DeviseTokenAuth::Concerns::SetUserByToken
end

+++++++++++++++++++++++++++++++++++++++
NoMethodError (undefined method `flash=' for #<ActionDispatch::Request:0x0000000008746640>):

solucion
esa linea>: en config > aplication.rb


  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.middleware.use ActionDispatch::Flash <---- esta linea

++++++++++++++++++++++++++++++++++++++++++

localhost/:1 Access to fetch at 'http://localhost:3001/auth' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

solucion:

configuracion de cors en initializers 

**

++++++++++++++++++++++++++++++++

bundle install taking too long

solucion:

 gem install bundler --prerelease


++++++++++++++++

