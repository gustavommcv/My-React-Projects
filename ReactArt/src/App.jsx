import Header from "./components/Header";
import headerLogo from './assets/logo.png';
import Input from "./components/Input";
import Button from "./components/Button";
import React from "react";

function App() {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredPassword, setEnteredPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleClick() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <>
      <Header title="ReactArt" description="A community of artists and art-lovers" logo={headerLogo} />

      <div className="flex flex-col rounded items-center bg-gradient-to-b from-zinc-700 to-zinc-800 mx-auto max-w-96 py-8">
        <div className="mb-4">
          <Input 
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            invalid={emailNotValid}
          >Email</Input>

          <Input 
            type="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            invalid={passwordNotValid}
          >Password</Input>
        </div>

        <div className="w-80 flex justify-end gap-4">
          <button className="text-amber-400">Create a new account</button>
          
          <Button onClick={handleClick} className="uppercase font-semibold px-4 py-2 rounded bg-amber-400">Sign in</Button>
        </div>
      </div>
    </>
  );
}

export default App;
