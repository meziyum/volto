import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers';

import { ListingBlockBody as ListingBody } from '@plone/volto/components';

const View = (props) => {
  const { data, path, pathname, className } = props;
  const HeadlineTag = data.headlineTag || 'h2';

  return (
    <div
      className={cx('block listing', data.variation || 'default', className)}
    >
      {data.headline && (
        <HeadlineTag className="headline">{data.headline}</HeadlineTag>
      )}
      <ListingBody {...props} path={path ?? pathname} />
    </div>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
};

export default withBlockExtensions(View);
