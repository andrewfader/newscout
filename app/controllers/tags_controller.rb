class TagsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Tag.all
  end
end
