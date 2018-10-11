class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def query
    url = URI.unescape(page_params['url'])
    page = Page.find_or_create_by(url: url)
    render json: {page_id: page.id, tags: page.tags}
  end

  def tag
    tag_id = page_params['tag']
    page_id = page_params['page_id']
    @page_tag = PageTag.find_or_create_by(page_id: page_id, tag_id: tag_id)
  end

  def page_params
    params.permit(:url, :tag, :page_id)
  end
end
