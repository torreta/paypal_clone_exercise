class User < ApplicationRecord
    has_secure_password
    has_many :sent_transactions, :class_name => "Transaction", :foreign_key => "sender_id"
    has_many :received_transactions, :class_name => "Transaction", :foreign_key => "received_id"
end