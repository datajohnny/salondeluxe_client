App.Service = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  time: DS.attr('number'),
  category: DS.attr('string')
});

App.Service.FIXTURES = [
  { id: 1, name: "Corte de Estilo", description: "Para el o ella, de acuerdo a las tendencias actuales de la moda, tomando en consideracion tu fisionomia, gustos personales y estilo de vida.", price: 15, time: 30, category: "cabello" },
  { id: 2, name: "Secado con Blower", description: "Dandole el estilo y la forma que necesita tu cabello y corte.", price: 20, time: 30, category: "cabello" },
  { id: 3, name: "Peinados o Recogidos", description: "Para ocaciones especiales, galas, bodas, graduaciones o cualquier actividad especial.", price: 35, time: 60, category: "cabello" },
  { id: 4, name: "Color Permanente", description: "Usamos tintes en crema con acondicionadores y con bajo contenido de amonia para mantener tu cabello saludable y con un color fabuloso. Incluye secado", price: 55, time: 120, category: "cabello" },
  { id: 5, name: "Permanentes", description: "Rizos definidos para dar volumen a tu cabello.", price: 65, time: 120, category: "cabello" },
  { id: 6, name: "Alisados", description: "Para lograr un cabello manejable y con el volumen adecuado. Te incluimos el tratamiento para tu restaurar tu cabello.", price: 65, time: 120, category: "cabello" },
  { id: 7, name: "Curl Remover", description: "Elimina hasta el 80% del rizo. Luce un cabello lacio por mas tiempo o con rizos sueltos sin problemas de Frizz ni de volumen en exceso.", price: 85, time: 120, category: "cabello" },
  { id: 8, name: "Tratamiento de Keratina", description: "Restaura la hebra de tu cabello, elimina el Frizz y ayuda a que el blower te dure mas tiempo sin necesidad de plancha. Existen diferentes tipos de Keratinas y nuestros especialistas te ayudaran a identificar cual es el mejor para ti.", price: 125, time: 180, category: "cabello" },
  { id: 9, name: "PM Shine", description: "Acondiciona, da brillo y deposita color en tu cabello. Atrevete a lucir un color fabuloso con brillo espectacular.", price: 35, time: 20, category: "cabello" },
  { id: 10, name: "Hidroterapia", description: "Dale vida a tu cabello, con aceites naturales, proteinas y otros ingredientes reconstructores y humectantes.", price: 15, time: 10, category: "cabello" },
  { id: 11, name: "Extensiones", description: "Una extensa variedad de extensiones 100% naturales. Se pueden aplicar cocidas, pegadas o con clips.", price: 80, time: 180, category: "cabello" },
  { id: 12, name: "Uñas Esculturales", description: "La extension de la uña se moldea completamente en resina consiguiendo una apariencia natural.", price: 40, time: 60, category: "manos-pies" },
  { id: 13, name: "Cubierta Uña Natural", description: "Si tienes las uñas largas podemos proteger con una capa de gel o resina, evitando que las uñas se partan con facilidad.", price: 25, time: 60, category: "manos-pies" },
  { id: 14, name: "Retoque de Uñas", description: "Se recomienda un retoque del material aplicado cada dos semanas. Incluye Pintura", price: 20, time: 60, category: "manos-pies" },
  { id: 15, name: "Uñas Resina Organica", description: "Utilizamos los mejores productos, realizando un trabajo profesional para mantener la salud de tu uña natural. Con garantia de 7 dias en el material aplicado.", price: 33, time: 60, category: "manos-pies" },
  { id: 16, name: "Manicura", description: "Con sales que exfoliaran la piel de tu manos y aceites naturales que las acondicionadoran, para que tus uñas crezcan saludables, fuertes y bellas.", price: 18, time: 30, category: "manos-pies" },
  { id: 17, name: "Pedicura", description: "Mientras disfrutas de un masaje de espalda en nuestras comodas butacas y un ambiente relajante, tus pies se renovaran con este tratamiento que elimina la callosidad y le devuelve la hidratacion y suavidad. Incluye Kit personal.", price: 38, time: 60, category: "manos-pies" },
  { id: 18, name: "Pintura en Gel", description: "Para que el esmalte dure en tus uñas naturales hasta 2 semanas.", price: 17, time: 30, category: "manos-pies" },
  { id: 19, name: "Facial Deluxe", description: "Disfruta en un ambiente relajado con aromaterapia y musicoterapia de un limpieza profunda del cutis: desmaquillado, tonico, exfoliacion, vapor, extraccion de espinillas, esterilizacion de los poros, mascarillas e hidratantes.", price: 45, time: 60, category: "estetica" },
  { id: 20, name: "Tratamiento Anti Acne", description: "Efectivo tratamiento para balancear la grasa de la piel. Ayuda a controlar la infeccion creada por el acne. Se recomienda un paquete de 6 a 8 tratamientos uno cada 15 dias.", price: 55, time: 60, category: "estetica" },
  { id: 21, name: "Acido Glicolico", description: "Eficaz contra las manchas, acne y lineas de expresion. Lo combinamos con hidratacion y nutricion. Se recomienda de 6 a 10 tratamientos basados en la condicion de la piel.", price: 55, time: 90, category: "estetica" },
  { id: 22, name: "Tratamiento de Colageno", description: "Ideal para personas mayores de 30 años. Ayuda a restaurar el colageno que deja de producir la piel con el paso del tiempo.", price: 65, time: 90, category: "estetica" },
  { id: 23, name: "Microdermabracion", description: "Exfoliacion de la epidermis para combatir las lineas de expresion y manchas. Combinamos el tratamiento con ampulas y ultrasonido que nutren y estimulan la producion de colageno y elastina para lograr mejor tonificacion y apariencia de la piel. Recomendamos de 6 a 8 tratamientos.", price: 80, time: 60, category: "estetica" },
  { id: 24, name: "Masaje Corporal", description: "Combinamos las diferentes formas de masaje segun la necesidad especifica  de cada cliente, aliviando asi su estres y dolores musculares. En un ambiente comodo, relajado con musica y aromaterapia.", price: 35, time: 30, category: "estetica" },
  { id: 25, name: "Maquillaje Profesional", description: "El complemento ideal de un peinado y vestido hermoso. Te ofrecemos maquillaje casual, fotografia, novia y gala. Utilizando maquillaje mineral o airbrush.", price: 35, time: 45, category: "estetica" },
  { id: 26, name: "Maquillaje Permanente", description: "Este es una microimplantacion de pigmento vegetal para corregir o mejorar la forma de tus cejas, lineas de ojos y labios. Combinamos tecnologia, buen gusto y extrictas normas de sanidad para lograr el resultado que tu esperas.", price: 125, time: 120, category: "estetica" },
  { id: 27, name: "Depilaciones", description: "La depilacion con cera ayuda a debilitar el crecimiento del vello, lo retrasa y hace que este crezca mas fino.", price: 10, time: 15, category: "estetica" }
];