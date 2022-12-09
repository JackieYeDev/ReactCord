class CreateDms < ActiveRecord::Migration[6.1]
  def change
    create_table :dms do |t|
      t.integer :user_id
      t.integer :target_id
      t.string :content

      t.timestamps
    end
  end
end
