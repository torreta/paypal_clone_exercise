# Be sure to restart your server when you modify this file.

class ApplicationController < ActionController::Base
    protect_from_forgery unless: -> { request.format.json? }
  end

  # ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end