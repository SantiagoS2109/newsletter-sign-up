import IllustrationSignUpDesktop from "./assets/illustration-sign-up-desktop.svg";
import IllustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";
import PropTypes from "prop-types";
import IconList from "./assets/icon-list.svg";

export function NewsletterForm({
  onSetIsSent,
  emailAddress,
  onSetEmailAddress,
  onSetTitle,
}) {
  NewsletterForm.propTypes = {
    onSetIsSent: PropTypes.func,
    emailAddress: PropTypes.string,
    onSetEmailAddress: PropTypes.func,
    onSetTitle: PropTypes.func,
  };

  function handleSubmit(e) {
    e.preventDefault();

    onSetIsSent(true);
    onSetTitle("Success!");
  }

  return (
    <section className="px-[13rem] py-24 max-[1024px]:px-[6rem] max-[768px]:px-6 max-[414px]:p-0 ">
      <div className="bg-white rounded-[32px] grid grid-cols-2 p-6 justify-items-end items-center h-max max-[414px]:rounded-none max-[414px]:grid-cols-1 max-[414px]:p-0 ">
        <div className="px-10 py-8 h-max max-[414px]:px-6">
          <h1 className="text-charcoal-grey text-center text-6xl font-bold mb-6 max-[1024px]:text-5xl max-[768px]:text-4xl max-[414px]:text-left">
            Stay updated!
          </h1>
          <p className="mb-6 text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="mb-6">
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem additionalClass={"mb-12"}>And much more!</ListItem>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
            action="subscribe"
          >
            <label className="text-sm font-bold mb-2" htmlFor="email">
              <span className="after:content-['Valid email'] after:ml-0.5 after:text-red-500">
                Email address
              </span>
            </label>
            <input
              className="h-12 p-4 text-sm bg-white border-solid border-grey-100 border-2 rounded-md mb-6 focus:outline-none focus:border-grey focus:ring-1 focus:ring-grey disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:bg-[#ffe8e6] invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="email"
              type="email"
              value={emailAddress}
              onChange={(e) => onSetEmailAddress(e.target.value)}
              placeholder="email@company.com"
              required
            />

            <button
              className="transition-all ease-in-out duration-300 bg-dark-slate-grey text-white rounded-md p-4 font-bold hover:bg-tomato hover:drop-shadow-lg max-[768px]:text-sm"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="max-[414px]:row-start-1 max-[414px]:w-full">
          <img
            className="max-h-full w-full max-[414px]:hidden"
            src={IllustrationSignUpDesktop}
            alt=""
          />
          <img
            className="max-h-full w-full min-[415px]:hidden "
            src={IllustrationSignUpMobile}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export function ListItem({ children, additionalClass }) {
  ListItem.propTypes = {
    children: PropTypes.string,
    additionalClass: PropTypes.string,
  };

  return (
    <li className={`flex gap-3 mb-4 text-sm ${additionalClass}`}>
      <img src={IconList} alt="icon-list" />
      <p>{children}</p>
    </li>
  );
}
