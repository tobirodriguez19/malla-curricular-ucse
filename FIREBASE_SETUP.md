# Instrucciones para configurar Firebase

## Pasos para configurar tu propia instancia de Firebase:

### 1. Crear proyecto en Firebase Console
1. Ve a https://console.firebase.google.com/
2. Haz clic en "Crear un proyecto"
3. Nombra tu proyecto: "malla-ucse-[tu-nombre]"
4. Desactiva Google Analytics (no es necesario)
5. Haz clic en "Crear proyecto"

### 2. Configurar Realtime Database
1. En el menú lateral, ve a "Realtime Database"
2. Haz clic en "Crear base de datos"
3. Selecciona una ubicación (recomendado: us-central1)
4. Empezar en "modo de prueba" (puedes cambiar después)

### 3. Configurar Authentication
1. En el menú lateral, ve a "Authentication"
2. Ve a la pestaña "Sign-in method"
3. Habilita "Anónimo" (Anonymous)

### 4. Obtener configuración
1. Ve a "Configuración del proyecto" (ícono de engranaje)
2. Scroll hacia abajo hasta "Tus apps"
3. Haz clic en el ícono web (</>)
4. Registra tu app con nombre "Malla UCSE Web"
5. **NO** selecciones Firebase Hosting
6. Copia la configuración que aparece

### 5. Reemplazar configuración en el código
En el archivo `index.html`, reemplaza esta sección:
```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROJECT.firebaseapp.com", 
    databaseURL: "https://TU_PROJECT-default-rtdb.firebaseio.com",
    projectId: "TU_PROJECT",
    storageBucket: "TU_PROJECT.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};
```

### 6. Configurar reglas de seguridad (Opcional)
En Realtime Database > Reglas, puedes usar:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Notas importantes:
- La configuración actual usa valores demo que NO funcionarán
- Debes crear tu propio proyecto Firebase
- El modo anónimo permite usar la app sin registro
- Los datos se sincronizan automáticamente entre dispositivos
- Funciona offline y sincroniza cuando hay conexión
