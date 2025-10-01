# 👩‍⚕️ Ágata Assistant
**Seu Assistente de Saúde Digital Simples**

---

## Visão Geral do Projeto

O **Ágata Assistant** é uma Single Page Application (SPA) desenvolvida para transformar o acesso à saúde digital, focando em pacientes que não são nativos digitais (com desafios motores, cognitivos ou tecnológicos).

**Objetivo Central:** Reduzir drasticamente o absentismo em teleconsultas, simplificando o processo de conexão para o mínimo de cliques possível (simulação de "um toque").

---

## 🎯 Funcionalidades Atuais do MVP

| Funcionalidade | Status | Detalhamento |
|----------------|--------|-------------|
| Notificação de Consulta (HOJE) | **Implementado** | Notificação fixa e em destaque com botão de **"Entrar na Consulta"**. |
| Notificação de Agendamento | **Implementado** | Listagem de consultas futuras. |
| Notificação de Consultas Perdidas | **Implementado** | Exibição de histórico para necessidade de reagendamento. |
| Tela de Acompanhamento | **Implementado** | Visão geral dos tratamentos em andamento com progresso. |
| Rotas Dinâmicas | **Implementado** | Rota ``/treatment/:id`` para detalhes de cada tratamento. |

---

## 🛠️ Stack Tecnológica

- **Vite:** Build Tool e Servidor de Desenvolvimento Rápido (HMR).  
- **React:** Biblioteca principal para construção da Single Page Application (SPA).  
- **TypeScript:** Garante **tipagem de dados** (Interfaces: `IAppointment`, `ITreatment`) e segurança de código.  
- **Tailwind CSS:** Estilização completa e responsiva, **sem uso de Bootstrap**.  
- **React Hook Form:** *Scaffold* preparado para validação de formulários.  
- **React Router DOM:** Gerenciamento de Rotas Estáticas e Dinâmicas.  

---

## ⚙️ Regras Técnicas Cumpridas

### ✅ Hooks, Props e Rotas (Uso Obrigatório)

| Requisito | Exemplo de Uso |
|-----------|----------------|
| `useState()` | Usado em `useData` e `TreatmentDetail`. |
| `useEffect()` | Usado em `useData` para simular o carregamento de dados. |
| `useNavigate()` | Usado em `NotificationCard` e `TreatmentDetail` para navegação. |
| `useParams()` | Usado em `TreatmentDetail` para obter o ID da rota dinâmica (`:id`). |
| Props | Uso obrigatório em `NotificationCard` para receber os dados (`IAppointment`). |
| Rotas | Rotas estáticas (`/`) e dinâmicas (`/treatment/:id`) implementadas. |

### 🚫 Restrições Cumpridas

- **Axios:** Não utilizado.  
- **BootStrap/Outros:** Estritamente proibido e não utilizado, apenas TailwindCSS.  

---

## 🚀 Como Executar o Projeto

Siga estes passos no terminal do VS Code:

### 1. Clonar o Repositório

```bash
git clone https://github.com/aboutgregory/nexum-tech.git
cd nexum-tech/agata-assistant-app 

### 2. Instalar Dependências
```bash
npm install

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev

Acesse http://localhost:5173 no seu navegador.
