/**
 * CONTROLLER ENDPOINTS
 * list [ GET /model ]
 * read [ GET /model/:id ]
 * update [ PUT /model/:id ]
 * create [ POST /model ]
 * delete [ DELETE /model/:id ]
 *
 * MILESTONES
 * start
 * auth
 * fetch
 * data
 * write
 * send
 * complete
 */
var _ = require('lodash');
var model = require('../models');

function getMembers() {

}

module.exports = {
  list: {
    start: {
      before: function(req, res, context) {
        console.log('list', 'start', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'start', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'start', 'after');
        context.continue();
      }
    },
    auth: {
      before: function(req, res, context) {
        console.log('list', 'auth', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'auth', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'auth', 'after');
        context.continue();
      }
    },
    fetch: {
      before: function(req, res, context) {
        console.log('list', 'fetch', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        model.Attendance.findAll().then(function(attendances){
          var done = _.after(attendances.length, function() {
            context.instance = attendances;
            context.continue();
          });
          _.each(attendances, function(attendance, key) {
            attendance.getAbsentees().then(function(members) {
              attendance.dataValues.members = members;
              done();
            });
          });
        });
        console.log('list', 'fetch', 'action');
      },
      after: function(req, res, context) {
        console.log('list', 'fetch', 'after');
        context.continue();
      }
    },
    data: {
      before: function(req, res, context) {
        console.log('list', 'data', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'data', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'data', 'after');
        context.continue();
      }
    },
    write: {
      before: function(req, res, context) {
        console.log('list', 'write', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'write', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'write', 'after');
        context.continue();
      }
    },
    send: {
      before: function(req, res, context) {
        console.log('list', 'send', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'send', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'send', 'after');
        context.continue();
      }
    },
    complete: {
      before: function(req, res, context) {
        console.log('list', 'complete', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('list', 'complete', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('list', 'complete', 'after');
        context.continue();
      }
    }
  },
  read: {
    start: {
      before: function(req, res, context) {
        console.log('read', 'start', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'start', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'start', 'after');
        context.continue();
      }
    },
    auth: {
      before: function(req, res, context) {
        console.log('read', 'auth', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'auth', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'auth', 'after');
        context.continue();
      }
    },
    fetch: {
      before: function(req, res, context) {
        console.log('read', 'fetch', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        // console.log(context);
        var params = context.criteria;
        model.Attendance.findById(params.attendanceID).then(function(attendance) {
          attendance.getAbsentees().then(function(members) {
            attendance.dataValues.members = members;
            context.instance = attendance;
            context.continue();
          });
        });
        console.log('read', 'fetch', 'action');
      },
      after: function(req, res, context) {
        console.log('read', 'fetch', 'after');
        context.continue();
      }
    },
    data: {
      before: function(req, res, context) {
        console.log('read', 'data', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'data', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'data', 'after');
        context.continue();
      }
    },
    write: {
      before: function(req, res, context) {
        console.log('read', 'write', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'write', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'write', 'after');
        context.continue();
      }
    },
    send: {
      before: function(req, res, context) {
        console.log('read', 'send', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'send', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'send', 'after');
        context.continue();
      }
    },
    complete: {
      before: function(req, res, context) {
        console.log('read', 'complete', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('read', 'complete', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('read', 'complete', 'after');
        context.continue();
      }
    }
  },
  update: {
    start: {
      before: function(req, res, context) {
        console.log('update', 'start', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'start', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'start', 'after');
        context.continue();
      }
    },
    auth: {
      before: function(req, res, context) {
        console.log('update', 'auth', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'auth', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'auth', 'after');
        context.continue();
      }
    },
    fetch: {
      before: function(req, res, context) {
        console.log('update', 'fetch', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'fetch', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'fetch', 'after');
        context.continue();
      }
    },
    data: {
      before: function(req, res, context) {
        console.log('update', 'data', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'data', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'data', 'after');
        context.continue();
      }
    },
    write: {
      before: function(req, res, context) {
        console.log('update', 'write', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'write', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'write', 'after');
        context.continue();
      }
    },
    send: {
      before: function(req, res, context) {
        console.log('update', 'send', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'send', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'send', 'after');
        context.continue();
      }
    },
    complete: {
      before: function(req, res, context) {
        console.log('update', 'complete', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('update', 'complete', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('update', 'complete', 'after');
        context.continue();
      }
    }
  },
  create: {
    start: {
      before: function(req, res, context) {
        console.log('create', 'start', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'start', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'start', 'after');
        context.continue();
      }
    },
    auth: {
      before: function(req, res, context) {
        console.log('create', 'auth', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'auth', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'auth', 'after');
        context.continue()
      }
    },
    fetch: {
      before: function(req, res, context) {
        console.log('create', 'fetch', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'fetch', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'fetch', 'after');
        context.continue();
      }
    },
    data: {
      before: function(req, res, context) {
        console.log('create', 'data', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'data', 'action');
        context.attributes = _.extend(context.attributes, req.body);
        // console.log(context);
        // TODO: do some basic validation
        // TODO: check req.body: date key -> date
        // TODO: check req.body: members key -> array of integers
        // TODO: check members exist (have to do this? [probably, users are dumb])
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'data', 'after');
        context.continue();
      }
    },
    write: {
      // INFO: this is the important milestone
      before: function(req, res, context) {
        console.log('create', 'write', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'write', 'action');

        // INFO: assuming that context.attributes is correct
        // INFO: assuming all members exist
        // INFO: create new attendance object
        model.Attendance.create({
          date: context.attributes.date
        }).then(function(createdAttendance) {

          // INFO: each member in array
          _.each(context.attributes.members, function(value) {

            // INFO: find member by id
            model.Member.findById(value)
              .then(function(member) {

                // INFO: add member to attendance object
                createdAttendance.addAbsentees(member);
                // member.addAbsents(createdAttendance);
              });
          });
        });
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'write', 'after');

        // TODO: get created attendance object
        // TODO: find it's associated memberResource
        // TODO: attatch members to object
        // INFO: context.instance == attendance object created
        var attendence = context.instance;
        attendence.getAbsentees().then(function(members) {
          console.log('members', members);
        });
        console.log(context.instance);
        context.continue();
      }
    },
    send: {
      before: function(req, res, context) {
        console.log('create', 'send', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'send', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'send', 'after');
        context.continue();
      }
    },
    complete: {
      before: function(req, res, context) {
        console.log('create', 'complete', 'before');
        context.continue();
      },
      action: function(req, res, context) {
        console.log('create', 'complete', 'action');
        context.continue();
      },
      after: function(req, res, context) {
        console.log('create', 'complete', 'after');
        context.continue();
      }
    }
  }
};
