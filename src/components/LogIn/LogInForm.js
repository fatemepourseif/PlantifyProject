import { useState } from "react";
import Button from "../../helpers/Button/Button";
import useInput from "../../hooks/use-input";
import classes from "./LogInForm.module.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LogInForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    isValid: enteredFirstNameIsValid,
    inputBlurHandler: firstNameBlueHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    isValid: enteredLastNameIsValid,
    inputBlurHandler: lastNameBlueHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlueHandler,
    reset: resetEmailInput,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    isValid: enteredPasswordIsValid,
    inputBlurHandler: passwordBlueHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  let formIsValid;

  if (isLogin) {
    formIsValid = enteredEmailIsValid && enteredPasswordIsValid;
  } else {
    formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredPasswordIsValid;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredLastNameIsValid
    ) {
      return;
    }

    console.log(
      enteredFirstName,
      enteredEmail,
      enteredPassword,
      enteredLastName
    );
    resetFirstNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetLastNameInput();
  };
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <h1>{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h1>
      <form onSubmit={submitFormHandler}>
        {!isLogin && (
          <div className={classes.control}>
            {firstNameInputHasError ? (
              <p className={classes.error}>First Name is required.</p>
            ) : (
              <label htmlFor="firstName">FIRST NAME</label>
            )}

            <input
              type="text"
              id="firstName"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlueHandler}
              className={firstNameInputHasError ? classes.inputError : ""}
            />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            {lastNameInputHasError ? (
              <p className={classes.error}>Last Name is required.</p>
            ) : (
              <label htmlFor="lastName">LAST NAME</label>
            )}

            <input
              type="text"
              id="lastName"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlueHandler}
              className={lastNameInputHasError ? classes.inputError : ""}
            />
          </div>
        )}
        <div className={classes.control}>
          {emailInputHasError ? (
            <p className={classes.error}>Please Enter a valid email.</p>
          ) : (
            <label htmlFor="email">EMAIL</label>
          )}
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlueHandler}
            className={emailInputHasError ? classes.inputError : ""}
          />
        </div>
        <div className={classes.control}>
          {passwordInputHasError ? (
            <p className={classes.error}>
              Please Enter a valid password (more than 6 digits).
            </p>
          ) : (
            <label htmlFor="password">PASSWORD</label>
          )}
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlueHandler}
            className={passwordInputHasError ? classes.inputError : ""}
          />
        </div>
        <div>
          <Button
            className={classes.action}
            type="submit"
            text={isLogin ? "SIGN IN" : "CREATE"}
            disabled={!formIsValid}
          />
          {isLogin && (
            <p onClick={switchAuthModeHandler} className={classes.switchBtn}>
              Create account
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default LogInForm;
