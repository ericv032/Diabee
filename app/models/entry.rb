class Entry < ActiveRecord::Base
	  default_scope { order("created_at DESC") }
	 # attr_accessible :content, :user_id
	 # belongs_to :user
end
