import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../../controls/Button';
// import LoginModal from '../modals/LoginModal';
import getStyles from './styles';

import { hideModal } from '../../../stores/ui/actions';

/**
 * A modal layout component that sets document language based on Redux state.
 * @return {React.Component} returns a React element
 */
export class Modal extends Component {
  constructor() {
    super();

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    if (this.modalRef && !this.modalRef.contains(e.target)) {
      if (this.props.modalVisible) this.props.hideModal();
    }
  }

  render() {
    const { className, styles } = getStyles(this.props);
    let classNameShield = `${className} shield`;
    // let title = '';
    // let content = null;

    if (this.props.modalVisible) classNameShield += ' visible';

    // if (this.props.modalContent === 'login') {
    //   title = languages[this.props.lang].login;
    //   content = <LoginModal />;
    // }

    return (
      <div className={ classNameShield }>
        <div className={ `${className} modal` } ref={ (node) => { this.modalRef = node; } }>
          <h2 className={ className }>
            {/* { title } */}
            <Button className={ className } kind="flat" icon={ faTimes } onClick={ this.props.hideModal }></Button>
          </h2>

          {/* { content } */}
        </div>

        { styles }
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillMount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }
}

export default connect(state => ({
  modalContent: state.ui.modalContent,
  modalVisible: state.ui.modalVisible,
  lang: state.settings.lang,
  theme: state.settings.theme,
}), {
  hideModal,
})(Modal);
