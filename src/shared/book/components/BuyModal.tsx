import confetti from "canvas-confetti";
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";
function BuyModal(_props: any, ref: Ref<unknown>) {
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
    // await myConfetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 },
    // });
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

  return (
    <div>
      <label className="hidden" ref={labelRef} htmlFor="buy-modal"></label>

      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <canvas
          className="w-screen h-screen top-0 left-0 fixed z-auto"
          ref={canvasRef}
        />
        <div className="modal-box gap-4 flex flex-col">
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
            Precisamos de algumas informações para concluir sua compra e enviar
            o eBook. Preencha seus dados abaixo com tranquilidade e, em poucos
            minutos, tenha acesso a tudo que precisa para ter sucesso em
            entrevistas e conseguir seu emprego dos sonhos na área de
            tecnologia.
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Seu Nome"
                className="input input-bordered "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Seu E-mail"
                className="input input-bordered "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Seu Telefone"
                className="input input-bordered "
              />
            </div>
          </form>
          <p>
            Ah, e não se preocupe, seus dados estão seguros conosco e não serão
            compartilhados com terceiros.
          </p>
          <p>
            Além disso, ao finalizar a compra, você receberá automaticamente um
            e-mail com o comprovante de compra e um link para baixar o eBook.
          </p>
          <p>
            Aproveite agora para finalizar sua compra e comece a se preparar
            para alcançar seus objetivos profissionais.
          </p>
          <div className="modal-action">
            <button className="btn btn-success animate-bounce hover:animate-none">
              Receber meu eBook agora!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(BuyModal);
