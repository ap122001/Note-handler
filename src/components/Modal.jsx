import classes from './Modal.module.css';

function Modal(props){
    // console.log("inside modal prop", props);
   return <>
      
      <div className={classes.backdrop} onClick={props.changeModalVisibility}></div>
      <dialog open className={classes.modal}>{props.children}</dialog>
   </>
}

export default Modal;