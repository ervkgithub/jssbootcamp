import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
  <div>
    <Text field={props.fields.title} />
    <RichText field={props.fields.description} />
  </div>
);

export default Article;
