class CreateDummies < ActiveRecord::Migration
  def change
    create_table :dummies do |t|
      
      t.string :name
      t.string :address
      t.string :contact
      t.string :time
      t.float :lng
      t.float :lat
      t.integer :code
      t.string :category
      
      t.timestamps null: false
    end
  end
end
