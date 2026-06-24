# Search Bar Project

A full-stack search bar application with a React frontend and a Django backend.

The frontend is a Vite-powered React app that sends typed search queries to the Django API. The backend uses Django REST and a Trie-based lookup to return matching product suggestions.

## Project structure

- `backend/` - Django backend project
  - `backend/` - Django project settings, URLs, WSGI, ASGI
  - `base/` - app containing models, views, and API URLs
  - `db.sqlite3` - local SQLite database file
  - `manage.py` - Django management script
- `react-search-bar/` - React frontend app
  - `src/` - React source code
  - `public/` - static public files
  - `package.json` - frontend dependencies and scripts

## Features

- React search bar UI with live suggestions
- Backend API endpoint at `/api/products/`
- Trie-based suggestion search in Django
- Simple `Products` model with `name` field
- CORS configured for local frontend development

## Requirements

- Python 3.11+ (or compatible Python 3.x)
- Node.js 18+ / npm
- Django
- djangorestframework
- django-cors-headers

## Backend setup

1. Open a terminal in `backend/`
2. Create and activate a virtual environment

```powershell
python -m venv venv
venv\Scripts\Activate.ps1
```

3. Install dependencies

```powershell
pip install django djangorestframework django-cors-headers
```

4. Apply migrations

```powershell
python manage.py migrate
```

5. Create a superuser (optional, for admin access)

```powershell
python manage.py createsuperuser
```

6. Run the Django development server

```powershell
python manage.py runserver
```

The backend API will be available at `http://127.0.0.1:8000/api/products/`.

## Frontend setup

1. Open a terminal in `react-search-bar/`
2. Install npm dependencies

```powershell
npm install
```

3. Start the Vite development server

```powershell
npm run dev
```

The frontend runs by default at `http://127.0.0.1:5173`.

## How to use

1. Start the backend server.
2. Start the frontend server.
3. Open the React app in a browser.
4. Type into the search box to fetch product suggestions.

## API details

- Endpoint: `GET /api/products/`
- Query parameter: `search`
- Example: `http://127.0.0.1:8000/api/products/?search=apple`

## Data model

- `Products`
  - `name` - product name string

## Notes

- The backend currently allows all origins (`CORS_ALLOW_ALL_ORIGINS = True`) for local development.
- Add products either via the Django admin or by creating them in a Django shell.
- This README is the central documentation for the full project.
