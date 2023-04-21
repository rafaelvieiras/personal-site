import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";
function BuyModal(_props: any, ref: Ref<unknown>) {
  const [name, setName] = useState<string | Error>("");
  const [email, setEmail] = useState<string | Error>("");
  const [phone, setPhone] = useState<string | Error>("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<undefined | any>();

  const router = useRouter();
  const canvasRef = useRef(null);
  const labelRef = useRef(null);
  const [confettiStarted, setConfettiStarted] = useState(false);
  const myConfetti = confetti.create(canvasRef.current, {
    resize: true,
    useWorker: true,
  });

  const fireConfettiFrame = (end) => {
    const colors = ["#a864fd", "#fdff6a"];
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
    if (Date.now() < end) {
      requestAnimationFrame(() => fireConfettiFrame(end));
    }
  };

  const fireConfetti = async () => {
    const end = Date.now() + 5 * 1000;
    fireConfettiFrame(end);
  };

  const openModal = () => {
    console.log("open modal");
    labelRef.current.click();
    if (!confettiStarted) {
      fireConfetti();
      setConfettiStarted(true);
    }
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  const brPhoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{5})\d+?$/, "$1");
  };

  const phoneOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && typeof phone === "string") {
      setPhone(phone.slice(0, -1));
    }
  };

  const phoneOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 16) {
      return;
    }
    console.log("Phone: ", value, typeof value);
    setPhone(brPhoneMask(value));
  };

  const buy = async () => {
    const data = {
      name,
      email,
      phone,
    };

    if (name instanceof Error || name === "") {
      setName(
        new Error("Por favor, preencha seu nome para continuar a compra")
      );
      return;
    }
    if (email instanceof Error || email === "") {
      setEmail(
        new Error("Por favor, preencha seu e-mail para continuar a compra")
      );
      return;
    }
    if (phone instanceof Error || phone === "") {
      setPhone(
        new Error("Por favor, preencha seu telefone para continuar a compra")
      );
      return;
    }

    setLoading(true);

    try {
      const request = await fetch("/api/book/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();

      if (response.error) {
        setLoading(false);
        setFeedback({
          message: response.error,
          type: "error",
        });
        return;
      }

      setFeedback({
        message: "Registro feito com sucesso!",
        type: "success",
      });

      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_BOOK_URL);
      }, 2000);
    } catch (error) {
      setFeedback({
        message:
          "Ocorreu um erro ao realizar sua compra. Tente novamente mais tarde.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label className="hidden" ref={labelRef} htmlFor="buy-modal"></label>

      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <canvas
          className="w-screen h-screen top-0 left-0 fixed z-auto"
          ref={canvasRef}
        />
        <div className="modal-box">
          {feedback?.type !== "success" ? (
            <div className="gap-4 flex flex-col z-10">
              <h3 className="font-bold text-xl">
                Parabéns pela sua decisão em adquirir o nosso eBook
              </h3>
              <div className="alert shadow-md">
                <div>
                  <span>
                    🥳🎉👏🤝 Você está prestes a dar um grande passo na sua
                    carreira!
                  </span>
                </div>
              </div>
              <p className="py-4">
                Precisamos de algumas informações para concluir sua compra e
                enviar o eBook. Preencha seus dados abaixo com tranquilidade e,
                em poucos minutos, tenha acesso a tudo que precisa para ter
                sucesso em entrevistas e conseguir seu emprego dos sonhos na
                área de tecnologia.
              </p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu Nome"
                    className={`input input-bordered ${
                      name instanceof Error ? "input-error" : ""
                    }`}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {name instanceof Error && (
                    <span className="text-error">{name.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Seu E-mail"
                    className={`input input-bordered ${
                      email instanceof Error ? "input-error" : ""
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email instanceof Error && (
                    <span className="text-error">{email.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Seu Telefone"
                    className={`input input-bordered
                    ${
                      phone instanceof Error
                        ? "input-error"
                        : phone === ""
                        ? ""
                        : "input-success"
                    }`}
                    value={phone instanceof Error ? "" : phone || ""}
                    onKeyDown={phoneOnKeyDown}
                    onChange={phoneOnChange}
                  />
                  {phone instanceof Error && (
                    <span className="text-error">{phone.message}</span>
                  )}
                </div>
              </form>
              <p>
                Ah, e não se preocupe, seus dados estão seguros conosco e não
                serão compartilhados com terceiros.
              </p>
              <p>
                Além disso, ao finalizar a compra, você receberá automaticamente
                um e-mail com o comprovante de compra e um link para baixar o
                eBook.
              </p>
              <p>
                Aproveite agora para finalizar sua compra e comece a se preparar
                para alcançar seus objetivos profissionais.
              </p>
              <div className="modal-action">
                <button
                  onClick={buy}
                  className={`btn btn-success animate-bounce hover:animate-none ${
                    loading ? "loading" : ""
                  } `}
                >
                  {loading ? "Carregando..." : "Continuar comprando"}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="alert flex-col shadow-md">
                <div className="flex-col text-xl text-center">
                  <span className="text-5xl">🤝</span>
                  <p>Registramos seus dados para iniciar sua compra!</p>{" "}
                  <p>
                    <strong className="text-orange">
                      Estamos redirecionando você
                    </strong>{" "}
                    ao pagamento, aguarde um momento!
                  </p>
                </div>
                <progress className="progress progress-success w-full"></progress>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(BuyModal);
