import * as Yup from 'yup';

// Step 1 validation schema
const Step1ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
});

// Step 2 validation schema
const Step2ValidationSchema = Yup.object().shape({
    otp: Yup.string()
        .length(4, 'Verification code must be exactly 4 characters')
        .matches(/^\d+$/, 'Verification code must contain only numbers')
});

// Step 3 validation schema
const Step3ValidationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .required('New password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        ),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm password is required')
});

export { Step1ValidationSchema, Step2ValidationSchema, Step3ValidationSchema };
