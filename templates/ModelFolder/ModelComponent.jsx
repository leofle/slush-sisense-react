// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {observer} from 'mobx-react';
import { injectIntl } from 'react-intl';

import style from './<%= appName %>.scss';
import messages from './translation';

@observer
class <%= appName %> extends React.Component {
	static propTypes = {
		intl: PropTypes.shape({
			formatMessage: PropTypes.func
		}).isRequired
	};

	render() {
		const { intl } = this.props;
		const <%= cssClassName %> = classnames(style.<%= cssClassName %>);

		return (
			<div className={<%= cssClassName %>}>
				{intl.formatMessage(messages.model)}
			</div>
		);
	}
}

export default injectIntl(<%= appName %>);
