# MEDBI Football — versão inicial

Aplicação web em HTML, CSS e JavaScript, preparada para empacotamento Android com Capacitor.

## O que já está incluído
- Interface responsiva em tema escuro.
- Navegação: Início, Ao vivo, Jogos, Ligas e Perfil.
- Filtros de jogos e seleção de data.
- Atualização automática a cada 30 segundos.
- Estado de ligação à Internet.
- Estrutura de API sem resultados inventados.
- Configuração inicial do Capacitor.

## Importante sobre resultados reais
A interface ainda não recebe dados reais até existir um backend HTTP que forneça os endpoints:
- `GET /fixtures?live=all`
- `GET /fixtures?date=YYYY-MM-DD`
- `GET /leagues`

A resposta deve ser compatível com a estrutura `response` da API-Football. Não coloques a chave API em `js/config.js`, no HTML ou no APK.

Depois de publicar o backend, altera `API_BASE_URL` em `js/config.js`, por exemplo:
`API_BASE_URL: "https://teu-backend.vercel.app/api"`

## Testar no navegador
Abre `index.html` num servidor local (por exemplo, extensão Live Server no VS Code). Sem backend, a aplicação mostrará claramente que os dados ainda não estão configurados.

## Converter para APK (Windows)
Instala Node.js LTS e Android Studio. Na pasta do projeto, abre o terminal e executa:

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

No Android Studio:
1. Aguarda o Gradle terminar a sincronização.
2. Liga um telemóvel ou inicia um emulador.
3. Usa Build > Build Bundle(s) / APK(s) > Build APK(s).
4. O APK de teste será gerado em `android/app/build/outputs/apk/debug/`.

Para distribuir uma versão final, cria uma assinatura própria em Build > Generate Signed Bundle / APK > APK. Guarda a chave de assinatura em local seguro.

## Permissão de Internet
O Capacitor/Android deve permitir acesso à Internet. Se necessário, confirma no `android/app/src/main/AndroidManifest.xml` que existe:
`<uses-permission android:name="android.permission.INTERNET" />`

## Limitações desta primeira entrega
- Ainda não há backend/API ligado.
- Os ecrãs de detalhe, classificação, equipas, jogadores, notícias e favoritos persistentes serão desenvolvidos nas próximas etapas.
- O plano gratuito da API e do alojamento pode ter limites de pedidos, tráfego e disponibilidade.
