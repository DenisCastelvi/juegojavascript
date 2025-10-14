let partida = {
  vida: 100,
  energia: 100,
  antorchamágica: false,
  llavemisteriosa: false,
  armadura: false,
  escenaActual: 1
};

// Función para guardar la partida con CÓDIGO
function guardarPartida() {
  const datosPartida = JSON.stringify(partida);
  const codigoGuardado = btoa(datosPartida); // Codifica en base64
  
  alert("¡PARTIDA GUARDADA!\n\nEn la siguiente ventana aparecerá tu código.\n¡CÓPIALO y guárdalo en un lugar seguro!");
  
  // Mostrar el código en un prompt para que sea fácil de copiar
  prompt("COPIA ESTE CÓDIGO (Ctrl+C):", codigoGuardado);
  
  alert("Código generado. Úsalo en 'Cargar partida' para continuar tu aventura.");
}

// Función para cargar la partida con CÓDIGO
function cargarPartida() {
  const codigoIngresado = prompt("PEGA TU CÓDIGO DE GUARDADO AQUÍ:\n(Ctrl+V)");
  
  if (!codigoIngresado || codigoIngresado.trim() === "") {
    alert("No ingresaste ningún código.");
    return false;
  }
  
  try {
    const datosDecodificados = atob(codigoIngresado.trim());
    const partidaCargada = JSON.parse(datosDecodificados);
    
    // Verificar que tenga la estructura correcta
    if (partidaCargada.vida !== undefined && partidaCargada.escenaActual !== undefined) {
      partida = partidaCargada;
      alert(`¡Partida cargada correctamente!\n\nVida: ${partida.vida}\nEnergía: ${partida.energia}\nEscena: ${partida.escenaActual}`);
      return true;
    } else {
      alert("El código no corresponde a una partida válida.");
      return false;
    }
  } catch (error) {
    alert("Código inválido o corrupto. Verifica que lo hayas copiado completo.");
    return false;
  }
}

// Función principal del juego
function iniciarJuego(escenaInicial) {
  // === MENÚ PRINCIPAL ===
  alert("=== El Tesoro del Castillo ===");
  const opcionMenu = prompt("1) Nueva partida\n2) Cargar partida\n3) Salir");

  if (opcionMenu === "1") {
    alert("Comenzando nueva partida...");
    partida = {
      vida: 100,
      energia: 100,
      antorchamágica: false,
      llavemisteriosa: false,
      armadura: false,
      escenaActual: 1
    };
  } else if (opcionMenu === "2") {
    if (!cargarPartida()) {
      alert("No se pudo cargar la partida. Iniciando nueva partida.");
      partida.escenaActual = 1;
    }
  } else if (opcionMenu === "3") {
    alert("Hasta luego!");
    return
  }

  // === BUCLE DE ESCENAS ===
  ejecutarEscenas();
}

function ejecutarEscenas() {
  while (partida.escenaActual <= 7) {
    // === ESCENA 1 ===
    if (partida.escenaActual === 1) {
      
      alert("Escena 1: La entrada del castillo");
      let opcion1 = prompt("1) Entrar por la puerta principal\n2) Entrar por la ventana lateral\n3) Guardar partida");
      
      if (opcion1 === "3") {
        guardarPartida();
        opcion1 = prompt("1) Entrar por la puerta principal\n2) Entrar por la ventana lateral");
      }
      
      if (opcion1 === "1") {
        alert("Te cortás con clavos oxidados, perdés 10 de vida.");
        partida.vida -= 10;
      } else if (opcion1 === "2") {
        alert("Te cuesta pasar por la ventana, perdés 15 de energía y salís ileso.");
        partida.energia -= 15;
      } else {
        alert("Opción no válida.");
        break;
      }
      
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}`);
      partida.escenaActual = 2;
    }

    // === ESCENA 2 ===
    if (partida.escenaActual === 2) {
      
      alert("Escena 2: El bosque siniestro");
      let opcion2 = prompt("1) Seguir el sendero iluminado\n2) Ir por los arboles\n3) Guardar partida");
      
      if (opcion2 === "3") {
        guardarPartida();
        opcion2 = prompt("1) Seguir el sendero iluminado\n2) Ir por los arboles");
      }
      
      if (opcion2 === "1") {
        alert("La iluminacion es un fantasma, corres y pierdes 20 de energia");
        partida.energia -= 20;
      } else if (opcion2 === "2") {
        alert("Los árboles sale una bruja, te tira rayos desde su varita pierdes 15 de vida");
        partida.vida -= 15;
      } else {
        alert("Opción no válida.");
        break;
      }
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}`);
      partida.escenaActual = 3;
    }

    // === ESCENA 3 ===
    if (partida.escenaActual === 3) {
      
      alert("Escena 3: El acertijo del Brujo");
      alert("Al principio camina en 4 patas, Luego camina en 2 patas y por ultimo camina en 3 patas. Quién es?");
      let opcion3 = prompt("1) El Centauro\n2) El humano\n3) Guardar partida");
      
      if (opcion3 === "3") {
        guardarPartida();
        opcion3 = prompt("1) El Centauro\n2) El humano");
      }
      
      if (opcion3 === "1") {
        alert("Te equivocaste, El Brujo se rie, te hace fakiu y te vas con las manos vacias");
      } else if (opcion3 === "2") {
        alert("Correcto, El mago te da una antorcha mágica y te bendice con 10 de energia");
        partida.antorchamágica = true;
        partida.energia += 10;
      } else {
        alert("Opción no válida.");
        break;
      }
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}, Antorcha mágica: ${partida.antorchamágica ? "Sí" : "No"}`);
      partida.escenaActual = 4;
    }

    // === ESCENA 4 ===
    if (partida.escenaActual === 4) {
      
      alert("Escena 4: El volcan en erupcion");
      let opcion4 = prompt("1) Subir y pasar por el puente\n2) Rodear el volcan\n3) Guardar partida");
      
      if (opcion4 === "3") {
        guardarPartida();
        opcion4 = prompt("1) Subir y pasar por el puente\n2) Rodear el volcan");
      }
      
      if (opcion4 === "1") {
        alert("Gastaste 20 de energia por el calor, tienes bastante sed y sales sano");
        partida.energia -= 20;
      } else if (opcion4 === "2") {
        alert("Al rodear a la orillas del volcan, te intoxicaste con el humo olor azufre pierdes 25 de vida y sigues adelante");
        partida.vida -= 25;
      } else {
        alert("Opción no válida.");
        break;
      }
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}`);
      partida.escenaActual = 5;
    }

    // === ESCENA 5 ===
    if (partida.escenaActual === 5) {
      
      alert("Escena 5: La cueva");
      let opcion5 = prompt("1) Seguir por el camino oscuro\n2) Seguir por las antorchas altas\n3) Guardar partida");

      if (opcion5 === "3") {
        guardarPartida();
        opcion5 = prompt("1) Seguir por el camino oscuro\n2) Seguir por las antorchas altas");
      }

      if (opcion5 === "1") {
        if (partida.antorchamágica) {
          alert("Usas tu antorcha mágica para iluminar el camino oscuro y encuentras una llave misteriosa incrustada en una piedra valiosa.");
          partida.llavemisteriosa = true;
          partida.escenaActual = 6;
        } else {
          alert("Está demasiado oscuro para continuar sin una antorcha mágica. Regresas al cruce anterior.");
          opcion5 = prompt("1) Seguir por el camino oscuro\n2) Seguir por las antorchas altas");
          if (opcion5 === "2") {
            alert("Sales en silencio por la cantidad de murciélagos que hay en el techo de la cueva.");
            partida.escenaActual = 6;
          } else {
            alert("No puedes avanzar sin luz. Necesitas una antorcha mágica.");
          }
        }
      } else if (opcion5 === "2") {
        alert("Sales en silencio por la cantidad de murciélagos que hay en el techo de la cueva.");
        partida.escenaActual = 6;
      } else {
        alert("Opción no válida.");
        break;
      }

      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}, Llave: ${partida.llavemisteriosa ? "Sí" : "No"}, Antorcha mágica: ${partida.antorchamágica ? "Sí" : "No"}`);
    }

    // === ESCENA 6 ===
    if (partida.escenaActual === 6) {
      alert("Escena 6: El Palacio Real");
      let opcion6 = prompt("1) Decides quedarte a descansar\n2) Sigues hasta llegar a tu aldea\n3) Guardar partida");
      
      if (opcion6 === "3") {
        guardarPartida();
        opcion6 = prompt("1) Decides quedarte a descansar\n2) Sigues hasta llegar a tu aldea");
      }
      
      if (opcion6 === "1") {
        alert("Dormiste y recuperaste 20 de vida y 20 de energía");
        partida.vida += 20;
        partida.energia += 20;
        partida.escenaActual = 7;
      } else if (opcion6 === "2") {
        alert("Te cruzas con unos bandidos y pierdes los ítems del inventario, pero sales sano.");
        partida.antorchamágica = false;
        partida.llavemisteriosa = false;
        alert("¡Llegaste a casa sano y a salvo! Has completado el juego. Fin de la aventura.");
        
        const jugarDeNuevo = prompt("¿Quieres jugar de nuevo?\n1) Sí\n2) No");
        if (jugarDeNuevo === "1") {
          iniciarJuego();
          break;
        } else {
          alert("¡Gracias por jugar!");
          partida.escenaActual = escenaInicial;
        }
      } else {
        alert("Opción no válida.");
      }
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}`);
    }

    // === ESCENA 7 ===
    if (partida.escenaActual === 7) {
      alert("Escena 7: El Destino del Reino Oscuro");
      alert("La oscuridad invadió el Palacio Real, la llegada de Mephisto hace temblar el suelo");
      let opcion7 = prompt("1) Encontrar al Rey\n2) Armate de valor y agarra una espada\n3) Guardar partida");
      
      if (opcion7 === "3") {
        guardarPartida();
        opcion7 = prompt("1) Encontrar al Rey\n2) Armate de valor y agarra una espada");
      }
      
      if (opcion7 === "1") {
        if (partida.llavemisteriosa) {
          alert("Encontraste al Rey en la sala de guerra, te da un mapa, indicando el tesoro familiar de siglos sin abrir");
          alert("La caballería especial del Rey van a hacer tiempo contra Mephisto");
          alert("Aparecen los magos, en su ayuda. Lanzan hechizos de hielo para detenerlo");
          alert("Llegan a cortar la pierna de Mephisto y el brazo izquierdo. Una vez postrado en el suelo");
          alert("Mephisto se levanta y desde las sombras absorbe a 2 caballeros");
          alert("Mientras el héroe llegó a la cámara secreta con un cerrojo un tanto extraño, colocó la llave y la abrió");
          alert("Se escuchó un ruido en el piso. Se desprendió de la llave la piedra de la cual empezó a brillar");
          alert("Encontró en un cajón grande lleno de telarañas una armadura brillante dorada y plateada");
          alert("Tiene un hueco en el guantelete, colocó la piedra en esa ranura, agarró su antorcha mágica en búsqueda de derrotar a Mephisto");
          partida.armadura = true;
          alert("A toda prisa llega a la escena. Aparece un Dragón Oscuro llamando la atención del paisaje con llamas de un rojo intenso oscuro y los magos haciendo todo lo posible para detener el alboroto causado");
          alert("Te presentas, llamas la atención al dragón, agarras una lanza del suelo, toma un brillo deslumbrante y se transforma en un rayo al ser lanzada");
          alert("Le pegas en el ala derecha, retorcido del dolor y la carne quemándose. Mephisto furioso, corriendo a toda prisa hacia nuestro héroe");
          alert("Da un gran respiro cerca de nuestro héroe, agarras un escudo, te cubres del gran fuego amenazador, se transforma en una gran barrera contra el calor y brillante como el sol");
          alert("Le molestó al dragón su resplandor, dejándolo ciego por un instante");
          alert("Agarras una espada lo más rápido posible, se transforma en una espada más larga y liviana, te acercas a Mephisto para no errarle");
          alert("Dandole un corte certero en la yugular, todo el Palacio suspiró por el alivio de seguir con sus vidas");
          alert("Con la antorcha mágica quemaste los restos del dragón y se evaporó en el aire, yéndose junto con los restos de oscuridad");
          alert("Volviendo la paz al Palacio, te nombraron Noble Duque, hicieron un día a tu honor con celebración, comidas y bebidas");
          alert("Teniendo el gran labor de servir al Palacio y al Rey");
          alert("¡Felicitaciones! Has desbloqueado el final verdadero: ¡El Guerrero del Alba!");
          
          const jugarDeNuevo = prompt("¿Quieres jugar de nuevo?\n1) Sí\n2) No");
          if (jugarDeNuevo === "1") {
            iniciarJuego();
            break;
          } else {
            alert("¡Gracias por jugar!");
            partida.escenaActual = escenaInicial;
          }
        } else {
          alert("No tienes llave misteriosa para abrir el cuarto secreto.");
          alert("El Rey está decepcionado. Debes armarte de valor.");
          opcion7 = "2"; // Forzar opción 2
        }
      }
      
      if (opcion7 === "2") {
        alert("Te armas de valor y agarras una espada del arsenal");
        alert("Fuiste a la cima de la torre, los choques de espadas levantaban la tensión en la aldea");
        alert("Llegas a retirar la espada de Mephisto de sus gélidas manos");
        alert("Le cortas un brazo, te clava la mirada de odio y rencor. Diciendo que no podrás con él");
        alert("El brazo vuelve a crecer y adopta la forma de un inmenso dragón quemando todo a su paso");
        alert("Llegas a escapar debajo de los escombros de la torre");
        alert("¡Llegaste a casa vivo, sabiendo que la guerra recién comienza! Has completado el juego. Fin de la aventura.");
        
        const jugarDeNuevo = prompt("¿Quieres jugar de nuevo?\n1) Sí\n2) No");
        if (jugarDeNuevo === "1") {
          iniciarJuego();
          break;
        } else {
          alert("¡Gracias por jugar!");
          partida.escenaActual = escenaInicial;
        }
      }
      
      console.log(`Vida: ${partida.vida}, Energía: ${partida.energia}, Armadura: ${partida.armadura ? "Sí" : "No"}`);
    }
  }
}

// Iniciar el juego
iniciarJuego();


