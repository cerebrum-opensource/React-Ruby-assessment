class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.string :performer
      t.string :cost

      t.timestamps null: false
    end
  end
end
