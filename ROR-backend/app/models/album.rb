class Album < ActiveRecord::Base
  has_many :purchase

  validates :title, presence: true,
  validates :performer, presence: true
  validates :cost, presence: true, numericality: { other_than: 0 }

end
