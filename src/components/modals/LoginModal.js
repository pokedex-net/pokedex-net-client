// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// import Button from '../controls/Button';
// import languages from '../../fixtures/languages';
// import { hideModal } from '../../stores/ui/actions';
//
// /**
//  * An error page component.
//  * @param {Object} props - Component props
//  * @return {Array<React.Component>} returns an array of React elements
//  */
// export class LoginModal extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       username: '',
//       password: '',
//     };
//
//     this.handleCancel = this.handleCancel.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   }
//
//   handleCancel(e) {
//     e.preventDefault();
//     this.props.hideModal();
//   }
//
//   handleLogin(e) {
//     e.preventDefault();
//     // this.props.loginUser({ username: this.state.username, password: this.state.password });
//   }
//
//   render() {
//     return [
//       <form key="form" onSubmit={ this.handleLogin }>
//         <div>
//           <input
//             value={ this.state.username }
//             placeholder={ languages[this.props.lang].username }
//             onChange={ (e) => { this.setState({ username: e.target.value }); } }
//           />
//           <input
//             type="password"
//             value={ this.state.password }
//             placeholder={ languages[this.props.lang].password }
//             onChange={ (e) => { this.setState({ password: e.target.value }); } }
//           />
//         </div>
//
//         <div className="buttons">
//           <Button kind="flat" onClick={ this.handleCancel }>{ languages[this.props.lang].cancel }</Button>
//           <Button type="submit">{ languages[this.props.lang].login }</Button>
//         </div>
//
//         <style jsx>{`
//           form {
//             display: flex;
//             flex-direction: column;
//
//             div {
//               display: flex;
//               margin-top: 16px;
//
//               input {
//                 box-sizing: border-box;
//                 height: 32px;
//                 margin: 0 8px;
//
//                 &:first-child {
//                   margin-${(languages[this.props.lang].rtl) ? 'right' : 'left'}: 0;
//                 }
//
//                 &:last-child {
//                   margin-${(languages[this.props.lang].rtl) ? 'left' : 'right'}: 0;
//                 }
//               }
//
//               :global(button) {
//                 height: 32px;
//                 margin: 0 8px;
//
//                 &:first-child {
//                   margin-${(languages[this.props.lang].rtl) ? 'right' : 'left'}: 0;
//                 }
//
//                 &:last-child {
//                   margin-${(languages[this.props.lang].rtl) ? 'left' : 'right'}: 0;
//                 }
//               }
//
//               &.buttons {
//                 justify-content: flex-end;
//                 text-align: right;
//               }
//
//               &:first-child {
//                 margin-top: 0;
//               }
//             }
//           }
//         `}</style>
//       </form>,
//     ];
//   }
// }
//
// export default connect(state => ({
//   lang: state.userData.settings.lang,
// }), {
//   hideModal,
// })(LoginModal);
