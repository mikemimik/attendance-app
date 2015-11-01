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
        console.log('read', 'fetch', 'action');
        context.continue();
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
  }
};