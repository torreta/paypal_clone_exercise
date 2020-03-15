class ApplicationController < ActionController::Base
        # este cambio solo es valido si todo ltus request son por el apo
        protect_from_forgery unless: -> { request.format.json? }
        include DeviseTokenAuth::Concerns::SetUserByToken
end
