class Recipe < ApplicationRecord 
	validates_presence_of :name, :instructions, :ingredients, :picture 
end
