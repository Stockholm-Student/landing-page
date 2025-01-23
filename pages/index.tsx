import { Afacad, Geist } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export default function Home() {
  const [dialogElement, setDialogElement] =
    React.useState<HTMLDialogElement | null>(null);
  const [cancelButtonElement, setCancelButtonElement] =
    React.useState<HTMLButtonElement | null>(null);
  const [openButtonElement, setOpenButtonElement] =
    React.useState<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const dialog = document.querySelector("dialog");
    const cancelButton = document.querySelector("#cancel");
    const openButton = document.querySelector("#openButton");

    setDialogElement(dialog as HTMLDialogElement);
    setCancelButtonElement(cancelButton as HTMLButtonElement);
    setOpenButtonElement(openButton as HTMLButtonElement);
  }, []);

  React.useEffect(() => {
    if (!dialogElement || !cancelButtonElement || !openButtonElement) return;

    openButtonElement.addEventListener("click", () => {
      dialogElement.showModal();
    });

    cancelButtonElement.addEventListener("click", () => {
      dialogElement.close();
    });

    return () => {
      openButtonElement.removeEventListener("click", () => {
        dialogElement.showModal();
      });
      cancelButtonElement.removeEventListener("click", () => {
        dialogElement.close();
      });
    };
  }, [dialogElement, cancelButtonElement, openButtonElement]);
  return (
    <main>
      <div
        className={`${geistSans.variable} ${afacad.variable} min-h-screen flex flex-col justify-center items-center`}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            className="object-cover h-full w-full filter brightness-75"
            src="/stockholm-night-day.jpeg"
            alt="Background picture of stockholm"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative flex justify-center flex-col items-center space-y-10">
          <img
            aria-hidden
            src="/horizontal-logo.svg"
            alt="Stockholm Student Logo"
            className="w-[250px] lg:w-[500px] mb-4"
          />
          <div className="text-white text-4xl lg:text-6xl font-semibold text-center">
            <p>Your student life</p>
            <p>in one place!</p>
          </div>
          <div className="text-white text-xl font-semibold text-center">
            <p>We are building a platform for Students in Stockholm</p>
            <p>to make friends, find events and more!</p>
            <p>Sign up below to get notified when we go live</p>
          </div>
          <button
            id="openButton"
            className="bg-white px-5 py-2 rounded-md text-lg w-fit hover:bg-white/90 text-black"
          >
            Sign up
          </button>
        </div>

        <dialog id="dialog" className="p-4 rounded-md md:p-8">
          <div className="w-full flex justify-between items-start mb-4">
            <p className="text-2xl text-black md:mt-4">
              Sign up below to get notified when we go live!
            </p>

            <button
              type="reset"
              id="cancel"
              className="hover:bg-gray-200 p-1 rounded-md h-fit sm:-mr-4 sm:-mt-4 "
            >
              <img
                aria-hidden
                src="/x-icon.svg"
                alt="Stockholm Student Logo"
                className="w-6"
              />
            </button>
          </div>
          <div>
            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
            <form
              action="https://app.kit.com/forms/7578842/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="7578842"
              data-uid="bc22324fdb"
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            >
              <div data-style="clean">
                <ul
                  className="formkit-alert formkit-alert-error"
                  data-element="errors"
                  data-group="alert"
                ></ul>
                <div
                  data-element="fields"
                  data-stacked="false"
                  className="seva-fields formkit-fields flex flex-col gap-4"
                >
                  <div className="flex gap-4 flex-col sm:flex-row w-full">
                    <div className="formkit-field w-full">
                      <input
                        className="formkit-input p-2 border border-slate-100 w-full"
                        aria-label="First Name"
                        style={{
                          color: "rgb(0, 0, 0)",
                          borderColor: "rgb(227, 227, 227)",
                          borderRadius: "4px",
                          fontWeight: 400,
                        }}
                        name="fields[first_name]"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="formkit-field w-full">
                      <input
                        className="formkit-input p-2 border border-slate-100 w-full"
                        name="email_address"
                        style={{
                          color: "rgb(0, 0, 0)",
                          borderColor: "rgb(227, 227, 227)",
                          borderRadius: "4px",
                          fontWeight: 400,
                        }}
                        aria-label="Email Address"
                        placeholder="Email Address"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <button
                    data-element="submit"
                    className="formkit-submit py-2 px-6"
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(0, 0, 0)",
                      borderRadius: "4px",
                      fontWeight: 700,
                    }}
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Confirm</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <span className="text-slate-200 absolute bottom-3 right-3">
        Photo: Xinrui Wan (CC-BY license)
      </span>
    </main>
  );
}
