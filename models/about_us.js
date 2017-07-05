const keystone = require('keystone');
const Types = keystone.Field.Types;


const AboutUs = new keystone.List('About_us', {
  autokey: { from: 'name', path: 'key', unique: true, },
  label: 'About us',
  nocreate: true,
  nodelete: true,
});

AboutUs.add({
  name: { type: String, },
  text: { type: Types.Markdown, label: 'About us text EN', },
  text___chn: { type: Types.Markdown, label: 'About us text CHN', },
  team: { type: String, label: 'Team members', note: 'Add names of team members as a comma-separated list', },
});

AboutUs.track = true;
AboutUs.register();
