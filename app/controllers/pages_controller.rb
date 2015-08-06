class PagesController < ApplicationController
  def about
  end

  def contact
  end

    def home
    	 @entry = Entry.new
  end
end
