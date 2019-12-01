class CreateShipmentLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :shipment_labels do |t|
      t.string :shipment_id
      t.string :label_url

      t.timestamps
    end
  end
end
