import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { TextField } from '@mui/material';
import { CustomButton as Button } from '../../components/Button';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import { Label } from '@mui/icons-material';

interface IFormValues {
    email: string;
    password: string;
}

interface IFormErrors {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const [reqError, setReqError] = useState<string | null>(null);
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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const emailError = validateEmail(formValues.email);
        const passwordError = formValues.password ? '' : 'password is required';

        if (emailError || passwordError) {
            setFormErrors({
                email: emailError,
                password: passwordError,
            });
        } else {
            try {
                await loginUser({
                    username: formValues.email,
                    password: formValues.password,
                });
const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const emailError = validateEmail(formValues.email);
        const passwordError = formValues.password ? '' : 'password is required';

        if (emailError || passwordError) {
            setFormErrors({
                email: emailError,
                password: passwordError,
            });
        } else {
            try {
                await loginUser({
                    username: formValues.email,
                    password: formValues.password,
                });

                navigate('/main');
                console.log('user logged successfully');

            } catch (error) {
                setReqError('invalid credentials')
            }
        }
    };
                navigate('/main');
                console.log('user logged successfully');

            } catch (error) {
                setReqError('invalid credentials')
            }
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
                    disabled={isFormInvalid()} className="btnSubmit" type="submit" variant='outlined' color="secondary" fullWidth>
                    Login
                </Button>
                {reqError && <span color='error' className="errorText">{reqError}</span>}
            </form>
        </Container>
    );
};