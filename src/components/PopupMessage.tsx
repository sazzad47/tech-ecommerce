import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/state/store';
import Swal, { SweetAlertOptions } from 'sweetalert2';

const SweetAlert = () => {
  const { alert } = useSelector((state: RootState) => state.auth);
  const {
    show,
    title,
    text,
    icon,
    showConfirmButton,
    confirmButtonText,
    onConfirmClick,
  } = alert;
 console.log('show', show)
  useEffect(() => {
    if (show) {
      const options: SweetAlertOptions = {
        title: title || undefined,
        text: text || undefined,
        icon: icon || undefined,
        showConfirmButton,
        confirmButtonText: confirmButtonText || undefined,
        // preConfirm: onConfirmClick || undefined,
      };

      Swal.fire(options);
    }
  }, [show]);

  return null;
};

export default SweetAlert;
