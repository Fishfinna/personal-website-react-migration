import { useFormik } from "formik";
import "./email.scss";

export function Email() {
  const formik = useFormik({
    initialValues: {
      email: "",
      comments: "",
    },
    onSubmit: (formData) => {
      fetch("https://formsubmit.co/fishfinna12@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <>
      <div className="email">
        <h1>Send me an Email</h1>
        <p>Ask me anything or just say hi!</p>
        <form
          className="about-email"
          action="https://formsubmit.co/fishfinna12@gmail.com"
          method="POST"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_invalid" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://fishfinna.github.io/personal-website/"
          />
          <div className="email-content">
            <label htmlFor="email">Return Email:</label>
            <input
              type="email"
              id="return"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="comments">Message:</label>
            <textarea
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
      </div>
    </>
  );
}