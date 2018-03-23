class AddIconAndAbbrevToTags < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :abbrev, :string
    add_column :tags, :icon, :string
  end
end
