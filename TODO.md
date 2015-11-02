### Short Term
- attendance CRUD
 - list: list attendance instances, with members attached
  - wip [DONE]
  - merge into controller [DONE]
 - read: list attendance instance, with members attached [DONE]
 - create: needs to take date, and members object [DONE]
 ```javascript
 PUT /attendance
 {
   date: 'YYYY-MM-DD',
   members: [ #, #, # ]
 }
 ```
 - update:
  - addAbsentees
  - removeAbsentees
 ```javascript
 PUT /attendance/:attendanceId
 {
   attendanceId: #,
   members: [ #, #, # ]
 }
 ```

### Long Term
- add discipline for members
