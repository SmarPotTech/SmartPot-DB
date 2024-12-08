db = db.getSiblingDB('smartpot');  // Seleccionar la base de datos 'smartpot'

db.createCollection('usuarios');
db.usuarios.insertMany([
    {
        "_id": ObjectId("672811d1c78d172fd8a89776"),
        "name": "Ana",
        "lastname": "Gonzalez",
        "email": "ana.gonzalez@example.com",
        "create_at": new ISODate("2024-11-08T09:15:20.000Z"),
        "password": "$2a$12$A9cXEayYw0evsEq7uAV8w.MI7B6r4I5EVkgErY0gNz8F5cmMb5tdu",
        "role": "USER",
        "_class": "smartpot.com.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("672811d1c78d172fd8a89777"),
        "name": "Carlos",
        "lastname": "Martinez",
        "email": "carlos.martinez@example.com",
        "create_at": new ISODate("2024-11-09T10:30:25.000Z"),
        "password": "$2a$12$wLkZmQeE6oSkIAkC3VtnKnggsJ7TXkQdOdxZu5VgxlYqu8dT9llp2",
        "role": "USER",
        "_class": "smartpot.com.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("672811d1c78d172fd8a89778"),
        "name": "Laura",
        "lastname": "Sánchez",
        "email": "laura.sanchez@example.com",
        "create_at": new ISODate("2024-11-10T11:45:10.000Z"),
        "password": "$2a$12$PvB12SgZqR8Se7w4gzJWTeMN5G2SlX1FFmZZIkAq1s4bM04Y56Gcu",
        "role": "ADMIN",
        "_class": "smartpot.com.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("672811d1c78d172fd8a89779"),
        "name": "Felipe",
        "lastname": "Ramírez",
        "email": "felipe.ramirez@example.com",
        "create_at": new ISODate("2024-11-11T12:50:45.000Z"),
        "password": "$2a$12$ZBTe0FT2uD8Tg42Zywg6jXztLZyhtXMZyMIWh2ZV34ZzYldE51JjW",
        "role": "USER",
        "_class": "smartpot.com.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("672811d1c78d172fd8a89780"),
        "name": "Luis",
        "lastname": "Fernandez",
        "email": "luis.fernandez@example.com",
        "create_at": new ISODate("2024-11-12T13:55:50.000Z"),
        "password": "$2a$12$8Hsbk0fVuCpK7.B7XihZXHqZb5LvM9ZD9F1uZGQ4TZTfYpFv5uZMy",
        "role": "USER",
        "_class": "smartpot.com.api.Models.Entity.User"
    }
]);

db.createCollection('cultivos');
db.cultivos.insertMany([
    {
        "_id": ObjectId("672af29fed31ed63a0064115"),
        "status": "Severe_deterioration",
        "type": "TOMATO",
        "user": ObjectId("672811d1c78d172fd8a89776"),  // Referencia al usuario "Ana Gonzalez"
        "_class": "smartpot.com.api.Models.Entity.Crop"
    },
    {
        "_id": ObjectId("672af29fed31ed63a0064116"),
        "status": "Moderate_deterioration",
        "type": "LETTUCE",
        "user": ObjectId("672811d1c78d172fd8a89777"),  // Referencia al usuario "Carlos Martinez"
        "_class": "smartpot.com.api.Models.Entity.Crop"
    },
    {
        "_id": ObjectId("672af29fed31ed63a0064117"),
        "status": "Excellent",
        "type": "LETTUCE",
        "user": ObjectId("672811d1c78d172fd8a89778"),  // Referencia al usuario "Laura Sanchez"
        "_class": "smartpot.com.api.Models.Entity.Crop"
    },
    {
        "_id": ObjectId("672af29fed31ed63a0064118"),
        "status": "Perfect_plant",
        "type": "TOMATTO",
        "user": ObjectId("672811d1c78d172fd8a89779"),  // Referencia al usuario "Felipe Ramirez"
        "_class": "smartpot.com.api.Models.Entity.Crop"
    },
    {
        "_id": ObjectId("672af29fed31ed63a0064119"),
        "status": "Moderate_health",
        "type": "TOMATTO",
        "user": ObjectId("672811d1c78d172fd8a89780"),  // Referencia al usuario "Luis Fernandez"
        "_class": "smartpot.com.api.Models.Entity.Crop"
    }
]);


db.createCollection('comandos');
db.comandos.insertMany([
    {
        "_id": ObjectId("507f1f77bcf86cd799439014"),
        "commandType": "ACTIVATE_WATER_PUMP",
        "status": "EXECUTED",
        "dateCreated": new ISODate("2024-11-06T15:20:00.100Z"),
        "crop": ObjectId("672af29fed31ed63a0064115"),
        "_class": "smartpot.com.api.Models.Entity.Command"
    },
    {
        "_id": ObjectId("507f1f77bcf86cd799439015"),
        "commandType": "ACTIVATE_LIGHT",
        "status": "EXECUTED",
        "dateCreated": new ISODate("2024-11-07T16:30:12.200Z"),
        "crop": ObjectId("672af29fed31ed63a0064116"),
        "_class": "smartpot.com.api.Models.Entity.Command"
    },
    {
        "_id": ObjectId("507f1f77bcf86cd799439016"),
        "commandType": "ACTIVATE_WATER_PUMP",
        "status": "PENDING",
        "dateCreated": new ISODate("2024-11-08T17:40:25.300Z"),
        "crop": ObjectId("672af29fed31ed63a0064117"),
        "_class": "smartpot.com.api.Models.Entity.Command"
    },
    {
        "_id": ObjectId("507f1f77bcf86cd799439017"),
        "commandType": "ACTIVATE_WATER_PUMP",
        "status": "EXECUTED",
        "dateCreated": new ISODate("2024-11-09T18:50:40.400Z"),
        "crop": ObjectId("672af29fed31ed63a0064118"),
        "_class": "smartpot.com.api.Models.Entity.Command"
    },
    {
        "_id": ObjectId("507f1f77bcf86cd799439018"),
        "commandType": "ACTIVATE_WATER_PUMP",
        "status": "PENDING",
        "dateCreated": new ISODate("2024-11-10T19:00:50.500Z"),
        "crop": ObjectId("672af29fed31ed63a0064119"),
        "_class": "smartpot.com.api.Models.Entity.Command"
    }
]);


db.createCollection('notificaciones');
db.notificaciones.insertMany([
    {
        "_id": ObjectId("672913ada70359bc7970ea56"),
        "message": "El pH del agua está fuera de rango.",
        "type": "alerta",
        "date": new ISODate("2024-11-07T05:20:10.100Z"),
        "_class": "smartpot.com.api.Models.Entity.Notification",
        "user_id": ObjectId("672811d1c78d172fd8a89776")
    },
    {
        "_id": ObjectId("672913ada70359bc7970ea57"),
        "message": "La humedad del suelo ha aumentado al 80%.",
        "type": "información",
        "date": new ISODate("2024-11-08T06:25:20.200Z"),
        "_class": "smartpot.com.api.Models.Entity.Notification",
        "user_id": ObjectId("672811d1c78d172fd8a89777")
    },
    {
        "_id": ObjectId("672913ada70359bc7970ea58"),
        "message": "Temperatura elevada en el invernadero.",
        "type": "alerta",
        "date": new ISODate("2024-11-09T07:30:30.300Z"),
        "_class": "smartpot.com.api.Models.Entity.Notification",
        "user_id": ObjectId("672811d1c78d172fd8a89778")
    },
    {
        "_id": ObjectId("672913ada70359bc7970ea59"),
        "message": "El cultivo de lechuga está listo para la cosecha.",
        "type": "información",
        "date": new ISODate("2024-11-10T08:35:40.400Z"),
        "_class": "smartpot.com.api.Models.Entity.Notification",
        "user_id": ObjectId("672811d1c78d172fd8a89779")
    },
    {
        "_id": ObjectId("672913ada70359bc7970ea60"),
        "message": "Se alcanzó la temperatura óptima para el cultivo de espinaca.",
        "type": "información",
        "date": new ISODate("2024-11-11T09:40:50.500Z"),
        "_class": "smartpot.com.api.Models.Entity.Notification",
        "user_id": ObjectId("672811d1c78d172fd8a89780")
    }
]);

db.createCollection('registros');
db.registros.insertMany([
    {
        "_id": ObjectId("672bb5fa34615e37497f4eaf"),
        "date": new ISODate("2024-11-07T20:15:00.100Z"),
        "measures": {
            "atmosphere": 21.0,
            "brightness": 750,
            "temperature": 24.0,
            "ph": 7.0,
            "tds": 440,
            "humidity": 70
        },
        "crop": ObjectId("672af29fed31ed63a0064115"),
        "_class": "smartpot.com.api.Models.Entity.History"
    },
    {
        "_id": ObjectId("672bb5fa34615e37497f4eb0"),
        "date": new ISODate("2024-11-08T21:25:10.200Z"),
        "measures": {
            "atmosphere": 22.0,
            "brightness": 780,
            "temperature": 23.5,
            "ph": 6.5,
            "tds": 460,
            "humidity": 72
        },
        "crop": ObjectId("672af29fed31ed63a0064116"),
        "_class": "smartpot.com.api.Models.Entity.History"
    },
    {
        "_id": ObjectId("672bb5fa34615e37497f4eb1"),
        "date": new ISODate("2024-11-09T22:35:20.300Z"),
        "measures": {
            "atmosphere": 23.0,
            "brightness": 800,
            "temperature": 22.0,
            "ph": 7.0,
            "tds": 470,
            "humidity": 75
        },
        "crop": ObjectId("672af29fed31ed63a0064117"),
        "_class": "smartpot.com.api.Models.Entity.History"
    },
    {
        "_id": ObjectId("672bb5fa34615e37497f4eb2"),
        "date": new ISODate("2024-11-10T23:45:30.400Z"),
        "measures": {
            "atmosphere": 22.5,
            "brightness": 790,
            "temperature": 21.0,
            "ph": 6.8,
            "tds": 450,
            "humidity": 80
        },
        "crop": ObjectId("672af29fed31ed63a0064118"),
        "_class": "smartpot.com.api.Models.Entity.History"
    },
    {
        "_id": ObjectId("672bb5fa34615e37497f4eb3"),
        "date": new ISODate("2024-11-11T00:00:40.500Z"),
        "measures": {
            "atmosphere": 20.0,
            "brightness": 760,
            "temperature": 23.5,
            "ph": 7.0,
            "tds": 440,
            "humidity": 85
        },
        "crop": ObjectId("672af29fed31ed63a0064119"),
        "_class": "smartpot.com.api.Models.Entity.History"
    }
]);

db.createCollection('sesiones');
db.sessions.insertMany([
    {
        "_id": ObjectId("672b9609f11f22caf99d7549"),
        "registration": new ISODate("2023-11-05T12:30:00.000Z"),
        "user": "00000000cc9f266f96d89cf8",
        "_class": "smartpot.com.api.Models.Entity.Session"
    }
]);
