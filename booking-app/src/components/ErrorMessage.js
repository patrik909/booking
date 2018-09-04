import ReactDOM from 'react-dom';

function ErrorMessage(props) {
  return ReactDOM.createPortal(props.children, props.element);
}

export default ErrorMessage;
