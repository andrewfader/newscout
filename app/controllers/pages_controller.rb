class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def query
    url = URI.unescape(page_params['url'])
    page = Page.find_or_create_by(url: url)
    render json: {page_id: page.id, tags: page.tags}
  end

  def tag
    tag_id = page_params['tag_id']
    page_id = page_params['page_id']
    if page_tag = PageTag.where(page_id: page_id, tag_id: tag_id).first
      page_tag.destroy
    else
      PageTag.create(page_id: page_id, tag_id: tag_id)
    end
    head :ok
  end

  def page_params
    params.permit(:url, :tag, :page_id)
  end
end
