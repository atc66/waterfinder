class MapsController < ApplicationController

	def index
		@locations = Location.all
	end

	private
	def location_params
    	params.require(:location).permit(:title, :lat, :lng)
  	end
	
end
