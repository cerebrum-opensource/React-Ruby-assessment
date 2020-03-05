class User < ActiveRecord::Base
  has_many :purchase
  
  validates :name, presence: true,
   
end
