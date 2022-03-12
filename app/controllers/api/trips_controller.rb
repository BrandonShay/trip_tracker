class Api::TripsController < ApplicationController

  before_action :set_user
  before_action :set_trip, only: [:show, :update, :destroy]

  def index
    render json: @user.trips
  end

  def show
    render json: @trip
  end

  def show 
    render json: @trip
  end 

  def create
    @trip = @user.trips.new(trip_params)
    if trip.save
      render json: @trip
    else 
    render json: { errors: @trip.errors }, status: :unprocessble_entity 
    end 
  end 

  def destroy
    @trip.destroy
    render json: { message: 'Trip Deleted' }
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_trip
    @trip = @user.trips.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:name)
  end







end