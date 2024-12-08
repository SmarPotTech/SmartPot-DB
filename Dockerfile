# Usar la imagen oficial de MongoDB
FROM mongo:latest

# Copiar el script de inicialización al directorio especial de MongoDB
COPY init.js /docker-entrypoint-initdb.d/

# Definir el entorno para el administrador (root) de MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin

# Definir el entorno para la base de datos que va a ser configurada
ENV MONGO_INITDB_DATABASE=smartpot

# Exponer el puerto de MongoDB
EXPOSE 27017
