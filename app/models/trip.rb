class Trip < ApplicationRecord
  belongs_to :User
  has_many :locations, dependant: :destroy
  
  validates :name, presence: true
end
