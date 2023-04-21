import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [name, setName] = useState<string | Error>("");
  const [email, setEmail] = useState<string | Error>("");
  const [message, setMessage] = useState<string | Error>("");
  const [captcha, setCaptcha] = useState<string | Error>("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | Error>("");

  const recaptchaRef = useRef(null);

  const validateForm = (e) => {
    e.preventDefault();
    setLoading(true);
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode) => {
    setLoading(false);
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      console.log("Captcha expired");
      return;
    }

    // If the reCAPTCHA code is not null or undefined then set the
    // captchaCode state to the value of the reCAPTCHA code
    setCaptcha(captchaCode);
  };

  const validate = () => {
    if (name instanceof Error || !name) {
      setName(new Error("Nome é obrigatório"));
      return false;
    }
    if (email instanceof Error || !email) {
      setEmail(new Error("E-mail é obrigatório"));
      return false;
    }
    if (message instanceof Error || !message) {
      setMessage(new Error("Mensagem é obrigatória"));
      return false;
    }

    if (captcha instanceof Error || !captcha) {
      setCaptcha(
        new Error("O reCAPTCHA não foi validado, por favor tente novamente")
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      captcha,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    if (!validate()) {
      return;
    }

    setLoading(true);
    const response = await fetch("/api/contact", options);
    const json = await response.json();
    setLoading(false);

    if (json.error) {
      setStatus(
        new Error(
          "Ocorreu um erro ao enviar a mensagem, por favor tente novamente mais tarde."
        )
      );
      return;
    }

    setStatus("Mensagem enviada com sucesso!");
  };

  const formStructure = [
    {
      type: "text",
      placeholder: "Nome",
      onChange: (e) => setName(e.target.value),
      error: name instanceof Error,
      errorMessage: name instanceof Error ? name.message : "",
    },
    {
      type: "email",
      placeholder: "E-mail",
      onChange: (e) => setEmail(e.target.value),
      error: email instanceof Error,
      errorMessage: email instanceof Error ? email.message : "",
    },
    {
      type: "textarea",
      placeholder: "Mensagem",
      onChange: (e) => setMessage(e.target.value),
      error: message instanceof Error,
      errorMessage: message instanceof Error ? message.message : "",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-5">
      {status ? (
        <div
          className={`alert ${
            status instanceof Error ? "alert-error" : "alert-success"
          }`}
        >
          {status instanceof Error ? status.message : status}
        </div>
      ) : (
        <form className="flex flex-col w-full gap-5">
          {formStructure.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              {field.type === "textarea" ? (
                <textarea
                  className={`textarea textarea-bordered ${
                    field.error && "textarea-error"
                  }`}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                />
              ) : (
                <input
                  className={`input input-bordered ${
                    field.error && "input-error"
                  }`}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                />
              )}
              {field.error && (
                <span className="text-red-500 text-sm">
                  {field.errorMessage}
                </span>
              )}
            </div>
          ))}
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />

          {captcha instanceof Error && (
            <span className="alert alert-error">{captcha.message}</span>
          )}

          {captcha && !(captcha instanceof Error) && (
            <div className="chat chat-start">
              <div className="chat-image avatar text-2xl">🤖</div>
              <div className="chat-bubble">
                <strong>BEP! BOP!</strong>, você é um humano! Envie sua mensagem
                agora! ⬇️
              </div>
            </div>
          )}

          {!captcha && !loading ? (
            <button className="btn" onClick={validateForm}>
              🤖 Verificar se sou humano
            </button>
          ) : (
            <button
              className={`btn ${loading && "loading"}`}
              onClick={handleSubmit}
            >
              {loading ? "Enviando..." : "Enviar minha mensagem"}
            </button>
          )}
        </form>
      )}
    </div>
  );
}
