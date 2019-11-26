class AddPrimaryToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :primary, :boolean, null: false, default: false
  end
end
