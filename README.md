# Gestor de Tareas — Serfinsa

Aplicación para organizar tareas pendientes, con **backend en .NET (ASP.NET Core Web API)** y **frontend en React (Vite)**. Los datos persisten en **SQLite**.

## Tecnologías

- **Backend:** .NET 10, Entity Framework Core + SQLite. Arquitectura por capas (Controllers → Services → DbContext) con DTOs y validaciones.
- **Frontend:** React + Vite, Fetch API.

## Cómo ejecutar

**Backend**
```bash
cd SerfinsaBackend
dotnet ef database update
dotnet run
```
API en `https://localhost:7288` (verifica el puerto en `Properties/launchSettings.json`).

**Frontend**
```bash
cd Frontend
npm install
npm run dev
```
App en `http://localhost:5173`.

> Si el navegador bloquea la API por el certificado HTTPS, ejecuta una vez `dotnet dev-certs https --trust`. Si el backend usa otro puerto, ajústalo en `Frontend/src/Api/tareasApi.js`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/tareas` | Listar (acepta `?estado=todas\|pendientes\|completadas`) |
| GET | `/api/tareas/{id}` | Detalle |
| POST | `/api/tareas` | Crear |
| PUT | `/api/tareas/{id}` | Modificar |
| PATCH | `/api/tareas/{id}/estado` | Marcar completada/pendiente |
| DELETE | `/api/tareas/{id}` | Eliminar |
