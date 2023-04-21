import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../shared/Header";

export default function TermsUse() {
  const router = useRouter();
  const back = () => {
    // Check if has a previous page
    if (router.asPath !== router.route) {
      router.back();
    }

    // If not, go to home
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Termos de Uso | Rafaelvieiras</title>
      </Head>
      <main className="relative scroll-smooth flex flex-col gap-8">
        <Header action={undefined}>
          <li>
            <button onClick={back} className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
              </svg>{" "}
              Voltar
            </button>
          </li>
          <li>
            <Link href="/terms/use" className="text-white">
              Termos de Uso
            </Link>
          </li>
          <li>
            <Link href="/terms/privacy" className="text-white">
              Política de Privacidade
            </Link>
          </li>
        </Header>
        <div className="container mx-auto prose">
          <h1>Termos de Uso</h1>
          <h2>1. Termos</h2>
          <p>
            Ao acessar ao site{" "}
            <a href="https://www.rafaelvieiras.com">Rafaelvieiras</a>, concorda
            em cumprir estes termos de serviço, todas as leis e regulamentos
            aplicáveis ​​e concorda que é responsável pelo cumprimento de todas
            as leis locais aplicáveis. Se você não concordar com algum desses
            termos, está proibido de usar ou acessar este site. Os materiais
            contidos neste site são protegidos pelas leis de direitos autorais e
            marcas comerciais aplicáveis.
          </p>
          <h2>2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais informações ou software no site Rafaelvieiras, apenas para
            visualização transitória pessoal e não comercial. Esta é a concessão
            de uma licença, não uma transferência de título e, sob esta licença,
            você não pode:&nbsp;
          </p>
          <ol>
            <li>modificar ou copiar os materiais;&nbsp;</li>
            <li>
              usar os materiais para qualquer finalidade comercial ou para
              exibição pública, comercial ou não comercial;&nbsp;
            </li>
            <li>
              tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site Rafaelvieiras;&nbsp;
            </li>
            <li>
              remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou&nbsp;
            </li>
            <li>
              transferir os materiais para outra pessoa ou 'espelhe' os
              materiais em qualquer outro servidor.
            </li>
          </ol>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Rafaelvieiras a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>
          <h2>3. Isenção de responsabilidade</h2>
          <ol>
            <li>
              Os materiais no site da Rafaelvieiras são fornecidos 'como estão'.
              Rafaelvieiras não oferece garantias, expressas ou implícitas, e,
              por este meio, isenta e nega todas as outras garantias, incluindo,
              sem limitação, garantias implícitas ou condições de
              comercialização, adequação a um fim específico ou não violação de
              propriedade intelectual ou outra violação de direitos.
            </li>
            <li>
              Além disso, o Rafaelvieiras não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ​​ou à
              confiabilidade do uso dos materiais em seu site ou de outra forma
              relacionado a esses materiais ou em sites vinculados a este site.
            </li>
          </ol>
          <h2>4. Limitações</h2>
          <p>
            Em nenhum caso o Rafaelvieiras ou seus fornecedores serão
            responsáveis ​​por quaisquer danos --incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios--
            decorrentes do uso ou da incapacidade de usar os materiais em
            Rafaelvieiras, mesmo que Rafaelvieiras ou um representante
            autorizado da Rafaelvieiras tenha sido notificado oralmente ou por
            escrito da possibilidade de tais danos. Como algumas jurisdições não
            permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos consequentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>
          <h2>5. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site da Rafaelvieiras podem incluir erros
            técnicos, tipográficos ou fotográficos. Rafaelvieiras não garante
            que qualquer material em seu site seja preciso, completo ou atual.
            Rafaelvieiras pode fazer alterações nos materiais contidos em seu
            site a qualquer momento, sem aviso prévio. No entanto, Rafaelvieiras
            não se compromete a atualizar os materiais.
          </p>
          <h2>6. Links</h2>
          <p>
            O Rafaelvieiras não analisou todos os sites vinculados ao seu site e
            não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
            de qualquer link não implica endosso por Rafaelvieiras do site. O
            uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
          <h3>Modificações</h3>
          <p>
            O Rafaelvieiras pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </p>
          <h3>Lei aplicável</h3>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Rafaelvieiras e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </main>
    </>
  );
}
