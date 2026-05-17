FROM node:22-alpine AS builder
WORKDIR /workspace
COPY . .
RUN corepack enable && corepack prepare pnpm@11.1.2 --activate
RUN pnpm install --frozen-lockfile --ignore-scripts
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter liamnet-app build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nextjs
COPY --from=builder --chown=nextjs:nodejs /workspace/liamnet-app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /workspace/liamnet-app/.next/static ./liamnet-app/.next/static
COPY --from=builder --chown=nextjs:nodejs /workspace/liamnet-app/public ./liamnet-app/public
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "liamnet-app/server.js"]
