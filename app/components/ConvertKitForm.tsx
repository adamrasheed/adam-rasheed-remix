import { Form, useActionData, useTransition } from "@remix-run/react";
import { FC } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  formId: string | null;
};

const ConvertKitForm: FC<Props> = ({
  title = "Like this Post? Get helpful Posts like this in Your Inbox!",
  subtitle = "Sign Up today & receive Articles twice a month",
  formId,
}) => {
  const actionData = useActionData();
  const { state } = useTransition();

  const isSuccessful = !!actionData?.subscription;
  const isSubmitting = state === "submitting";

  return (
    <div className="p-8 text-xl space-y-4 bg-slate-50 shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p className="">{subtitle}</p>
      <Form
        method="post"
        className=" w-full grid gap-4 md:grid-cols-2 md:gap-8"
        action=""
      >
        <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">
            Email<span className="asterisk">(Required)</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@example.com"
            required
          />
        </fieldset>
        {formId && <input type="hidden" name="formId" value={formId} />}
        <button
          className="btn primary md:col-span-2 md:py-3 md:px-12 w-full max-w-md mx-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
};

export default ConvertKitForm;
