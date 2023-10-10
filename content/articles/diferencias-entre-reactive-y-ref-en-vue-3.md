---
title: Diferencias entre Reactive y Ref en Vue 3
description: >-
    Una breve introducción sobre las diferencias entre
    dos características importantes de Vue 3: Reactive y Ref.
date: '2023-04-29'
toc: true
tiempo: 3
tags: 
- Vue 3
- Ref
- Reactive
icon: Vue
image-header:
---

Vue 3 introduce una nueva API de composición que nos permite crear componentes reactivos de una forma más flexible y modular. Para ello, nos ofrece dos funciones principales: `ref()` y `reactive()`. Ambas nos permiten crear valores reactivos que se actualizan automáticamente cuando cambian, pero tienen algunas diferencias importantes que debemos conocer.

## 1. La función ref()

La función `ref()` se usa para crear variables reactivas que contienen valores primitivos, como strings, números, booleanos, etc. Por ejemplo:

```js
import { ref } from "vue";

const name = ref("Dani");
const age = ref(25);
```

Estas variables reactivas se pueden usar en el template de un componente sin necesidad de acceder a su propiedad `value`, que es donde se almacena el valor real. Por ejemplo:

```html
<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Edad: {{ age }}</p>
  </div>
</template>
```

Sin embargo, si queremos usar estas variables reactivas en el código JavaScript del componente, sí que debemos acceder a su propiedad `value`. Por ejemplo:

```vue
<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("Dani");
    const age = ref(25);

    function incrementAge() {
      age.value++;
    }

    return {
      name,
      age,
      incrementAge,
    };
  },
};
</script>
```

La ventaja de usar `ref()` es que podemos reasignar el valor de la variable reactiva sin perder la reactividad. Por ejemplo:

```js
name.value = "Daniel";
```

## 2. La función reactive()

La función `reactive()` se emplea para crear objetos reactivos cuyas propiedades pueden ser accedidas y modificadas de manera reactiva. Por ejemplo:

```js
import { reactive } from "vue";

const person = reactive({
  name: "Pedro",
  age: 30,
});
```

Estos objetos reactivos se pueden usar en el template de un componente sin necesidad de acceder a sus propiedades con un punto, como si fueran un objeto normal. Por ejemplo:

```html
<template>
  <div>
    <p>Nombre: {{ person.name }}</p>
    <p>Edad: {{ person.age }}</p>
  </div>
</template>
```

También podemos usar estos objetos reactivos en el código JavaScript del componente sin necesidad de acceder a sus propiedades con un punto. Por ejemplo:

```vue
<script>
import { reactive } from "vue";

export default {
  setup() {
    const person = reactive({
      name: "Pedro",
      age: 30,
    });

    function incrementAge() {
      person.age++;
    }

    return {
      person,
      incrementAge,
    };
  },
};
</script>
```

La desventaja de usar `reactive()` es que no podemos reasignar el valor del objeto reactivo sin perder la reactividad. Por ejemplo:

```js
person = { name: "Dani", age: 25 }; // ❌ Esto rompe la reactividad
```

## 3. ¿Cuándo usar ref() o reactive()?

En general, podemos seguir estas recomendaciones:

- Usa `ref()` cuando quieras crear valores reactivos que sean primitivos o que necesites reasignar en algún momento.
- Usa `reactive()` cuando quieras crear valores reactivos que sean objetos y que no necesites reasignar nunca.

Espero que este post te haya sido útil para entender las diferencias entre `ref()` y `reactive()` en vue 3.