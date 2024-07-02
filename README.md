# 📋 Registration Form with Node.js, Express.js, and MongoDB

This project is a registration form built with Node.js, Express.js, and MongoDB. It allows users to register by providing their details, which are then stored in a MongoDB database. The project is deployed on Render.

## ✨ Features

- User registration
- Form validation
- Secure password storage
- MongoDB database integration
- Deployment on Render

## 🛠️ Tech Stack

- Node.js: JavaScript runtime for the server  
- Express.js: Web framework for Node.js  
- MongoDB: NoSQL database for storing user data  
- Mongoose: ODM for MongoDB  
- dotenv: Environment variable management  
- Render: Platform for deployment

### Backend

- ![Node.js](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/80px-Node.js_logo.svg.png) **Node.js**: JavaScript runtime for the server  
- ![Express.js](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/80px-Expressjs.png) **Express.js**: Web framework for Node.js  
- ![MongoDB](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/80px-MongoDB_Logo.svg.png) **MongoDB**: NoSQL database for storing user data  
- ![Mongoose](https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Mongoose_logo.svg/80px-Mongoose_logo.svg.png) **Mongoose**: ODM for MongoDB  
- ![dotenv](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Environment_variables_logo.png/80px-Environment_variables_logo.png) **dotenv**: Environment variable management  
- ![Render](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Render.com_logo.svg/80px-Render.com_logo.svg.png) **Render**: Platform for deployment  


## 🚀 Installation

To get the project up and running locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/registration-form.git
    cd registration-form
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root of the project and add the following:
    ```env
    PORT=3000
    MONGODB_USERNAME=yourUsername
    MONGODB_PASSWORD=yourPassword
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.


## 📜 Usage

- **Registration**: Users can register by providing their name, email, and password. The password is securely stored in the database.
- **Form Validation**: Basic form validation is implemented to ensure data integrity.
- **Success and Error Pages**: Users are redirected to appropriate pages based on the registration outcome.

## 🌐 Deployment

This project is deployed on Render. To deploy your own instance:

1. **Create a Render account**: If you don't have one, sign up at [Render](https://render.com).
2. **Create a new Web Service**: Connect your GitHub repository and follow the deployment instructions.
3. **Set Environment Variables**: Add the environment variables `PORT`, `MONGODB_USERNAME`, and `MONGODB_PASSWORD` in the Render dashboard.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
