const Item = require('./item');
const Folder = require('./folder');
const User = require('./user');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Item.belongsTo(User);
Folder.belongsTo(User );

Item.belongsTo(Folder);
Folder.belongsTo(Folder);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Item,
  Folder,
  User
}
