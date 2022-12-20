// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Article component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Article',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'author', type: CommonFieldTypes.SingleLineText },
      { name: 'publishdate', type: CommonFieldTypes.DateTime },
      { name: 'relatedarticle', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
