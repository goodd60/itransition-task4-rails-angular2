class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

 # protect_from_forgery with: :exception
skip_before_action :verify_authenticity_token 
  def index
     @res=params[:str]
     respond_to do |format|
     str_re = /(([A-Z])|([a-z])|(\!)|(\@)|(\#)|(\$)|(\%)|(\&)|(\<)|(\>)|(\(\s*\)))/
     rez = str_re.match(@res)
     unless rez
         begin
            @res=eval(@res);
         rescue SyntaxError
            format.json { render json: {some:"Incorect input"} }
        rescue 
            format.json { render json: {some:"Incorect input"} }
        else
            if @res==""
                format.json { render json: {some:"Incorect input"} }
            else
            format.json { render json: {some:(@res)} }  
            end
        end      
    else
        format.json { render json: {some:"Incorect input"} }
     end
   
    end
  end
end
