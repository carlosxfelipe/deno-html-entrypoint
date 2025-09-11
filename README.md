# Deno 2.5 - Teste de HTML Entrypoint no Bundle

Este projeto é um teste da nova funcionalidade do **Deno 2.5** que permite usar
arquivos **HTML como ponto de entrada no `deno bundle`**. A ideia é simples:
escrever um `index.html` com `<script type="module">`, gerar o bundle com
`deno bundle --outdir dist index.html` e depois servir os arquivos resultantes
com `deno task serve`. Assim é possível experimentar como o Deno empacota os
módulos TypeScript/JavaScript (e até CSS importado) e atualiza automaticamente o
HTML para usar os arquivos já processados, prontos para produção.

## Comandos principais

```bash
deno bundle --outdir dist index.html

deno task serve
```
