## Member
### GET (list)
List all members in the system

### POST (create)
Create a new member
```Javascript
{
  "firstName": "user first name",
  "lastName": "user last name,
  "dob": "january 3, 2015",
  "Group": {
    
  }
}
```
> Note: dob field can be left as `null`

## Member/:id
### GET (read)
Display specific members information
- search by id
- search by first name
- search by last name

> list of attendances will be included

### POST (update)
Update a specific members information

### DELETE (delete)
Delete a specific member

## TrainingDay
### GET (list [all days])
List all training days
> members will be attached to each day

## TrainingDay/:id
### GET (read)
Display specific training day
> list of members will be included

## Attendance
### GET (list)
### POST (create)

## Attendance/:id
[not useful yet]

## Group
[not useful yet]