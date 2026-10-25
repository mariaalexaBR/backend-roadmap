# Plan de estudio — Backend con TypeScript + NestJS

12 semanas, pensadas para unas **8–10 horas por semana**. Si una semana se alarga, no pasa nada: lo importante es terminar cada bloque entendiendo, no rápido.

Cada semana tiene:
- **Estudiar:** teoría → nota en la carpeta del tema (usando [plantillas/nota.md](plantillas/nota.md)).
- **Ejercicios:** código pequeño en [ejercicios/](ejercicios/).
- **Proyecto:** avance en la API de ventas ([proyecto/](proyecto/)).
- **Listo cuando:** criterio para pasar a la siguiente semana.

> Con la IA: primero lo intento yo, después le pido que revise o critique. Nunca al revés.

---

## Bloque 1 · Fundamentos

### Semana 1 — TypeScript a fondo
**Estudiar**
- Tipos primitivos, `type` vs `interface`, uniones, genéricos, `unknown` vs `any`
- Clases, modificadores de acceso, clases abstractas
- `async/await`, Promesas, manejo de errores con `try/catch`
- Módulos (`import/export`) y `tsconfig.json` con `strict: true`

**Ejercicios** — `ejercicios/typescript/`
- [ ] Modelar `Producto`, `Cliente` y `Factura` con interfaces y tipos
- [ ] Función genérica `agruparPor<T>(items, clave)`
- [ ] Simular una llamada asíncrona que falle y manejar el error

**Listo cuando:** puedo explicar la diferencia entre `type` e `interface` y escribir genéricos sin ayuda.

### Semana 2 — HTTP, Node.js y Git
**Estudiar**
- HTTP: métodos, códigos de estado, headers, CORS, idempotencia
- Node.js: event loop, por qué no bloquear el hilo principal
- Git: ramas, merge vs rebase, resolver conflictos

**Ejercicios** — `ejercicios/http/`
- [ ] Servidor HTTP con el módulo `http` de Node (sin frameworks) que responda JSON
- [ ] Probarlo con curl / Postman / Thunder Client y documentar los códigos de estado usados
- [ ] Practicar una rama + conflicto + merge en este mismo repo

**Proyecto**
- [ ] Escribir el diseño inicial en `proyecto/README.md`: entidades, casos de uso y endpoints (sin IA)

**Listo cuando:** sé qué código de estado devolver en cada caso (200, 201, 204, 400, 401, 403, 404, 409, 422, 500).

---

## Bloque 2 · Diseño de código

### Semana 3 — SOLID y Clean Code
**Estudiar**
- Los 5 principios SOLID, con énfasis en SRP y DIP
- DRY, KISS, YAGNI; composición sobre herencia
- Nombres, funciones pequeñas, efectos secundarios

**Ejercicios** — `ejercicios/solid/`
- [ ] Tomar una clase "Dios" (`FacturaService` que calcula, guarda y envía correo) y separarla aplicando SRP
- [ ] Aplicar DIP: el servicio depende de una interfaz `NotificadorFactura`, no de una clase de correo concreta
- [ ] Un ejemplo de cada principio violado → corregido

**Listo cuando:** puedo detectar violaciones de SOLID en código que me genera la IA.

### Semana 4 — Patrones de diseño clave
**Estudiar**
- Strategy, Factory, Decorator, Adapter, Observer
- Repository y DTO

**Ejercicios** — `ejercicios/patrones/`
- [ ] **Strategy:** cálculo de descuentos (ninguno, porcentaje, monto fijo, cliente frecuente)
- [ ] **Factory:** crear el método de pago según un tipo (`efectivo`, `tarjeta`, `transferencia`)
- [ ] **Decorator:** agregar logging/caché a un servicio sin modificarlo
- [ ] **Adapter:** envolver una "API externa" de tipo de cambio con una interfaz propia
- [ ] **Repository:** interfaz `ProductoRepository` con implementación en memoria

**Listo cuando:** para cada patrón puedo decir qué problema resuelve y cuándo NO usarlo.

---

## Bloque 3 · NestJS y arquitectura

### Semana 5 — NestJS básico
**Estudiar**
- Módulos, controladores, providers, inyección de dependencias
- Pipes (validación con `class-validator`), filtros de excepciones
- Arquitectura en capas: controller → service → repository

**Proyecto**
- [ ] Crear el proyecto NestJS dentro de `proyecto/`
- [ ] Módulo `productos`: CRUD completo con repositorio en memoria
- [ ] DTOs con validación (`CreateProductoDto`, `UpdateProductoDto`)
- [ ] Manejo de errores consistente (404 si no existe, 400 si datos inválidos)
- [ ] Swagger habilitado en `/docs`

**Listo cuando:** puedo explicar cómo NestJS resuelve las dependencias y por qué el controller no tiene lógica de negocio.

### Semana 6 — Clean Architecture y DDD básico
**Estudiar**
- Clean / Hexagonal: puertos y adaptadores, el dominio no depende de la infraestructura
- DDD básico: entidades, value objects, agregados
- Interceptores y guards de NestJS (Decorator y Chain of Responsibility en la práctica)

**Proyecto**
- [ ] Módulos `clientes` y `facturas`
- [ ] `Factura` como agregado con `LineaFactura`; el total se calcula en el dominio, no en el controller
- [ ] Value object `Dinero` (monto + moneda, sin floats sueltos)
- [ ] Interceptor de logging de peticiones

**Listo cuando:** la lógica de negocio de facturas se puede probar sin levantar NestJS ni la base de datos.

---

## Bloque 4 · Datos

### Semana 7 — SQL y PostgreSQL
**Estudiar**
- SQL: JOINs, agregaciones, subconsultas
- Normalización, claves foráneas, restricciones
- Índices y `EXPLAIN ANALYZE`

**Ejercicios** — `ejercicios/sql/`
- [ ] Levantar PostgreSQL con Docker
- [ ] Diseñar el esquema de ventas a mano (tablas, relaciones, restricciones)
- [ ] 10 consultas: ventas por cliente, producto más vendido, facturas del mes, etc.
- [ ] Medir una consulta con y sin índice

**Listo cuando:** puedo escribir las consultas de reportes sin ayuda y leer un plan de ejecución básico.

### Semana 8 — Prisma, transacciones y N+1
**Estudiar**
- Prisma: schema, migraciones, cliente
- Transacciones y ACID, niveles de aislamiento
- El problema N+1 y cómo evitarlo

**Proyecto**
- [ ] Reemplazar los repositorios en memoria por implementaciones con Prisma (sin tocar los servicios: ¡aquí se ve el valor de DIP!)
- [ ] Migraciones versionadas en el repo
- [ ] Crear factura + descontar inventario dentro de **una transacción**
- [ ] Paginación y filtros en el listado de productos
- [ ] Detectar y corregir un caso de N+1

**Listo cuando:** cambiar de memoria a base de datos no requirió modificar la lógica de negocio.

---

## Bloque 5 · Seguridad

### Semana 9 — Autenticación
**Estudiar**
- Autenticación vs autorización
- Hash de contraseñas con bcrypt/argon2
- JWT: estructura, expiración, refresh tokens
- Manejo de secretos con variables de entorno (`.env` fuera del repo)

**Proyecto**
- [ ] Módulo `usuarios` y `auth`: registro y login
- [ ] Emitir JWT y protegerlo con un guard
- [ ] Configuración con `@nestjs/config` y `.env.example`

**Listo cuando:** puedo explicar qué contiene un JWT y por qué no se guardan contraseñas en texto plano.

### Semana 10 — Autorización y OWASP
**Estudiar**
- Roles y permisos
- OWASP Top 10: inyección, control de acceso roto, exposición de datos
- Rate limiting, CORS, Helmet

**Proyecto**
- [ ] Roles `admin` y `vendedor` con un guard + decorador `@Roles()`
- [ ] Un vendedor solo ve sus propias facturas
- [ ] Rate limiting en login
- [ ] Revisar el proyecto contra el OWASP Top 10 y anotar hallazgos

**Listo cuando:** puedo demostrar que un vendedor no puede acceder a recursos de admin.

---

## Bloque 6 · Calidad y entrega

### Semana 11 — Testing
**Estudiar**
- Pirámide de testing
- Mocks, stubs y fakes
- Pruebas de integración contra una base real

**Proyecto**
- [ ] Pruebas unitarias del dominio (`Factura`, `Dinero`, estrategias de descuento)
- [ ] Pruebas unitarias de servicios con repositorios falsos
- [ ] Pruebas de integración de endpoints con Supertest + PostgreSQL en Testcontainers
- [ ] Probar los casos de error y de permisos, no solo el "camino feliz"

**Listo cuando:** puedo refactorizar con confianza porque las pruebas me avisan si rompo algo.

### Semana 12 — Docker, CI y cierre
**Estudiar**
- Dockerfile multi-stage, docker compose
- GitHub Actions
- Logs estructurados y health checks

**Proyecto**
- [ ] `Dockerfile` + `docker-compose.yml` (API + PostgreSQL)
- [ ] GitHub Actions: lint + tests en cada push
- [ ] Endpoint `/health`
- [ ] README del proyecto con cómo correrlo, arquitectura y decisiones

**Listo cuando:** alguien puede clonar el repo, ejecutar `docker compose up` y usar la API.

---

## Después de las 12 semanas
- Caché con Redis y colas (BullMQ) para tareas en segundo plano (ej. enviar factura por correo)
- CQRS y eventos de dominio
- Observabilidad: métricas y trazas
- Desplegar la API en la nube
- Frontend con React → camino a full stack
