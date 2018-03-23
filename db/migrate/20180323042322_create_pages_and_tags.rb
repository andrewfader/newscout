class CreatePagesAndTags < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.timestamps
      t.string :url
    end
    create_table :tags do |t|
      t.timestamps
      t.string :name
    end
    create_table :page_tags do |t|
      t.timestamps
      t.belongs_to :page
      t.belongs_to :tag
      t.integer :count
    end
  end
end
