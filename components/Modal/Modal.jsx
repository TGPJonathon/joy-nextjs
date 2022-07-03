import { useState, useEffect } from 'react';

import classes from './Modal.module.css';

export default function Modal({ content, visible, onClose }) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  if (!show) return null;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {content}
        <div className={classes.close}>
          <button onClick={() => onClose()} className={classes.close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
