class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.string :shipment_id
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
