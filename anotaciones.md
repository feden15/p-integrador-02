## Pasos para cerrar un server y volver a abrirlo

# 1. Identificar el PID

```sh
netstat -ano | findstr :8080 
```

# 2. Sustituir PID en el siguiente comando por el número que obtuvimos antes, y listo

```sh
taskkill //PID <PID> //F
```