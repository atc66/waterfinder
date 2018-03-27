class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
    	t.string :title
    	t.with_options :precision => 15, :scale => 10 do |c|
        	c.float :lat
        	c.float :lng
      	end
      	t.timestamps
    end
  end
end
