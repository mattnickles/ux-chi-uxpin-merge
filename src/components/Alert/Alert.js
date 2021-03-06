import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
export default class Alert extends React.Component {
  render() {
    let iconToRender;
    let textToRender;
    let alertTitle = '';
    let closeButton = '';

    if (this.props.icon) {
      iconToRender = this.props.icon;
    } else {
      switch(this.props.state) {
        case 'success':
          iconToRender = 'circle-check';
          break;
        case 'warning':
          iconToRender = 'warning';
          break;
        case 'danger':
          iconToRender = 'circle-x';
          break;
        default:
          iconToRender = 'circle-info';
          break;
      }
    }

    if (this.props.text) {
      textToRender = this.props.text;
    } else {
      switch (this.props.state) {
        case 'success':
          textToRender = 'This is a success alert';
          break;
        case 'warning':
          textToRender = 'This is a warning alert';
          break;
        case 'danger':
          textToRender = 'This is a danger alert';
          break;
        case 'info':
          textToRender = 'This is an info alert';
          break;
        case 'muted':
          textToRender = 'This is a muted alert';
          break;
        default:
          textToRender = 'This is a base alert';
          break;
      }
    }

    if (this.props.title) {
      alertTitle = <p class="chi-alert__title">{this.props.title}</p>;
    }

    if (this.props.closable) {
      closeButton = <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x"></i>
      </div>
    </button>;
    }

    return (
      <div class={`
        chi-alert
        ${this.props.state ? `-${this.props.state}` : ''}
        ${this.props.size ? `-${this.props.size}` : ''}
        ${this.props.type ? `-${this.props.type}` : ''}
        `}
        role="alert">
        <i class={`chi-alert__icon chi-icon icon-${iconToRender}`}></i>
        <div class="chi-alert__content">
          {alertTitle}
          <p class="chi-alert__text">{textToRender}</p>
        </div>
        {closeButton}
      </div>
    );
  }
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'muted']),
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['bubble', 'banner', 'toast']),
  closable: PropTypes.bool,
};
/* eslint-enable */

Alert.defaultProps = {
  size: 'md',
  state: '',
  type: 'bubble',
};
