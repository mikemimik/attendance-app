module.exports = {
  create: {
    start: {
      before: function(req, res, context) {
        context.continue();
      },
      action: function(req, res, context) {
        context.continue();
      },
      after: function(req, res, context) {
        context.continue();
      }
    },
    auth: {},
    fetch: {},
    data: {},
    write: {},
    send: {},
    complete: {}
  },
  list: {
    start: {},
    auth: {},
    fetch: {},
    data: {},
    write: {},
    send: {},
    complete: {}
  },
  read: {
    start: {},
    auth: {},
    fetch: {},
    data: {},
    write: {},
    send: {},
    complete: {}
  },
  update: {
    start: {},
    auth: {},
    fetch: {},
    data: {},
    write: {},
    send: {},
    complete: {}
  },
  delete: {
    start: {},
    auth: {},
    fetch: {},
    data: {},
    write: {},
    send: {},
    complete: {}
  }
};