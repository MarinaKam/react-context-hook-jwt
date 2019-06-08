import React, { useContext } from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { Button, TextField, Container, makeStyles, Typography } from "@material-ui/core";
import LanguageContext  from "../contexts/LanguageContext";

const useStyles = makeStyles(theme => ({
    container: {
        margin: "30px auto",
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: '30px auto',
    }
}));

const AuthForm = ({heading, btnText, signUp}) => {
    const classes = useStyles();
    const {data} = useContext(LanguageContext);
    if (!data) return <div>Loading...</div>;
    const {input: {name, email, password}} = data;
    return(
        <Container
            className={classes.container}
            maxWidth='sm'
        >
            <Typography variant='h2'>
                {heading}
            </Typography>
            <form
                onSubmit={() => {}}
                className={classes.form}
            >
                { signUp && (
                    <TextField
                        id="email"
                        name="email"
                        label={email}
                    />
                )}
                <TextField
                    id="name"
                    name="name"
                    label={name}
                />
                <TextField
                    id="password"
                    name="password"
                    label={password}
                    type="password"
                />
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    {btnText}
                </Button>
            </form>
        </Container>
    )
};

export default AuthForm;