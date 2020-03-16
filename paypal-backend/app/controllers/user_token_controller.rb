class UserTokenController < Knock::AuthTokenController
    skip_before_action :verify_authenticity_token, :only => [:create, :index, :show]
end
