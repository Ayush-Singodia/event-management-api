# Event Management API\n\nInstructions and usage guide inside.

# 🎉 Event Management API

A RESTful API for creating, managing, and registering for events. Built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**.

---

## 📦 Features
- Create events with constraints (date, capacity)
- User registration for events
- Cancel registration
- View event details with registered users
- List upcoming events (sorted by date & location)
- View statistics per event

---

## 🚀 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/event-management-api.git
cd event-management-api

2. Install Dependencies
npm install
3. Configure PostgreSQL
Create a PostgreSQL database named eventdb
Update your DB credentials in models/index.js
Example:

const sequelize = new Sequelize('eventdb', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});
4. Run the Server
node app.js
Server will run at http://localhost:3000
📚 API Description & Examples

🔹 POST /api/events — Create Event
Create a new event.

Request Body

{
  "title": "Tech Conference",
  "dateTime": "2025-08-01T14:00:00Z",
  "location": "Auditorium",
  "capacity": 100
}
Success Response

{ "id": "event-uuid" }
🔹 GET /api/events/:id — Get Event Details
Success Response

{
  "id": "...",
  "title": "Tech Conference",
  "dateTime": "2025-08-01T14:00:00Z",
  "location": "Auditorium",
  "capacity": 100,
  "registrations": [
    {
      "id": "user-uuid",
      "name": "Alice",
      "email": "alice@example.com"
    }
  ]
}
🔹 POST /api/events/:id/register — Register for Event
Request Body

{
  "userId": "user-uuid"
}
Success Response

{ "message": "Registered successfully" }
Error Scenarios

Already registered
Event full
Past event
🔹 POST /api/events/:id/cancel — Cancel Registration
Request Body

{
  "userId": "user-uuid"
}
Success Response

{ "message": "Cancelled successfully" }
Error

{ "error": "User is not registered for this event." }
🔹 GET /api/events/upcoming — List Upcoming Events
Returns events sorted by date (ascending), then location (A-Z).

Success Response

[
  {
    "id": "...",
    "title": "Tech Meetup",
    "dateTime": "2025-08-15T10:00:00Z",
    "location": "Hall A",
    "remainingCapacity": 20
  }
]
🔹 GET /api/events/:id/stats — Event Statistics
Success Response

{
  "totalRegistrations": 80,
  "remainingCapacity": 20,
  "percentageUsed": "80%"
}
🧠 Business Rules

Max capacity: 1000
No duplicate registrations
No registration for past events
Return meaningful error messages
Proper HTTP status codes
🧪 Testing

Use Postman or any REST client to test these endpoints.

📜 License

MIT

👨‍💻 Author
Ayush Singodia


Your Name

