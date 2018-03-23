class Tag < ActiveRecord::Base
  has_many :page_tags
  has_many :pages, through: :page_tags

  def as_json(options={})
    {id: id, name: name, abbrev: abbrev}
  end
end
