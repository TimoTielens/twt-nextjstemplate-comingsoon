FROM node:20-alpine AS base
WORKDIR /app
RUN npm i -g pnpm
COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:20-alpine AS release
WORKDIR /app
RUN npm i -g pnpm

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

ENV NODE_ENV=production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
RUN npx next telemetry disable
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

CMD ["pnpm", "start"]