class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def query
    url = URI.unescape(page_params['url'].split("u=")[1])
  end

  def tag
    tag = page_params['tag']
  end

  def page_params
    params.permit(:url, :tag)
  end
end
