# 📋 Registration Form with Node.js, Express.js, and MongoDB

This project is a registration form built with Node.js, Express.js, and MongoDB. It allows users to register by providing their details, which are then stored in a MongoDB database. The project is deployed on Render.

## ✨ Features

- User registration
- Form validation
- Secure password storage
- MongoDB database integration
- Deployment on Render

## 🛠️ Tech Stack

- ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) **Node.js**: JavaScript runtime for the server
- ![Express.js](https://img.icons8.com/ios-filled/50/000000/express-js.png) **Express.js**: Web framework for Node.js
- ![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png) **MongoDB**: NoSQL database for storing user data
- ![Mongoose](https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongoose-an-object-data-modeling-library-used-to-enforce-a-schema-for-models-logo-shadow-tal-revivo.png) **Mongoose**: ODM for MongoDB
- ![dotenv](https://img.icons8.com/ios-filled/50/000000/env.png) **dotenv**: Environment variable management
- ![Render](https://img.icons8.com/ios-filled/50/000000/cloud.png) **Render**: Platform for deployment

![Node.js](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png)
![Express.js](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)
![MongoDB](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)
![Mongoose](https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png)
![dotenv](https://miro.medium.com/max/480/1*GHx4F6NNVPX_Fhd_wlDKZQ.png)
![Render](https://render.com/images/render-logo.svg)


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
