var objList = {
  before: function(req, res, context) {
    console.log('before', 'this', this);
    context.continue();
  },
  action: function(req, res, context) {
    console.log('action', 'this', this);
    context.continue();
  },
  after: function(req, res, context) {
    console.log('after', 'this', this);
    context.continue();
  }
};

var obj = {
  before: function(req, res, context) {
    console.log('before', 'this', context.action);
    context.continue();
  },
  action: function(req, res, context) {
    console.log('action', 'this', context.action);
    context.continue();
  },
  after: function(req, res, context) {
    console.log('after', 'this', context.action);
    context.continue();
  }
};

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
        console.log('list', 'fetch', 'action');
        context.continue();
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
    start: obj,
    auth: obj,
    fetch: obj,
    data: obj,
    write: obj,
    send: obj,
    complete: obj
  },
  update: {
    start: obj,
    auth: obj,
    fetch: obj,
    data: obj,
    write: obj,
    send: obj,
    complete: obj
  }
};