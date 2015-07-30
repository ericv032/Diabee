class Entry < ActiveRecord::Base
	  default_scope { order("created_at DESC") }
	 # attr_accessible :content, :user_id
	 # belongs_to :user

def self.to_csv
    CSV.generate do |csv|
      csv << column_names
      all.each do |entry|
        csv << entry.attributes.values_at(*column_names)
      end
    end
  end
end
	 


  