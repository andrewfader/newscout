class Page < ActiveRecord::Base
  has_many :page_tags
  has_many :tags, through: :page_tags

  def tags
    tags = Tag.all.as_json.map do |tag|
      tag.merge(tagged: page_tags.where(tag_id: tag[:id]).present?)
    end

  end

end
