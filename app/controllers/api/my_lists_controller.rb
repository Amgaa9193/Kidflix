class Api::MyListsController < ApplicationController
    # def show 
    #     @my_list = MyList.find(params[:id])
    #     render :show
    # end 

    def index 
        @movies = Movie.joins(:my_lists).where('my_lists.user_id = ?', current_user.id)
        render :index
        # /mylist 
    end 

    def create 
        @my_list = MyList.new(mylist_params)
        @my_list.user_id = current_user.id 

        if @my_list.save 
            render :show
        else 
            render json: ['error'], status: 404 
        end 
    end 

    def destroy 
        my_list = MyList.find(params[:id])
        my_list.destroy 
        render :show
    end 

    private
    def mylist_params
        self.params.require(:my_list).permit(:movie_id)
    end 
end
