

---

# Project Name - Node Backend

A backend project built with Node.js, utilizing Cloudinary for image storage, JWT authentication for user management, PayPal integration for payments, and MongoDB for database storage.

## Configuration

Create a `config` folder at the root of your project and add a `config.env` file with the following environment variables:

```env
# Cloudinary Configuration
CLOUDINARY_API_SECRET=RiyhygvUl8PidCzuWmOLti8oFsY
CLOUDINARY_NAME=mae-com-in
CLOUDINARY_API_KEY=361332198474596

# JWT Configuration
JWT_SECRET=TYEWRWWBUYT326NHLSNZCHSFN
JWT_EXPIRE_TIME=1d

# Node Environment
NODE_ENV=production

# PayPal Configuration
PAYPAL_CLIENT_ID=AWKwCe3_kpT6LMMUfI23GcycNq_ZqyzmfEQNlfS35ccLYV16WD8-8DpOQE29E5F5xdjQ5DToiH4VkwEz

# Cookie Configuration
COOKIE_EXPIRES_TIME=1

# MongoDB Configuration
DATABASE_CLOUD=mongodb+srv://mohammad:0gyynWBh3zZmtgwB@todo.icu4svt.mongodb.net/?retryWrites=true&w=majority
```


## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Install dependencies:

```bash
in root folder
npm install
```

## Usage

To start the server:

```bash
npm start
```

The server will run on the specified port and will be accessible at `http://localhost:5000`.




