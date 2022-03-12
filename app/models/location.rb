class Location < ApplicationRecord
  belongs_to :trips

  validates :loc_name, presence: true
end
