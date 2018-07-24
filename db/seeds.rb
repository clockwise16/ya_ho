require 'csv'

User.create(
    email: "clockwise16@gmail.com",
    password: "12341234",
    password_confirmation: "12341234",
    is_admin?: true
)

User.create(
    email: "hsk2m0209@gmail.com",
    password: "12341234",
    password_confirmation: "12341234",
    is_admin?: true
)


CSV.foreach(Rails.root.join("school.csv"), headers: true) do |row|
    School.create! row.to_hash
end

CSV.foreach(Rails.root.join("dummy_2.csv"), headers: true) do |row|
    Dummy.create! row.to_hash
end