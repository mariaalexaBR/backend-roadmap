# Backend Roadmap

Mi ruta de estudio para retomar el desarrollo backend: teoría, ejercicios y un proyecto real.

> Regla de oro: la IA escribe código rápido, yo tengo que saber juzgar si está bien.

## Cómo uso este repo
1. Estudio un tema y escribo la nota **con mis palabras** (usando [`plantillas/nota.md`](plantillas/nota.md)).
2. Hago un ejercicio pequeño en [`ejercicios/`](ejercicios/).
3. Lo aplico en el [`proyecto/`](proyecto/).
4. Registro lo aprendido en [`diario.md`](diario.md) y hago commit.

## Índice
| # | Tema | Carpeta |
|---|------|---------|
| 01 | Fundamentos | [01-fundamentos](01-fundamentos/) |
| 02 | Diseño de código (SOLID, Clean Code) | [02-diseno](02-diseno/) |
| 03 | Patrones de diseño | [03-patrones](03-patrones/) |
| 04 | Arquitectura | [04-arquitectura](04-arquitectura/) |
| 05 | Bases de datos | [05-bases-de-datos](05-bases-de-datos/) |
| 06 | APIs | [06-apis](06-apis/) |
| 07 | Seguridad | [07-seguridad](07-seguridad/) |
| 08 | Testing | [08-testing](08-testing/) |
| 09 | Operación y sistemas | [09-operacion](09-operacion/) |
| 10 | Trabajo con IA | [10-trabajo-con-ia](10-trabajo-con-ia/) |

**Stack:** TypeScript + Node.js + NestJS + PostgreSQL + Prisma

**Plan:** [plan.md](plan.md) — 12 semanas con ejercicios y avances del proyecto.

Otros: [recursos.md](recursos.md) · [diario.md](diario.md) · [plantillas](plantillas/)

## Progreso

### 01 · Fundamentos
- [ ] TypeScript: tipos, interfaces, genéricos, clases, `strict`
- [ ] Async/await, Promesas y manejo de errores
- [ ] Node.js: event loop y módulos
- [ ] Estructuras de datos y Big O
- [ ] HTTP: métodos, códigos de estado, headers, CORS, caché
- [ ] Git: ramas, merge vs rebase, conflictos

### 02 · Diseño de código
- [ ] SRP — Responsabilidad única
- [ ] OCP — Abierto/cerrado
- [ ] LSP — Sustitución de Liskov
- [ ] ISP — Segregación de interfaces
- [ ] DIP — Inversión de dependencias + inyección de dependencias
- [ ] DRY, KISS, YAGNI
- [ ] Composición sobre herencia
- [ ] Clean Code

### 03 · Patrones de diseño
- [ ] Factory
- [ ] Builder
- [ ] Singleton (y por qué suele ser antipatrón)
- [ ] Adapter
- [ ] Decorator
- [ ] Facade
- [ ] Proxy
- [ ] Strategy
- [ ] Observer
- [ ] Command
- [ ] Chain of Responsibility
- [ ] Repository
- [ ] Unit of Work
- [ ] DTO / Mapper
- [ ] Specification

### 04 · Arquitectura
- [ ] NestJS: módulos, controladores, providers e inyección de dependencias
- [ ] NestJS: pipes, filtros de excepciones, guards e interceptores
- [ ] Arquitectura en capas
- [ ] Clean Architecture / Hexagonal
- [ ] DDD básico (entidades, value objects, agregados, bounded contexts)
- [ ] Monolito modular vs microservicios
- [ ] CQRS
- [ ] Event-Driven

### 05 · Bases de datos
- [ ] SQL: JOINs, subconsultas, agregaciones
- [ ] Índices y EXPLAIN
- [ ] Normalización
- [ ] Transacciones, ACID y niveles de aislamiento
- [ ] Prisma: schema, cliente y migraciones
- [ ] Problema N+1 con ORMs
- [ ] Migraciones
- [ ] NoSQL y Redis

### 06 · APIs
- [ ] Diseño REST (recursos, versionado, paginación, errores)
- [ ] OpenAPI / Swagger
- [ ] Idempotencia y reintentos
- [ ] GraphQL y gRPC (conceptos)

### 07 · Seguridad
- [ ] OWASP Top 10
- [ ] Autenticación vs autorización
- [ ] JWT, OAuth2 / OIDC
- [ ] Hash de contraseñas y manejo de secretos
- [ ] Validación de entradas

### 08 · Testing
- [ ] Pirámide de testing
- [ ] Pruebas unitarias
- [ ] Pruebas de integración
- [ ] Mocks, stubs y fakes
- [ ] TDD

### 09 · Operación y sistemas
- [ ] Docker
- [ ] CI/CD
- [ ] Logs, métricas y trazas
- [ ] Caché
- [ ] Colas de mensajes y trabajos en segundo plano
- [ ] Timeouts, reintentos, circuit breaker
- [ ] Consistencia eventual y CAP
- [ ] Escalabilidad horizontal / stateless

### 10 · Trabajo con IA
- [ ] Revisar código generado críticamente
- [ ] Dar contexto y descomponer problemas
- [ ] Debugging sistemático
- [ ] Escribir pruebas que validen el código generado

### Proyecto: API de ventas
Ver [proyecto/README.md](proyecto/README.md).
