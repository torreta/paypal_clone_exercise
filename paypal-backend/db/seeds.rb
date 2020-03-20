# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.new
user1.email = 'test@gmail.com'
user1.password = '123123123'
user1.password_confirmation = '123123123'
user1.save

user2 = User.new
user2.email = 'test2@gmail.com'
user2.password = '123123123'
user2.password_confirmation = '123123123'
user2.save

user3 = User.new
user3.email = 'test3@gmail.com'
user3.password = '123123123'
user3.password_confirmation = '123123123'
user3.save

user4 = User.new
user4.email = 'test4@gmail.com'
user4.password = '123123123'
user4.password_confirmation = '123123123'
user4.save

user5 = User.new
user5.email = 'test5@gmail.com'
user5.password = '123123123'
user5.password_confirmation = '123123123'
user5.save


transaction1 = Transaction.new
transaction1.sender_id = User.first().id
transaction1.receiver_id = User.last().id
transaction1.amount = 200
transaction1.save

transaction2 = Transaction.new
transaction2.sender_id = User.first().id
transaction2.receiver_id = User.last().id
transaction2.amount = 150
transaction2.save

transaction3 = Transaction.new
transaction3.sender_id = User.first().id
transaction3.receiver_id = User.last().id
transaction3.amount = 400
transaction3.save

transaction4 = Transaction.new
transaction4.sender_id = User.first().id
transaction4.receiver_id = User.last().id
transaction4.amount = 90
transaction4.save