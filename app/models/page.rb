class Page < ActiveRecord::Base
  has_many :page_tags
  has_many :tags, through: :page_tags

end
