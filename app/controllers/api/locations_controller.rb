class Api::LocationsController < ApplicationController
  before_action :set_trip
  before_action :set_location, only: [:show, :update, :destroy]

  def index 
    render json: @trip.locations
  end

  def show 
    render json: @location
  end

  def create
    @location = @trip.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @location.destroy
    render json: { message: 'Location Deleted' }
  end

  private
    def set_trip
      @trip = Trip.locations.find(params[:trip_id])
    end

    def set_location
      @location = @trip.locations.find(params[:id])
    end

    def location_params
      params.require(:location).permit(:loc_name)
    end
  end

  
      






end