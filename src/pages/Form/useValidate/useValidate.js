import { useState } from 'react';

export const useValidate = () => {
  const [error, setError] = useState({});
  const pattern = new RegExp(/^\+375\d{2}\d{7}$/);
  const nameRegex = new RegExp(/[А-Яа-я]{2,10}/);
  const streetRegex = new RegExp(/^[А-Яа-я]{2,15}$/);
  const houseRegex = new RegExp(/^[0-9]{1,3}[0-9абвгде\/]{1,4}$/i);

  const validate = (name, value) => {
    switch (name) {
      case 'name': {
        if (value.length < 4 || value.length > 10) {
          setError({ ...error, name: 'X Incorrect length!' });
        } else if (!nameRegex.test(value)) {
          setError({ ...error, name: 'X Enter a valid name!' });
        } else {
          setError({ ...error, name: '' });
        }
        break;
      }

      case 'phone': {
        if (!pattern.test(value)) {
          setError({ ...error, phone: 'Х Please enter valid mobile number!' });
        } else {
          setError({ ...error, phone: '' });
        }
        break;
      }

      case 'street': {
        if (!streetRegex.test(value)) {
          setError({ ...error, street: 'Х Please enter a valid address!' });
        } else {
          setError({ ...error, street: '' });
        }
        break;
      }

      case 'house': {
        if (!houseRegex.test(value)) {
          setError({ ...error, house: 'Х Please enter a valid house!' });
        } else {
          setError({ ...error, house: '' });
        }
        break;
      }

      case 'flat': {
        if (!/^[0-9]{1,3}$/.test(value)) {
          setError({ ...error, flat: 'Х Please enter a valid flat!' });
        } else {
          setError({ ...error, flat: '' });
        }
        break;
      }

      case 'entrance': {
        if (!/^[0-9]{1,2}$/.test(value)) {
          setError({ ...error, entrance: 'Х Please enter a valid entrance !' });
        } else {
          setError({ ...error, entrance: '' });
        }
        break;
      }

      case 'floor': {
        if (!/^[0-9]{1,2}$/.test(value)) {
          setError({ ...error, floor: 'Х Please enter a valid floor !' });
        } else {
          setError({ ...error, floor: '' });
        }
        break;
      }

      default:
        break;
    }
  };
  return { error, validate };
};
