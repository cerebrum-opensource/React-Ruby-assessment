class Purchase < ActiveRecord::Base
  belongs_to :album
  belongs_to :user

  validates :album_id, presence: true,
  validates :user_id, presence: true,
end
