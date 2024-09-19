function validateEnvVariables() {
  const requiredEnvVars = [
    'VITE_BEONIC_URL',
    'VITE_BEONIC_USERNAME',
    'VITE_BEONIC_PASSWORD',
  ];

  requiredEnvVars.forEach((varName) => {
    if (!import.meta.env[varName]) {
      throw new Error(`Missing environment variable: ${varName}`);
    }
  });
}

// Llama a la función para validar las variables de entorno
validateEnvVariables();

// Exporta las variables de entorno
export const beonicUrl = import.meta.env.VITE_BEONIC_URL;

export const beonicUsername = import.meta.env.VITE_BEONIC_USERNAME;

export const beonicPassword = import.meta.env.VITE_BEONIC_PASSWORD;
