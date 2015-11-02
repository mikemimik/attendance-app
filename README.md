# attendance-app
Attendance application (api + head)

## getting started

Start the API
```
> git clone https://github.com/mikemimik/attendance-app.git
> cd attandance-app
> cd api
> node app.js
```

## api
This application will enable endpoints to your mysql database

### endpoints
Controller | Endpoint | Description
-----------|----------|------------
model.create | POST /model | create a model
model.list | GET /model | get a list of all of model
model.read | GET /model/:id | get details about a model
model.update | PUT /model/:id | update details about a model
model.delete | DELETE /model/:id | remove a model
