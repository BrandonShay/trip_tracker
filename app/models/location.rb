class Location < ApplicationRecord
  belongs_to :trip
  validates :loc_name, presence: true
end
