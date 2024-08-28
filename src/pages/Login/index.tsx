import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { TextField } from '@mui/material';
import { CustomButton as Button } from '../../components/Button';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

interface IFormValues {
    email: string;
    password: string;
}

interface IFormErrors {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const [formValues, setFormValues] = useState<IFormValues>({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<IFormErrors>({
        email: '',
        password: '',
    });

    const validateEmail = (email: string): string => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return 'email is required';
        } else if (!regex.test(email)) {
            return 'enter a valid email';
        }
        return '';
    };

    const handleChange = (field: keyof IFormValues) => (event: ChangeEvent<HTMLInputElement>): void => {
        setFormValues({ ...formValues, [field]: event.target.value });
    };

    const handleBlur = (field: keyof IFormValues) => (event: FocusEvent<HTMLInputElement>): void => {
        let error = '';

        switch (field) {
            case 'email':
                error = validateEmail(formValues.email);
                break;
            case 'password':
                if (!formValues.password) {
                    error = 'password is required';
                }
                break;
            default:
                break;
        }

        setFormErrors({ ...formErrors, [field]: error });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const emailError = validateEmail(formValues.email);
        const passwordError = formValues.password ? '' : 'password is required';

        if (emailError || passwordError) {
            setFormErrors({
                email: emailError,
                password: passwordError,
            });
        } else {
            console.log('login submitted successfully');
        }
    };

    const isFormInvalid = (): boolean => {
        return (
            Object.values(formErrors).some((error) => error !== '') ||
            Object.values(formValues).some((value) => value === '')
        );
    };

    const navigate = useNavigate()

    return (
        <Container>
            <h3>login</h3>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <TextField
                        label="email"
                        type="email"
                        className="input emailInput"
                        value={formValues.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        required
                        fullWidth
                        margin="normal"
                        color="secondary"
                    />
                    <TextField
                        label="password"
                        type="password"
                        className="input passwordInput"
                        value={formValues.password}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={!!formErrors.password}
                        helperText={formErrors.password}
                        required
                        fullWidth
                        margin="normal"
                        color="secondary"
                    />
                </div>
                <Button 
                    onClick={() => navigate('/Main')}
                    disabled={isFormInvalid()} className="btnSubmit" type="submit" variant="outlined" color="secondary" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};