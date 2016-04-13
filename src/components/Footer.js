import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import * as constants from '../constants/constants'

class Footer extends Component {
	constructor(props, context) {
        super(props, context)
    }


	render () {
        var activeTodoWord = 'item'; //app.Utils.pluralize(this.props.count, 'item');
		var clearButton = null;

		if (this.props.completedCount > 0) {
			clearButton = (
				<button
					className="clear-completed"
					onClick={this.props.onClearCompleted}>
					Clear completed
				</button>
			);
		}

		var visibilityFilter = this.props.visibilityFilter;
        const onShow = this.props.onShow;
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.count}</strong> {activeTodoWord} left
				</span>
				<ul className="filters">
					<li>
						<a
							onClick={() => onShow(constants.ALL_TODOS)}
							className={classnames({selected: visibilityFilter === constants.ALL_TODOS})}>
								All
						</a>
					</li>
					{' '}
					<li>
						<a
							onClick={() => onShow(constants.ACTIVE_TODOS)}
                            className={classnames({selected: visibilityFilter === constants.ACTIVE_TODOS})}>
								Active
						</a>
					</li>
					{' '}
					<li>
						<a
							onClick={() => onShow(constants.COMPLETED_TODOS)}
                            className={classnames({selected: visibilityFilter === constants.COMPLETED_TODOS})}>
								Completed
						</a>
					</li>
				</ul>
				{clearButton}
			</footer>
		);
	}
}

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired
};

export default Footer;