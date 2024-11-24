export default function Home() {
  return (
    <main className="bg-stone-50 min-h-screen flex flex-col items-center py-10">
      <h2 className="text-teal-400 text-center text-3xl font-bold pt-4 mb-8">
        WorkEasy - Página Inicial
      </h2>

      <div className="max-w-4xl mx-6 sm:mx-auto text-center space-y-6">
        <p className="text-lg text-gray-700">
          Bem-vindo ao <strong>WorkEasy</strong>, o ERP projetado para
          transformar a gestão de equipes e otimizar o controle de solicitações
          em sua empresa.
        </p>

        <p className="text-lg text-gray-700">
          Com nossa plataforma, os usuários solicitantes podem criar tarefas de
          forma simples e rápida. Essas solicitações são então repassadas aos
          profissionais capacitados dentro de sua organização, garantindo que o
          serviço seja executado com excelência, organização e total controle.
        </p>

        <div className="bg-teal-400 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Funcionalidades principais:
          </h3>
          <ul className="space-y-3 text-left">
            <li className="flex flex-wrap md:flex-nowrap items-center md:items-start justify-center md:justify-normal md:text-justify text-center">
              <div className="max-w-72 w-full">
                <span className="mr-2">📍</span>
                <strong>Mapeamento de Localização</strong>
              </div>
              <p className="text-justify">
                Acompanhe a localização dos clientes e dos seus funcionários
                durante o horário de trabalho.
              </p>
            </li>
            <li className="flex flex-wrap md:flex-nowrap items-center md:items-start justify-center md:justify-normal md:text-justify text-center">
              <div className="max-w-72 w-full">
                <span className="mr-2">🛠️</span>
                <strong>Gestão de Tarefas</strong>
              </div>
              <p>
                Organize, atribua e monitore a execução de tarefas com
                eficiência.
              </p>
            </li>
            <li className="flex flex-wrap md:flex-nowrap items-center md:items-start justify-center md:justify-normal md:text-justify text-center">
              <div className="max-w-72 w-full">
                <span className="mr-2">📊</span>
                <strong>Relatórios e Análises</strong>
              </div>
              <p>
                Acesse relatórios detalhados e faça análises para otimizar ainda
                mais os processos internos.
              </p>
            </li>
            <li className="flex flex-wrap md:flex-nowrap items-center md:items-start justify-center md:justify-normal md:text-justify text-center">
              <div className="max-w-72 w-full">
                <span className="mr-2">🔐</span>
                <strong>Segurança e Controle</strong>
              </div>

              <p>
                Controle total sobre quem acessa o que, garantindo a segurança
                dos dados da sua empresa.
              </p>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-700">
          O <strong>WorkEasy</strong> traz uma solução completa para melhorar a
          produtividade e a organização das equipes de sua empresa, permitindo
          um fluxo de trabalho mais eficiente e transparente.
        </p>

        <div className="mt-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=%2B5522997979633&text&type=phone_number&app_absent=0"
            className="bg-teal-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </main>
  );
}
