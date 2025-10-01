<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ágata Assistant - Documentação do Projeto</title>
    <!-- Carrega o Tailwind CSS via CDN para estilização rápida e responsiva -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Define a fonte Inter para consistência com o projeto React */
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Estiliza o código inline para melhor legibilidade */
        code {
            background-color: #e5e7eb;
            padding: 2px 4px;
            border-radius: 4px;
            font-weight: 600;
        }
        /* Estiliza o bloco de código */
        pre {
            background-color: #1f2937;
            color: #f3f4f6;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased">

    <div class="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12">
        
        <!-- HEADER E TÍTULO PRINCIPAL -->
        <header class="text-center mb-10 border-b pb-4">
            <h1 class="text-4xl sm:text-5xl font-extrabold text-indigo-700 flex items-center justify-center">
                <span class="mr-3">👩‍⚕️</span> Ágata Assistant
            </h1>
            <p class="text-xl mt-2 text-gray-600">Seu Assistente de Saúde Digital Simples</p>
        </header>

        <!-- VISÃO GERAL DO PROJETO -->
        <section class="mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Visão Geral do Projeto</h2>
            <p class="text-lg leading-relaxed">
                O <strong>Ágata Assistant</strong> é uma Single Page Application (SPA) desenvolvida para transformar o acesso à saúde digital, focando em pacientes que não são nativos digitais (com desafios motores, cognitivos ou tecnológicos).
            </p>
            <p class="text-xl font-semibold mt-3 text-indigo-600">
                Objetivo Central: Reduzir drasticamente o absentismo em teleconsultas, simplificando o processo de conexão para o mínimo de cliques possível (simulação de "um toque").
            </p>
        </section>

        <!-- FUNCIONALIDADES DO MVP -->
        <section class="mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">🎯 Funcionalidades Atuais do MVP</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-indigo-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Funcionalidade</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Detalhamento</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Notificação de Consulta (HOJE)</td>
                            <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">Implementado</td>
                            <td class="px-6 py-4">Notificação fixa e em destaque com botão de <strong>"Entrar na Consulta"</strong>.</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Notificação de Agendamento</td>
                            <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">Implementado</td>
                            <td class="px-6 py-4">Listagem de consultas futuras.</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Notificação de Consultas Perdidas</td>
                            <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">Implementado</td>
                            <td class="px-6 py-4">Exibição de histórico para necessidade de reagendamento.</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Tela de Acompanhamento</td>
                            <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">Implementado</td>
                            <td class="px-6 py-4">Visão geral dos tratamentos em andamento com progresso.</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Rotas Dinâmicas</td>
                            <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">Implementado</td>
                            <td class="px-6 py-4">Rota <code>/treatment/:id</code> para detalhes de cada tratamento.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- STACK TECNOLÓGICA -->
        <section class="mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">🛠️ Stack Tecnológica</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-3 bg-gray-50 rounded-lg"><strong>Vite:</strong> Build Tool e Servidor de Desenvolvimento Rápido (HMR).</div>
                <div class="p-3 bg-gray-50 rounded-lg"><strong>React:</strong> Biblioteca principal para construção da Single Page Application (SPA).</div>
                <div class="p-3 bg-gray-50 rounded-lg"><strong>TypeScript:</strong> Garante **tipagem de dados** (Interfaces: <code>IAppointment</code>, <code>ITreatment</code>) e segurança de código.</div>
                <div class="p-3 bg-gray-50 rounded-lg"><strong>Tailwind CSS:</strong> Estilização completa e responsiva, **sem uso de Bootstrap**.</div>
                <div class="p-3 bg-gray-50 rounded-lg"><strong>React Hook Form:</strong> *Scaffold* preparado para validação de formulários.</div>
                <div class="p-3 bg-gray-50 rounded-lg"><strong>React Router DOM:</strong> Gerenciamento de Rotas Estáticas e Dinâmicas.</div>
            </div>
        </section>

        <!-- REGRAS TÉCNICAS CUMPRIDAS -->
        <section class="mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">⚙️ Regras Técnicas Cumpridas</h2>

            <h3 class="text-xl font-semibold text-green-600 mt-4">✅ Hooks, Props e Rotas (Uso Obrigatório)</h3>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requisito</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exemplo de Uso</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr><td class="px-6 py-3 font-medium"><code>useState()</code></td><td class="px-6 py-3">Usado em <code>useData</code> e <code>TreatmentDetail</code>.</td></tr>
                        <tr><td class="px-6 py-3 font-medium"><code>useEffect()</code></td><td class="px-6 py-3">Usado em <code>useData</code> para simular o carregamento de dados.</td></tr>
                        <tr><td class="px-6 py-3 font-medium"><code>useNavigate()</code></td><td class="px-6 py-3">Usado em <code>NotificationCard</code> e <code>TreatmentDetail</code> para navegação.</td></tr>
                        <tr><td class="px-6 py-3 font-medium"><code>useParams()</code></td><td class="px-6 py-3">Usado em <code>TreatmentDetail</code> para obter o ID da rota dinâmica (<code>:id</code>).</td></tr>
                        <tr><td class="px-6 py-3 font-medium"><code>Props</code></td><td class="px-6 py-3">Uso obrigatório em <code>NotificationCard</code> para receber os dados (<code>IAppointment</code>).</td></tr>
                        <tr><td class="px-6 py-3 font-medium">Rotas</td><td class="px-6 py-3">Rotas estáticas (<code>/</code>) e dinâmicas (<code>/treatment/:id</code>) implementadas.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-red-600 mt-6">🚫 Restrições Cumpridas</h3>
            <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
                <li class="font-medium"><strong>Axios:</strong> Não utilizado.</li>
                <li class="font-medium"><strong>BootStrap/Outros:</strong> Estritamente proibido e não utilizado, apenas TailwindCSS.</li>
            </ul>
        </section>

        <!-- COMO EXECUTAR O PROJETO -->
        <section class="p-6 bg-indigo-50 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2">🚀 Como Executar o Projeto</h2>
            <p class="mb-4">Siga estes passos no terminal do VS Code:</p>
            
            <h3 class="text-lg font-semibold mt-4">1. Clonar o Repositório:</h3>
            <pre><code>git clone [https://github.com/aboutgregory/nexum-tech.git](https://github.com/aboutgregory/nexum-tech.git)
cd nexum-tech/agata-assistant-app # Ajuste para a pasta correta</code></pre>

            <h3 class="text-lg font-semibold mt-4">2. Instalar Dependências:</h3>
            <pre><code>npm install</code></pre>

            <h3 class="text-lg font-semibold mt-4">3. Iniciar o Servidor de Desenvolvimento:</h3>
            <pre><code>npm run dev</code></pre>
            
            <p class="text-center mt-6 text-indigo-800 font-bold">Acesse <code>http://localhost:5173</code> no seu navegador.</p>
        </section>

        <footer class="text-center mt-10 text-sm text-gray-500 border-t pt-4">
            Documentação gerada para o Projeto Ágata Assistant | Desenvolvido com React, TypeScript e TailwindCSS.
        </footer>
    </div>
</body>
</html>
