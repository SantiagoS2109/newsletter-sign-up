import { useEffect, useState } from "react";
import { Success } from "./Success";
import { NewsletterForm } from "./NewsletterForm";

function App() {
  const [isSent, setIsSent] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [title, setTitle] = useState("Subscribe now!");

  useEffect(
    function () {
      document.title = `${title}`;

      return () => (document.title = "Subscribe now!");
    },
    [title]
  );

  function handleDismiss() {
    setIsSent(false);
    setEmailAddress("");
    setTitle("Subscribe now!");
  }

  return (
    <main className="bg-dark-slate-grey flex justify-center align-center h-[100dvh] max-[414px]:h-max ">
      {!isSent && (
        <NewsletterForm
          isSent={isSent}
          onSetIsSent={setIsSent}
          emailAddress={emailAddress}
          onSetEmailAddress={setEmailAddress}
          onSetTitle={setTitle}
        />
      )}
      {isSent && (
        <Success emailAddress={emailAddress} onDismiss={handleDismiss} />
      )}
    </main>
  );
}

export default App;
