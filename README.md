## Job Test - CRUD Application with Express and React

This project is a CRUD application built with Express for the backend and React for the frontend.

## Backend Setup

1. **Install dependencies**:
   
   - Run the following command to install the necessary packages:

   ```bash
   
   npm install

   ```
   - Make db in postgreSql example name 'myportal'
   - Create .env file (port, db connect, jwt, other.. )
     
   ```bash

   npx prisma migrate dev
   npm run dev

   ```
   
## Frontend Setup

1. **Install dependencies**:
   
   - Run the following command to install the necessary packages:
   - Create .env file to connect with backend
     
   ```bash
   
   npm install
   npm run dev
   
   ```

## API Doc

*example port = 4000

### User & Auth

1. Create User / Registration
   
* Enpoint
     
```bash
   Post
   localhost:4000/registeruser
```

* Example request
     
```bash
{

        "username": "example username",
        "email": "username@example.com",
        "password": "some password",
        "gender": "male"
        
}
```
* Example response
     
```bash

   {
    "message": "register successfull",
    "userData": {
        "id": 2,
        "username": "example username",
        "email": "username@example.com",
        "password": "$2b$10$ec.........",
        "gender": "male",
        "created_at": "2024-12-16T15:12:34.771Z",
        "updated_at": "2024-12-16T15:12:34.771Z"
    }
}

```

2. Login

 * Endpoint
     
```bash
   Post
   localhost:4000/login
```

 * Example request
     
```bash
{

        "email": "username@example.com",
        "password": "some password",
}
```

* Example response
     
```bash

    "message": "Login susscessfull",
    "token": "eyJhbGc..........."

```

2. Get Users (All)

 * Endpoint
     
```bash

   Get
   localhost:4000/users

```

 * Example response
     
```bash

{
    "message": "Users fetched successfully",
    "users": [
        {
            "id": 1,
            "username": "example username",
            "email": "username@example.com",
            "password": "$2b$10$Cj...........",
            "gender": "male",
            "created_at": "2024-12-15T14:00:21.974Z",
            "updated_at": "2024-12-15T14:00:21.974Z"
        },
        {
            "id": 2,
            "username": "example username",
            "email": "username@example.com",
           "password": "$2b$10$Cj...........",
            "gender": "female",
            "created_at": "2024-12-15T22:50:20.454Z",
            "updated_at": "2024-12-15T22:50:20.454Z"
        },
       
       
       
    ]
}

```

3. Get User (has login)

 * Endpoint
     
```bash

   Get
   localhost:4000/user

```

 * Example response
     
```bash

{
    "message": "User fetched successfully",
    "user": {
        "id": 1,"
        "username": "example username",
        "email": "username@example.com",
        "password": "$2b$10$Cj...........",
        "gender": "male",
        "created_at": "2024-12-15T14:00:21.974Z",
        "updated_at": "2024-12-15T14:00:21.974Z"
    }
}

```


4. Get User (by Id)

 * Endpoint
     
```bash

   Get
   localhost:4000/user/2

```

 * Example response
     
```bash

{
    "message": "User fetched successfully",
    "user": {
        "id": 2,"
        "username": "example username",
        "email": "username@example.com",
       "password": "$2b$10$Cj...........",
        "gender": "male",
        "created_at": "2024-12-15T14:00:21.974Z",
        "updated_at": "2024-12-15T14:00:21.974Z"
    }
}

```

5. Update User (has login)

   * Endpoint
     
```bash

   Put
   localhost:4000/user

```

   * Example Request

```bash

{
  "username": "update oman",
  "email": "oman@example.com",
  "password": "password",
  "gender": "male"
}

```

   * Example response
     
```bash

{
    "message": "User updated successfully",
    "updatedUser": {
       "id": 2,"
        "username": "example username",
        "email": "username@example.com",
        "password": "$2b$10$Cj6O9Mpixuksoa90wyhay7d563vsh",
        "gender": "male",
        "created_at": "2024-12-15T14:00:21.974Z",
        "updated_at": "2024-12-15T14:00:21.974Z"
    }
}

```

### Product

1. Get Product (All)

 * Endpoint
     
```bash

   Get
   localhost:4000/products

```

 * Example Request

```bash

   {
    "data": {
        "pagination": {
            "current_page": 1,
            "total_pages": 1,
            "total_data": 2,
            "next_page": null,
            "previous_page": null
        },
        "data": [
            {
                "id": 1,
                "name": "Product 1 ",
                "category": "Food",
                "price": 7200,
                "in_stock": true,
                "description": " Delicious and make happy",
                "user_id": 2,
                "created_at": "2024-12-15T14:02:45.600Z"
            },
            {
                "id": 2,
                "name": "Product 2",
                "category": "Food",
                "price": 1200,
                "in_stock": true,
                "description": " Delicious and make happy",
                "user_id": 2,
                "created_at": "2024-12-15T14:03:11.236Z"
            },
            
        ]
    }
}

```

2. Get Product ( by Id)

 * Endpoint
     
```bash

   Get
   localhost:4000/products/2

```

 * Example Response
   
```bash

{
    "message": "Product found",
    "product": {
        "id": 2,
        "name": "product 2",
        "category": "food",
        "price": 1200,
        "in_stock": true,
        "description": " Delicious and make happy",
        "user_id": 2,
        "created_at": "2024-12-15T14:03:11.236Z"
    }
}

```


3. Create Product 

 * Endpoint
     
```bash

   Post
   localhost:4000/products

```

 * Example Request

```bash

   {
    
    "name": "Product 3",
    "price": 1200,
    "category": "Snack",
    "description": "Delicious and make happy",
    "in_stock": true

    

}

```

 * Example Response
```bash

{
    "message": "Create product successfull",
    "newProduct": {
        "id": 26,
        "name": "Product 3",
        "category": "Snack",
        "price": 1200,
        "in_stock": true,
        "description": "Delicious and make happy",
        "user_id": 1,
        "created_at": "2024-12-16T14:49:00.867Z"
    }
}

```

4. Update Product (by Id) 

 * Endpoint
     
```bash

   Post
   localhost:4000/products/2

```

 * Example Request

```bash

   {
    
    "name": "Product 2 update",
    "price": 7200,
    "category": "Snack",
    "description": "Delicious and make happy",
    "in_stock": true
}

```

 * Example Response
     
```bash

{
    "message": "Product Update SuccessFully",
    "updatedProduct": {
        "id": 2,
        "name": "Product 2 update",
        "category": "Snack",
        "price": 1200,
        "in_stock": true,
        "description": "Delicious and make happy",
        "user_id": 2,
        "created_at": "2024-12-16T14:49:00.867Z"
    }
}

```

5. Search Product (by Category, by Name , by Description)

  * Endpoint
     
```bash

   Get
   localhost:4000/search?page=1&limit=3&query=Snack

```

   * Example Response
     
```bash

{
    "current_page": 1,
    "total_page": 1,
    "total_data": 2,
    "data": [
        {
            "id": 1,
            "name": "Product 2 Update",
            "category": "Snack",
            "price": 7500,
            "in_stock": true,
            "description": "Delicious and make happy",
            "user_id": 2,
            "created_at": "2024-12-15T14:02:45.600Z"
        },
        {
            "id": 2,
            "name": "product 3",
            "category": "Snack",
            "price": 1200,
            "in_stock": true,
            "description": "Delicious and make happy",
            "user_id": 2,
            "created_at": "2024-12-15T14:03:11.236Z"
        },
       
    ]
}

```


6. Delete Product (by Id)

   * Endpoint
     
```bash

   Delete
   localhost:4000/products/3

```

   * Example Response

```bash

   {
    "message": "Deleted Product Successfully",
    "deletedProduct": {
        "id": 3,
        "name": "product 3",
        "category": "Snack",
        "price": 1200,
        "in_stock": true,
        "description": "Delicious and make happy",
        "user_id": 2,
        "created_at": "2024-12-16T14:49:00.867Z"
    }
}

```

