# mongo_seed.py
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["profile_db"]
db.personal_data.delete_many({})
db.work_experience.delete_many({})
db.hobbies.delete_many({})
db.tech_stack.delete_many({})

# Insert personal data
db.personal_data.insert_one({
    "name": "Gherasim Gabriel",
    "dateOfBirth": "2002-09-30",
    "education": [
        "Bachelor's in Mathematics and Computer Science",
        "Currently Master's of Data Science in Industry and Society"
    ],
    "location": "Cluj-Napoca"
})

# Insert work experience
db.work_experience.insert_many([
    {"company": "Betfair", "role": "Participant in QA Bootcamp", "period": "Oct 2024 - Dec 2024"},
    {"company": "Raiffeisen Bank", "role": "Participant Think Tank Lab program", "period": "Jan 2024 - Mar 2024"},
    {"company": "Hervis Sport", "role": "Commercial Worker", "period": "Jun 2023 - Sep 2023"},
    {"company": "Quantic Lab", "role": "QA Assistant", "period": "Jun 2022 - Sep 2022"},
])

# Insert hobbies
db.hobbies.insert_one({
    "list": ["Coding", "Learning", "Fitness", "Volunteering"]
})

#Insert tech stack
db.tech_stack.insert_many([
    { "name": "HTML", "logo": "assets/logos/html_logo.png" },
    { "name": "CSS", "logo": "assets/logos/css_logo.jpg" },
    { "name": "JavaScript", "logo": "assets/logos/javascript_logo.png" },
    { "name": "Python", "logo": "assets/logos/python_logo.png" },
    { "name": "C++", "logo": "assets/logos/cpp_logo.png" },
    { "name": "Java", "logo": "assets/logos/java_logo.png" },
    { "name": "Selenium", "logo": "assets/logos/selenium_logo.jpg" },
    { "name": "Rest Assured", "logo": "assets/logos/rest_assured_logo.jpg" },
    { "name": "Appium", "logo": "assets/logos/appium_logo.png" },
    { "name": "SQL", "logo": "assets/logos/sql_logo(1).png" }
])
