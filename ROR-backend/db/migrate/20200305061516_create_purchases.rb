class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.references :user
      t.references :album

      t.timestamps null: false
    end
  end
end
