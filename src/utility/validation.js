const validate = (value, rules, connectedValue) => {
    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'minLength':
                isValid = isValid && minLengthValidator(value, rules[rule]);
                break;
            case 'maxLength':
                isValid = isValid && maxLengthValidator(value, rules[rule]);
                break;
            case 'alphanumeric':
                isValid = isValid && alphanumericValidator(value);
                break;
            case 'isEmail':
                isValid = isValid && emailValidator(value);
                break;
            case 'equalTo':
                isValid = isValid && equalToValidator(value, connectedValue);
                break;
            case 'checkEmpty':
                isValid = isValid && !checkEmptyValidator(value);
                break;
            default:
                isValid = isValid;
        }
    }
    return isValid;
}

export const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
};

export const maxLengthValidator = (val, minLength) => {
    return val.length <= minLength;
};

export const alphanumericValidator = val => {
    const alphanumeric = /^[a-z0-9]+$/i;
    return alphanumeric.test(val);
};

export const emailValidator = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const equalToValidator = (value, connectedValue) => {
    return value === connectedValue;
};


export const checkEmptyValidator = value => {
    return value === '';
}

export default validate;