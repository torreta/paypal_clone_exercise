class PasswordsController < ApplicationController
    
    def forgot
        if params[:email].blank? # check if email is present
         render json: {error: "Email not present"}
        end
    
        @user = User.find_by(email: params[:email]) # if present find user by email
        
        puts("USAURIO que encontre")
        puts( @user.id)
        puts( @user.email)
        puts( @user.password_digest)

        if @user.present?
            @user.update(password: "123456") 
            # @user.password_confirmation = "123456"
            # @user.save!

            puts("USAURIO que modifique")
            puts( @user.id)
            puts( @user.email)
            puts( @user.password_digest)

          # SEND EMAIL HERE (??)
          render json: {status: "ok", message:"su password ha cambiado con exito, su nueva clave temporalmente es '123456'"}
        else
          render json: {error: ["Email address not found. Please check and try again."]}, status: :not_found
        end
    end


    #   def reset
    #     token = params[:token].to_s
    
    #     if params[:email].blank?
    #       return render json: {error: 'Token not present’}
    #     end
    
    #     user = User.find_by(reset_password_token: token)
    
    #     if user.present? && user.password_token_valid?
    #       if user.reset_password!(params[:password])
    #         render json: {status: 'ok’}, status: :ok
    #       else
    #         render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    #       end
    #     else
    #       render json: {error:  [’Link not valid or expired. Try generating a new link.’]}, status: :not_found
    #     end
    #   end

    #   def change
    #     token = params[:token].to_s
    
    #     if params[:email].blank?
    #       return render json: {error: 'Token not present’}
    #     end
    
    #     user = User.find_by(reset_password_token: token)
    
    #     if user.present? && user.password_token_valid?
    #       if user.reset_password!(params[:password])
    #         render json: {status: 'ok’}, status: :ok
    #       else
    #         render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    #       end
    #     else
    #       render json: {error:  [’Link not valid or expired. Try generating a new link.’]}, status: :not_found
    #     end
    #   end
end
