class DmsController < ApplicationController
  before_action :set_dm, only: [:show, :update, :destroy]

  # GET /dms
  def index
    @dms = Dm.all

    render json: @dms
  end

  # GET /dms/1
  def show
    render json: @dm
  end

  # POST /dms
  def create
    @dm = Dm.new(dm_params)

    if @dm.save
      render json: @dm, status: :created, location: @dm
    else
      render json: @dm.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dms/1
  def update
    if @dm.update(dm_params)
      render json: @dm
    else
      render json: @dm.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dms/1
  def destroy
    @dm.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dm
      @dm = Dm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dm_params
      params.require(:dm).permit(:user_id, :target_id, :content)
    end
end
