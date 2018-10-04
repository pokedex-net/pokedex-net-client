// import React, { Component } from 'react';
// import gravatar from 'gravatar';
// import jwt from 'jsonwebtoken';
// import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
//
// import Button from './Button';
// import languages from '../../fixtures/languages';
// import { showModal, updateUi } from '../../stores/ui/actions';
// import { updateSettings } from '../../stores/settings/actions';
//
// /**
//  * A user button control component that allows login, logout, and user options.
//  * @extends {React.Component}
//  */
// export class UserMenu extends Component {
//   /**
//   * The constructor sets the default state and assigns the this context to custom methods.
//   * @param {Object} props - Component props
//   */
//   constructor() {
//     super();
//
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//     this.handleClickOutside = this.handleClickOutside.bind(this);
//   }
//
//   handleLogin() {
//     this.props.showModal('login');
//   }
//
//   handleLogout() {
//     this.props.history.replace(`/${this.props.lang}`);
//     this.props.updateUi({ userMenuOpen: false });
//     this.props.updateSettings({ token: '' });
//   }
//
//   handleClickOutside(e) {
//     if (this.buttonRef && this.menuRef && !this.buttonRef.contains(e.target) && !this.menuRef.contains(e.target)) {
//       this.props.updateUi({ userMenuOpen: false });
//     }
//   }
//
//   /**
//    * This method renders the component.
//    * @return {React.Component} returns a React element
//    */
//   render() {
//     const user = jwt.decode(this.props.token) || {};
//     const menuItems = [
//       <Link key="settings" to="/settings">
//         <li>
//           <FontAwesomeIcon icon={ faCog } />
//           { languages[this.props.lang].settings }
//         </li>
//       </Link>,
//       <li key="logout" onClick={ this.handleLogout }>
//         <FontAwesomeIcon icon={ faSignOutAlt } />
//         { languages[this.props.lang].logout }
//       </li>,
//     ];
//     let buttonClass = (this.props.open) ? 'open' : '';
//     let handleButtonClick = this.handleLogin;
//
//     let buttonContent = [
//       <FontAwesomeIcon key="icon" icon={ faSignInAlt } />,
//       <span key="text">{ languages[this.props.lang].login }</span>,
//     ];
//
//     if (languages[this.props.lang].rtl) buttonClass += ' rtl';
//
//     if (user.name && user.email) {
//       handleButtonClick = () => {
//         this.props.updateUi({ userMenuOpen: !this.props.open });
//       };
//       buttonContent = [
//         <img key="gravatar" src={ gravatar.url(user.email, { size: 48, default: 'mp' }) } />,
//         <span key="name">{ user.name }</span>,
//       ];
//     }
//
//     return (
//       <div className={ buttonClass }>
//         <Button ref={ this.buttonRef } sharp size={ (this.props.headerHeight / 2) } kind="flat" onClick={ handleButtonClick }>
//           { buttonContent }
//         </Button>
//
//         <ul ref={ (node) => { this.menuRef = node; } }>
//           { menuItems }
//         </ul>
//
//         <style jsx>{`
//           div {
//             position: relative;
//             height: 100%;
//
//             ul {
//               position: absolute;
//               top: 42px;
//               right: 0;
//               z-index: 5;
//               display: flex;
//               flex-direction: column;
//               overflow-y: hidden;
//               min-width: 100%;
//               height: 0px;
//               border-radius: 4px;
//               background-color: #424242;
//               box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//               transition: height 0.2s ease;
//
//               :global(li) {
//                 position: relative;
//                 display: flex;
//                 align-items: center;
//                 align-content: center;
//                 box-sizing: border-box;
//                 min-height: 32px;
//                 padding: 4px 8px;
//                 cursor: pointer;
//                 transition: background-color 0.2s ease;
//
//                 :global(svg) {
//                   margin: 0 8px 0 0;
//                 }
//
//                 &:not(:first-child) {
//                   margin-top: 1px;
//
//                   &::before {
//                     position: absolute;
//                     left: 8px;
//                     right: 8px;
//                     top: -1px;
//                     border-top: 1px solid rgba(255, 255, 255, 0.2);
//                     content: '';
//                   }
//                 }
//
//                 &:hover {
//                   background-color: rgba(0, 0, 0, 0.1);
//                 }
//               }
//             }
//
//             &.rtl {
//               button {
//                 flex-direction: row-reverse;
//                 text-align: right;
//
//                 :global(svg) {
//                   margin: 0 0 0 8px;
//                 }
//
//                 :global(img) {
//                   margin: 0 -4px 0 8px;
//                 }
//               }
//
//               ul {
//                 :global(li) {
//                   flex-direction: row-reverse;
//                   text-align: right;
//
//                   :global(svg) {
//                     margin: 0 0 0 8px;
//                   }
//                 }
//               }
//             }
//
//             &.open {
//               button {
//                 background-color: rgba(0, 0, 0, 0.2);
//               }
//
//               ul {
//                 height: ${((menuItems.length * 32) + (menuItems.length - 1))}px;
//               }
//             }
//           }
//         `}</style>
//       </div>
//     );
//   }
//
//   componentDidMount() {
//     document.addEventListener('mousedown', this.handleClickOutside, false);
//   }
//
//   componentWillMount() {
//     document.removeEventListener('mousedown', this.handleClickOutside, false);
//   }
// }
//
// export default withRouter(connect(state => ({
//   headerHeight: state.ui.metrics.headerHeight,
//   lang: state.settings.lang,
//   open: state.ui.userMenuOpen,
// }), {
//   showModal,
//   updateUi,
//   updateSettings,
// })(UserMenu));
