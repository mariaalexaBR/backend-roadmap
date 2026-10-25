# Proyecto: API de ventas

API real, pequeña pero completa, donde aplico lo aprendido.

## Stack
| Capa | Tecnología |
|------|------------|
| Lenguaje | TypeScript (`strict: true`) |
| Runtime | Node.js LTS |
| Framework | NestJS |
| Base de datos | PostgreSQL |
| ORM y migraciones | Prisma |
| Validación | class-validator + class-transformer |
| Autenticación | JWT + Passport + guards por roles |
| Pruebas | Jest + Supertest + Testcontainers |
| Documentación | Swagger (`@nestjs/swagger`) |
| Infraestructura | Docker + docker compose + GitHub Actions |

Plan de avance semana por semana: [../plan.md](../plan.md).

## Dominio
- Productos
- Clientes
- Facturas (con líneas de detalle)
- Usuarios con roles (admin, vendedor)

## Hitos
- [ ] 1. Diseño: entidades, casos de uso y endpoints (escrito por mí antes de usar IA)
- [ ] 2. Arquitectura en capas / hexagonal
- [ ] 3. Repository + inyección de dependencias
- [ ] 4. Base de datos relacional con migraciones
- [ ] 5. Validaciones y manejo de errores consistente
- [ ] 6. Autenticación con JWT y autorización por roles
- [ ] 7. Pruebas unitarias y de integración
- [ ] 8. Documentación con OpenAPI
- [ ] 9. Docker (app + base de datos)
- [ ] 10. CI: tests automáticos en cada push

## Decisiones de diseño
Registra aquí cada decisión importante: qué se eligió, qué alternativas había y por qué.
