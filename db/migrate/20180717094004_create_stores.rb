class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :image
      t.string :name
      t.string :tel
      t.string :time
      t.string :addr
      t.string :price
      t.string :like
      t.integer :allday
      t.integer :first_cate
      t.integer :second_cate
      t.integer :third_cate
      t.integer :location_id

      t.timestamps null: false
    end
  end
end
