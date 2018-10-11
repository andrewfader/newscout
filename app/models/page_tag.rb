class PageTag < ActiveRecord::Base
  belongs_to :page
  belongs_to :tag
  delegate :name, to: :tag
  delegate :url, to: :page
end
