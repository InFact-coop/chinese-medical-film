const keystone = require('keystone');
const types = keystone.Field.Types;

const Theme = new keystone.List('Theme', {
  autokey: { from: 'name', path: 'key', unique: true, },
  label: 'Themes',
});

Theme.add({
  name: { type: String, required: true, },
  description: { type: types.Textarea, required: false, },
  //image: { type: types.CloudinaryImage, publicID: 'slug', autoCleanup: true, },
});

Theme.track = true;
Theme.register();