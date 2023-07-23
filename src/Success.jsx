import IconList from "./assets/icon-list.svg";
import PropTypes from "prop-types";

export function Success({ emailAddress, onDismiss }) {
  Success.propTypes = {
    emailAddress: PropTypes.string,
    onDismiss: PropTypes.func,
  };

  return (
    <section className="flex items-center justify-center px-[12rem] max-[414px]:px-0">
      <div className="bg-white rounded-3xl p-16 flex flex-col w-3/6 max-[1024px]:w-[80%] max-[768px]:w-full max-[414px]:p-6 max-[414px]:rounded-none max-[414px]:h-[100dvh] max-[414px]:justify-center ">
        <img className="w-16 mb-8" src={IconList} alt="icon-list" />
        <h1 className="text-charcoal-grey text-6xl font-bold mb-8 max-[414px]:text-4xl">
          Thanks for subscribing!
        </h1>
        <p className="mb-8">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{emailAddress}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button
          onClick={onDismiss}
          className="transition-all ease-in-out duration-300 bg-dark-slate-grey text-white rounded-md p-4 font-bold hover:bg-tomato hover:drop-shadow-lg align-self-end"
        >
          Dismiss message
        </button>
      </div>
    </section>
  );
}
