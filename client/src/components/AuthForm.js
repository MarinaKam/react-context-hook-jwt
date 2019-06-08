import React, { useContext, Fragment } from 'react';
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

const initialState = {
    name: "",
    email: "",
    password: ""
};

const AuthForm = ({heading, btnText, signUp}) => {
    const classes = useStyles();
    const {data} = useContext(LanguageContext);
    if (!data) return <div>Loading...</div>;
    const {input: {name, email, password}} = data;
    return(
        <Fragment>
            <Formik
                initialValues={initialState}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
            >
                {props => (
                    <Container
                        className={classes.container}
                        maxWidth='sm'
                    >
                        <Typography variant='h2'>
                            {heading}
                        </Typography>
                        <form
                            onSubmit={props.handleSubmit}
                            className={classes.form}
                        >
                            { signUp && (
                                <TextField
                                    id="email"
                                    name="email"
                                    label={email}
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                />
                            )}
                            <TextField
                                id="name"
                                name="name"
                                label={name}
                                onChange={props.handleChange}
                                value={props.values.name}
                            />
                            <TextField
                                id="password"
                                name="password"
                                label={password}
                                type="password"
                                onChange={props.handleChange}
                                value={props.values.password}
                            />
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!props.dirty && !props.isSubmitting}
                            >
                                {btnText}
                            </Button>
                        </form>
                    </Container>
                    )}
            </Formik>
        </Fragment>
    )
};

export default AuthForm;