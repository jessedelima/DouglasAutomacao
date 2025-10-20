# Gabinono Decorações – Sistema de Promoções e Descontos

Este projeto é um site estático para gerenciamento e divulgação de promoções da Gabinono Decorações. Ele inclui páginas para cadastro de clientes, uma roleta de descontos interativa, geração de links promocionais personalizados e uma página de promoção para exibição do desconto.

## Páginas
- index.html: Página inicial com acesso às funcionalidades do sistema e link para o Instagram.
- formulario.html: Formulário para coleta dos dados do cliente (nome, email, WhatsApp, tema, data).
- roleta.html: Roleta de descontos com rótulos fixos e texto horizontal dentro de cada segmento de cor.
- promocao.html: Página de promoção que exibe o desconto e o código promocional para o cliente.
- gerador.html: Geração de links promocionais personalizados com base nos dados do cliente.

## O que foi feito
1. Adição de ícone e link do Instagram na página inicial (index.html).
2. Correção do botão “Visitar Nossa Loja” em promocao.html para apontar para o novo link do Instagram.
3. Roleta de descontos (roleta.html):
   - Tornamos visíveis os valores de desconto dentro de cada segmento colorido.
   - Fixamos os rótulos dos descontos (0%, 5%, 10%, 15%, 20%, 25%, 30%) para girarem com a roleta e manterem o texto horizontal.
   - Removemos a duplicidade de labels antigos, mantendo apenas os rótulos sobrepostos.
4. Atualização dos anos de 2023 para 2025 nos rodapés e datas de exemplo:
   - index.html: © 2025
   - roleta.html: © 2025
   - gerador.html: © 2025
   - promocao.html: datas de exemplo atualizadas para 2025
5. Commits e push para o GitHub com mensagens claras descrevendo as alterações.

## Como executar localmente
Este é um projeto estático (HTML/CSS/JS). Você pode:

- Abrir o arquivo index.html diretamente no navegador, ou
- Servir o diretório com um servidor estático. Exemplo usando Node.js:
  - Instale (se necessário): `npm i -g serve`
  - Inicie: `serve . -l 5174`
  - Acesse: `http://localhost:5174/`

## Fluxo de uso
1. Acesse a página inicial (index.html).
2. Cadastre os dados do cliente (formulario.html), se necessário.
3. Gire a roleta (roleta.html) para obter o desconto.
4. Gere um link promocional personalizado (gerador.html) e envie por email.
5. O cliente abre a página de promoção (promocao.html) com os parâmetros do link para visualizar seu desconto e código.

## Observações
- Este projeto não armazena dados em servidor; o uso é focado em navegação e parâmetros de URL.
- O envio de emails está simulado (mailto) no ambiente local. Em produção, recomenda-se integrar serviços de email (EmailJS, SendGrid, etc.).