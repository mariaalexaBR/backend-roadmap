# TypeScript

**Estado:** estudiando
**Fecha:** 2026-10-25

## Qué problema resuelve
> ❓ ¿Qué le falta a JavaScript que TypeScript agrega? ¿Qué pasa con los tipos al compilar?

 El objetivo de TypeScript es ser un verificador de tipos estático para programas JavaScript; en otras palabras, una herramienta que se ejecuta antes de que se ejecute su código (estático) y garantiza que los tipos del programa sean correctos (verificados por tipos).  
  
Antes de compilar TypeSript ya muestra el error que podría generar el código, pero JavaScript lo muestra en tiempo de ejecución.

## Cómo funciona (con mis palabras)

### 1. Tipos básicos
> 📌 `string`, `number`, `boolean`, arrays, tuplas, `null` / `undefined`
>
> ❓ ¿Qué es la inferencia de tipos? ¿Cuándo conviene escribir el tipo explícito?  
  
Argument of type 'string' is not assignable to parameter of type 'number'.  
  
Con "const" y sin tipo muestra lo que esta escrito, con "lent" y sin tipo muestra que tipo es.

### 2. `type` vs `interface`
> ❓ ¿En qué se parecen? ¿Qué puede hacer uno que el otro no? ¿Cuál usaré y cuándo?
Verás que hay dos sintaxis para crear tipos: interfaces y tipos. Deberías preferirinterface . Úselotype cuando necesite funciones específicas.

### 3. Uniones y literales
> 📌 `type EstadoFactura = 'borrador' | 'emitida' | 'anulada'`
>
> ❓ ¿Qué es *narrowing*? ¿Cómo uso `typeof`, `in` y un campo discriminante?

### 4. `any` vs `unknown` vs `never`
> ❓ ¿Por qué `any` es peligroso? ¿Qué me obliga a hacer `unknown`? ¿Para qué sirve `never`?

### 5. Genéricos
> 📌 Ejemplo: `function primero<T>(items: T[]): T | undefined`
>
> ❓ ¿Qué problema resuelven? ¿Qué hace `<T extends ...>`?

### 6. Clases
> 📌 `public`, `private`, `protected`, `readonly` · clases abstractas vs interfaces
>
> ❓ ¿Qué hace `constructor(private readonly repo: ProductoRepository)`? *(lo usarás mucho en NestJS)*

### 7. Tipos utilitarios
> 📌 `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, `Record`
>
> ❓ ¿Por qué tiene sentido `type UpdateProductoDto = Partial<CreateProductoDto>`?

### 8. Async/await y errores
> ❓ ¿Qué es una `Promise`? ¿Qué devuelve una función `async`?
>
> ❓ ¿Qué pasa si olvido el `await`? ¿Por qué el error en un `catch` es `unknown`?

### 9. Módulos y configuración
> 📌 `import` / `export` · `tsconfig.json`
>
> ❓ ¿Qué activa `strict`? ¿Qué hacen `strictNullChecks` y `noImplicitAny`?

### 10. Decoradores
> ❓ ¿Qué son? (`@Controller`, `@Injectable` en NestJS) — por ahora solo entender la idea.

## Ejemplo de código
> ❓ Un ejemplo pequeño propio que combine `interface` + unión + genérico.

Ejercicios relacionados: `ejercicios/typescript/`

## Cuándo NO usarlo / límites
> ❓ ¿Los tipos existen en tiempo de ejecución? ¿Por qué igual hay que validar los datos que llegan a la API?
>
> ❓ ¿Cuándo el tipado excesivo complica más de lo que ayuda?

## Errores que he visto (incluida la IA)
> 📌 Ej.: usar `any` para "que compile", `as` para forzar tipos, olvidar `await`.

## Preguntas para repasar
- ¿Diferencia entre `type` e `interface`?
- ¿Por qué `unknown` es más seguro que `any`?
- ¿Qué es un tipo discriminado y para qué sirve?
- ¿Qué hace `Partial<T>` y cuándo lo usaría en una API?
- ¿Por qué TypeScript no me protege de datos inválidos que llegan por HTTP?

## Fuentes
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) — para probar sin instalar nada
