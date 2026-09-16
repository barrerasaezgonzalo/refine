# Refine

Refine es una herramienta para mejorar prompts de forma rápida y simple.

Permite escribir una idea inicial, definir qué se quiere mejorar, agregar contexto opcional y generar una versión más clara, precisa y útil del prompt.

También incluye un modo guiado en el que la IA puede hacer hasta 3 preguntas antes de generar el resultado final.

## Funcionalidades

- Mejora inmediata de prompts
- Modo guiado con hasta 3 preguntas
- Selección de objetivo
- Selección de nivel de detalle
- Contexto opcional
- Templates rápidas
- Regeneración usando la misma configuración
- Copiar prompt mejorado
- Enviar a chatGPT
- Crear un nuevo prompt desde cero
- Contador de caracteres
- Diseño responsive

## Flujo

1. Escribe tu prompt.
2. Elige el objetivo de la mejora.
3. Define el nivel de detalle.
4. Agrega contexto si lo necesitas.
5. Elige entre:
   - **Mejorar**
   - **Refinar prompt**
6. Revisa el prompt generado.
7. Copia, regenera o vuelve a empezar.

En el modo guiado puedes responder las preguntas que quieras antes de generar una versión más refinada.

## Tecnologías

- Next.js
- React
- TypeScript
- Tailwind CSS
- Groq
- Lucide React

## Inteligencia artificial

Refine utiliza Groq para transformar el prompt original manteniendo su intención.

La IA considera:

- objetivo seleccionado
- nivel de detalle
- contexto adicional
- respuestas del modo guiado

El resultado está diseñado para poder copiarse y utilizarse directamente.

## Desarrollo local

Instala las dependencias:

```bash
npm install
```

Crea un archivo `.env.local`:

```env
GROQ_API_KEY=tu_api_key
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre:

```text
http://localhost:3000
```

## Verificación

Antes de desplegar:

```bash
npm run build
npm run lint
npx knip
```

## Vercel URL

https://refine-steel.vercel.app/

## Capturas
