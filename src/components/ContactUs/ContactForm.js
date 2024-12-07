
import Button from "../../helpers/Button/Button";
import useInput from "../../hooks/use-input";
import classes from "./ContactForm.module.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^\d{10,15}$/;

const ContactForm = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    isValid: enteredNameIsValid,
    inputBlurHandler: nameBlueHandler,
    reset: resetNameInput,
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
    value: enteredPhoneNumber,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    isValid: enteredPhoneNumberIsValid,
    inputBlurHandler: phoneNumberBlueHandler,
    reset: resetPhoneNumberInput,
  } = useInput((value) => mobileRegex.test(value));
  const {
    value: enteredMessage,
    hasError: MessageInputHasError,
    valueChangeHandler: messageChangeHandler,
    isValid: enteredMessageIsValid,
    inputBlurHandler: messageBlueHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneNumberIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneNumberIsValid ||
      !enteredMessageIsValid
    ) {
      return;
    }

    console.log(enteredName, enteredEmail, enteredPhoneNumber, enteredMessage);
    resetNameInput();
    resetEmailInput();
    resetPhoneNumberInput();
    resetMessageInput();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          {nameInputHasError ? (
            <p className={classes.error}>Name is required.</p>
          ) : (
            <label htmlFor="name">NAME</label>
          )}

          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlueHandler}
            className={nameInputHasError ? classes.inputError : ""}
          />
        </div>
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
      </div>
      <div className={classes.control}>
        {phoneNumberInputHasError ? (
          <p className={classes.error}>Phone Number is required.</p>
        ) : (
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
        )}
        <input
          type="number"
          id="phoneNumber"
          value={enteredPhoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlueHandler}
          className={phoneNumberInputHasError ? classes.inputError : ""}
        />
      </div>
      <div className={classes.control}>
        {MessageInputHasError ? (
          <p className={classes.error}>Please enter your message.</p>
        ) : (
          <label htmlFor="message">MESSAGE</label>
        )}
        <textarea
          id="message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlueHandler}
          className={MessageInputHasError ? classes.textareaError : ""}
        />
      </div>
      <Button text="SEND" type="submit" disabled={!formIsValid} />
    </form>
  );
};
export default ContactForm;

