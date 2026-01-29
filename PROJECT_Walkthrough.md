# ToDo List App Walkthrough

I have created a fully functional ToDo list application with a Spring Boot backend and a React frontend.

## 1. Project Structure

- **backend/**: Spring Boot application (Java 17, Maven).
- **frontend/**: React application (Vite, Axios).

## 2. Implementation Details

### Backend

- **Endpoint**: `http://localhost:8080/api/todos`
- **Database**: H2 In-Memory Database (data resets on restart).
- **Console**: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:testdb`)

### Frontend

- **URL**: `http://localhost:5173`
- **Features**: Add, View, Complete (Strike-through), Delete.

## 3. How to Run

You have two separate components to run. open two terminal windows:

### Terminal 1: Backend

```bash
cd backend
mvn spring-boot:run
```

### Terminal 2: Frontend

```bash
cd frontend
npm install  # (Run this if it wasn't finished automatically)
npm run dev
```

## 4. Verification Results

- **Backend Build**: Verified compilation.
- **Frontend Code**: Implemented manually.
