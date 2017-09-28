import { Injectable} from '@angular/core';

declare var toastr: any;

@Injectable()
export class NotificationsService {

    constructor() {
      toastr.options = {
          "closeButton": true, // true/false
          "debug": false, // true/false
          "newestOnTop": false, // true/false
          "progressBar": true, // true/false
          "positionClass": "toast-bottom-right", // toast-top-right / toast-top-left / toast-bottom-right / toast-bottom-left
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300", // in milliseconds
          "hideDuration": "1000", // in milliseconds
          "timeOut": "3000", // in milliseconds
          "extendedTimeOut": "1000", // in milliseconds
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
      }
    }

    showSuccess(body: string = 'Esto es una notificación de correcto') {
      toastr.success(body);
    }

    showError(body: string = 'Esto es una notificación de error') {
      toastr.error(body);
    }

    showWarning(body: string = 'Esto es una notificación de advertencia') {
      toastr.warning(body);
    }

    showInfo(body: string = 'Esto es una notificación de informacion') {
        toastr.info(body);
    }
}
