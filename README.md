# Ejemplo de comunicación entre componentes en React Native.

## Comunicación padre->hijo:

El componente padre le pasa al hijo la variable **color** mediante una prop.

## Comunicación hijo->padre:

El padre le pasa al hijo la función **devuelveNif** a través de una prop. Esta función se implementará en el componente padre.
El componente hijo le pasa al padre el valor de **dni** y de **letra** (variables pertenecientes a la función **devuelveNif**).
