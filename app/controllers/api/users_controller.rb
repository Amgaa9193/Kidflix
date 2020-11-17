class Api::UsersController < ApplicationController
     def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render '/api/users/show' #this should take us to /browse page
        else
            render json: @user.errors.full_messages
        end
    end 

    private 
    def user_params
       params.require(:user).permit(:email, :password)
    end 
end