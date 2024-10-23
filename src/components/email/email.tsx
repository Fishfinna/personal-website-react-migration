import { useFormik } from "formik";
import "./email.scss";
import { Fader } from "../fader/fader";

export function Email() {
  const formik = useFormik({
    initialValues: {
      email: "",
      comments: "",
      _honey: "",
      _captcha: "false",
      _next: "https://shawn-tea.me",
      _invalid: "false",
    },
    onSubmit: (formData) => {
      console.log(formData);
      fetch("https://formsubmit.co/fishfinna12@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(console.log)
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <div className="email">
      <Fader>
        <h1>Send me an Email</h1>
        <p>Ask me anything or just say hi!</p>
        <form className="about-email" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            onChange={formik.handleChange}
            value={formik.values._honey}
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://shawn-tea.me" />
          <input type="hidden" name="_invalid" value="false" />
          <div className="email-content">
            <label htmlFor="email">Return Email:</label>
            <input
              required
              type="email"
              id="return"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="comments">Message:</label>
            <textarea
              required
              name="comments"
              id="comments"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comments}
            />
            <button type="submit">Send It Off</button>
          </div>
        </form>
      </Fader>
    </div>
  );
}
