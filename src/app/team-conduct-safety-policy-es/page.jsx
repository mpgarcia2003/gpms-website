import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Section, CalloutBox, ListRules, LangToggle } from '../../components/PolicyComponents';

export const metadata = {
  title: 'Política de Conducta y Seguridad del Personal | GreenPoint Maintenance Services Corp',
  description: 'Reglas de seguridad laboral, seguridad con escaleras, reporte de lesiones, límites de carga y normas de conducta para todo el personal de GreenPoint Maintenance Services.',
  robots: { index: true, follow: true },
  alternates: { languages: { en: '/team-conduct-safety-policy', es: '/team-conduct-safety-policy-es' } },
};

export default function PoliticaConductaSeguridadPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 80, fontFamily: "'DM Sans', sans-serif", background: '#fafbfa' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)',
          padding: '72px 24px 56px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <LangToggle current="es" />
            <br />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(200,163,77,0.12)',
              border: '1px solid rgba(200,163,77,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 20,
            }}>
              <span style={{ fontSize: 12, color: '#C8A34D', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                Personal · Lectura obligatoria
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em',
            }}>
              Política de Conducta y Seguridad del Personal
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
              Reglas de trabajo, normas de seguridad y expectativas de conducta para todos los empleados, subcontratistas y miembros de cuadrilla de GreenPoint.
            </p>
            <div style={{
              marginTop: 24, display: 'inline-flex', gap: 16, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em',
            }}>
              <span>VIGENTE DESDE: 22 de abril de 2026</span>
              <span>·</span>
              <span>ÚLTIMA ACTUALIZACIÓN: 22 de abril de 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: 'clamp(32px, 6vw, 64px)', border: '1px solid #eee' }}>

            {/* Preamble */}
            <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid #eee' }}>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>
                Esta política aplica a todos los empleados, contratistas, subcontratistas, trabajadores temporales y cualquier persona que realice trabajo en nombre de GreenPoint Maintenance Services Corp (&ldquo;<strong>GreenPoint</strong>&rdquo; o la &ldquo;<strong>Compañía</strong>&rdquo;) en cualquier sitio de cliente, vehículo de la Compañía, almacén o actividad patrocinada por la Compañía (&ldquo;<strong>Personal</strong>&rdquo; o &ldquo;usted&rdquo;). Al aceptar trabajo con GreenPoint, usted reconoce haber recibido esta política y acepta cumplir cada una de sus disposiciones.
              </p>
              <div style={{
                marginTop: 20, padding: '16px 20px', background: 'rgba(200,163,77,0.08)',
                border: '1px solid rgba(200,163,77,0.3)', borderLeft: '3px solid #C8A34D', borderRadius: 4,
                fontSize: 14, color: '#5a4a20', fontWeight: 500,
              }}>
                ⚠️ La violación de esta política es motivo de medidas disciplinarias, incluyendo el despido inmediato. El incumplimiento de las reglas de seguridad también puede eliminar o reducir bonificaciones, su historial disciplinario o la continuidad de su empleo. Nada en esta política reduce ni afecta sus derechos bajo la Ley de Compensación Laboral de Nueva York.
              </div>
              <p style={{ marginTop: 16, fontSize: 12.5, color: '#999', lineHeight: 1.6 }}>
                Esta traducción al español se proporciona para su conveniencia. En caso de cualquier diferencia entre las versiones, la <a href="/team-conduct-safety-policy" style={{ color: '#1B7A3D' }}>versión en inglés</a> prevalece.
              </p>
            </div>

            <Section number="1" title="Conducta General">
              <ListRules items={[
                "Llegue puntual, con el uniforme adecuado y en condición física para trabajar de manera segura.",
                "Trate a todos los clientes, al personal del cliente, a sus compañeros y al público con profesionalismo y respeto.",
                "No consuma ni esté bajo la influencia de alcohol, cannabis o drogas ilegales durante el servicio, en vehículos de la Compañía o en cualquier sitio de cliente. GreenPoint mantiene un lugar de trabajo libre de drogas y alcohol.",
                "No traiga armas de ningún tipo a ningún sitio de cliente, vehículo de la Compañía o propiedad de la Compañía.",
                "Nunca retire nada de un sitio de cliente que no le pertenezca. Tomar cualquier artículo sin autorización escrita constituye robo y es motivo de despido inmediato y remisión a las autoridades.",
                "Reporte de inmediato a Miguel Garcia cualquier robo, daño o mala conducta que observe en el sitio.",
                "No traiga visitantes no autorizados, amigos, familiares ni niños a ningún sitio de cliente.",
                "No coma ni beba en las áreas de trabajo del cliente, excepto en las áreas de descanso designadas y aprobadas por el cliente.",
                "Mantenga una apariencia profesional. No use gráficos ofensivos, consignas políticas ni imágenes inapropiadas en ropa, bolsos o artículos personales visibles para los clientes.",
              ]} />
            </Section>

            <Section number="2" title="Seguridad con Escaleras — Regla de Dos Personas" flagged criticalLabel="Crítico">
              <CalloutBox>Esta es una política de seguridad de tolerancia cero. Sin excepciones. Sin &ldquo;solo por esta vez.&rdquo;</CalloutBox>

              <p><strong>(a) Requisito de dos personas.</strong> Siempre que se use una escalera para cualquier tarea &mdash; incluyendo limpieza de polvo en altura, cambio de focos, limpieza de ventanas, cambio de filtros, limpieza de letreros o alcanzar almacenamiento elevado &mdash; <strong>deben estar presentes dos miembros del Personal en todo momento</strong>. Una persona sube y realiza el trabajo; la segunda sostiene y estabiliza la escalera en la base y actúa como vigía.</p>

              <p><strong>(b) Inspección de la escalera.</strong> Antes de cada uso, inspeccione la escalera en busca de peldaños rotos, rieles agrietados, herrajes flojos, patas faltantes o separadores dañados. Toda escalera defectuosa debe etiquetarse, retirarse de servicio de inmediato y reportarse a Miguel Garcia.</p>

              <p><strong>(c) Prácticas prohibidas.</strong> Usted no deberá:</p>
              <ListRules items={[
                "Subir o bajar una escalera con herramientas, cubetas o suministros en las manos — use un cinturón portaherramientas, una cuerda, o pida a su compañero que le alcance los artículos.",
                "Pararse en el último peldaño, la tapa superior o el refuerzo debajo de la tapa superior.",
                "Usar una escalera sobre superficies mojadas, con hielo, desniveladas o inestables.",
                "Usar una escalera metálica cerca de trabajo eléctrico o equipos energizados.",
                "Usar una escalera al aire libre con vientos fuertes (más de 20 mph) o tormentas eléctricas.",
                "Inclinarse hacia los lados estando en la escalera — mantenga siempre la hebilla de su cinturón entre los rieles.",
                "Usar una escalera plegable en posición desplegada / recargada.",
                "Usar cualquier modelo de escalera para el que no haya sido capacitado.",
                "Colocar una escalera frente a una puerta sin seguro sin que su compañero bloquee la entrada.",
              ]} />

              <p><strong>(d) Límites de altura.</strong> Para cualquier tarea que requiera trabajar a más de <strong>10 pies (3 metros)</strong>, debe avisar a Miguel Garcia con anticipación y usar la protección contra caídas aprobada por la Compañía si está disponible. El trabajo a más de <strong>20 pies (6 metros)</strong> requiere aprobación previa por escrito del supervisor y protección contra caídas documentada.</p>

              <p><strong>(e) Sin excepciones.</strong> Si no hay un segundo miembro del Personal disponible y debe realizarse una tarea con escalera, <strong>deténgase y llame a Miguel Garcia al 347-332-9348</strong>. No intente la tarea solo, aunque el cliente, el personal del cliente o el administrador del edificio se lo pida o lo presione. <strong>La presión del cliente nunca justifica violar esta regla.</strong></p>
            </Section>

            <Section number="3" title="Reporte de Lesiones e Incidentes" flagged criticalLabel="Crítico">
              <CalloutBox>Reportar el mismo día es política de la Compañía. Su derecho bajo la Compensación Laboral de NY a un plazo de 30 días para reportar se mantiene intacto en todo caso.</CalloutBox>

              <p><strong>(a) Plazo interno de reporte.</strong> Toda lesión, accidente, casi-accidente e incidente relacionado con el trabajo &mdash; por menor que sea &mdash; debe reportarse <strong>lo antes posible y, a más tardar, antes del final de su turno el día en que ocurra</strong>. El seguimiento por escrito mediante el formulario de Reporte de Incidentes en línea, mensaje de texto o correo electrónico debe enviarse dentro de <strong>siete (7) días calendario</strong>.</p>

              <p><strong>(b) A quién reportar.</strong> Reporte cada incidente directamente a:</p>
              <div style={{
                marginTop: 10, marginBottom: 14, padding: 20, background: '#f5f7f5',
                borderLeft: '3px solid #1B7A3D', borderRadius: 4, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13, lineHeight: 1.9, color: '#333',
              }}>
                <div><strong>Miguel Garcia</strong></div>
                <div>📧 <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D' }}>info@greenpointms.com</a></div>
                <div>📞 <a href="tel:+13473329348" style={{ color: '#1B7A3D' }}>347-332-9348</a></div>
                <div>🔗 <a href="/incident-report" style={{ color: '#1B7A3D' }}>Enviar Reporte de Incidente de la Compañía →</a></div>
              </div>

              <p><strong>(c) Por qué existe esta regla.</strong> Reportar de inmediato garantiza que usted reciba atención médica adecuada, documenta el incidente mientras los recuerdos están frescos y preserva la evidencia. El reporte verbal el mismo día, seguido de documentación escrita, es política de la Compañía.</p>

              <p><strong>(d) Incidentes que deben reportarse incluyen:</strong></p>
              <ListRules items={[
                "Cortadas, raspaduras, moretones, heridas punzantes.",
                "Resbalones, tropiezos y caídas — aunque en el momento crea que no está lesionado.",
                "Tensión o dolor de espalda, cuello, rodilla u hombro.",
                "Exposición a químicos, sangre, fluidos corporales o materiales peligrosos.",
                "Irritación de los ojos o salpicaduras de químicos.",
                "Quemaduras — térmicas, químicas o eléctricas.",
                "Picaduras de insectos o mordeduras de animales.",
                "Cualquier incidente con una escalera, elevador o equipo, sin importar si hay lesión aparente.",
                "Accidentes vehiculares con vehículos de la Compañía o durante horas de trabajo.",
                "Casi-accidentes (no hubo lesión, pero pudo haberla) — reportarlos protege a todos.",
              ]} />

              <p><strong>(e) Cómo reportar.</strong></p>
              <ol style={{ paddingLeft: 22, lineHeight: 1.9 }}>
                <li>Llame o envíe un mensaje de texto a Miguel Garcia al <strong>347-332-9348</strong> de inmediato (o escriba a <strong>info@greenpointms.com</strong>).</li>
                <li>Envíe el <a href="/incident-report" style={{ color: '#1B7A3D', fontWeight: 600 }}>formulario de Reporte de Incidente</a> en línea antes del fin del turno o el siguiente día hábil.</li>
                <li>Entregue la documentación médica dentro de los cinco (5) días hábiles posteriores a cualquier tratamiento.</li>
                <li>Coopere plenamente con cualquier reclamo de compensación laboral, investigación o proceso de regreso al trabajo.</li>
              </ol>

              <p><strong>(f) Sus derechos bajo la ley de Nueva York — Reconocidos.</strong> La Ley de Compensación Laboral de Nueva York le otorga <strong>treinta (30) días</strong> para reportar una lesión laboral a su empleador y preservar sus beneficios de compensación laboral. <strong>Nada en esta política acorta ese plazo legal ni afecta su derecho a los beneficios.</strong> La política interna de la Compañía (mismo día / siete días) es únicamente para fines operativos y disciplinarios. Reportar tarde puede afectar su evaluación de desempeño y su historial disciplinario, pero <strong>no</strong> se usará para negarle los beneficios de compensación laboral a los que tiene derecho por ley.</p>

              <p><strong>(g) Emergencias.</strong> En caso de lesiones que pongan en riesgo la vida, <strong>llame primero al 911</strong> y luego notifique a Miguel Garcia al 347-332-9348 tan pronto como sea razonablemente posible.</p>

              <p><strong>(h) No represalias.</strong> GreenPoint no tomará represalias contra ningún miembro del Personal por reportar una lesión o presentar un reclamo de compensación laboral de buena fe. Las represalias son ilegales bajo la ley de Nueva York y una violación de esta política.</p>

              <p><strong>(i) Plazo máximo de reporte — 30 días.</strong> Toda lesión laboral — sin importar su gravedad aparente, incluidas aquellas que el miembro del Personal inicialmente crea que no requieren atención médica — debe reportarse a GreenPoint tan pronto como sea razonablemente posible, idealmente el mismo día y en ningún caso después de <strong>treinta (30) días</strong>, conforme a la Sección 18 de la Ley de Compensación Laboral de Nueva York. <strong>No reportar dentro de los treinta (30) días puede resultar en la pérdida de beneficios de compensación laboral bajo la ley de Nueva York y también puede resultar en medidas disciplinarias, incluyendo el despido, independientemente del estado legal del reclamo.</strong> Esto incluye lesiones que al principio parecen menores pero luego empeoran, lesiones por esfuerzo repetitivo que se desarrollan con el tiempo, y lesiones que el miembro del Personal cree que no están relacionadas con un incidente específico.</p>
            </Section>

            <Section number="4" title="Equipo de Protección Personal (EPP)">
              <p>La Compañía proporciona el EPP requerido sin costo alguno. Usted debe usar el EPP apropiado en todo momento cuando la tarea lo requiera.</p>
              <ListRules items={[
                "Guantes — para toda limpieza, manejo de químicos y retiro de basura.",
                "Lentes o gafas de seguridad — para trabajo en altura, uso de químicos y equipos presurizados.",
                "Calzado antiderrapante de punta cerrada — obligatorio en todo momento durante el servicio. Nunca sandalias, tenis sin suela antiderrapante ni calzado abierto.",
                "Mascarillas contra polvo o respiradores N95 — en ambientes polvorientos, áreas con moho o uso de químicos específicos.",
                "Fajas de soporte lumbar — al levantar objetos pesados (vea la Sección 5).",
                "Chaleco de alta visibilidad — en estacionamientos, andenes de carga o cerca de tráfico vehicular.",
              ]} />
              <p>El EPP debe usarse correctamente. Negarse a usar o no usar el EPP proporcionado es una falta disciplinaria. Reporte de inmediato a Miguel Garcia cualquier EPP dañado, desgastado o faltante.</p>
            </Section>


            <Section number="5" title="Levantamiento, Empuje, Jalado y Ergonomía" flagged criticalLabel="Crítico">
              <CalloutBox>Las lesiones de espalda son de las más comunes — y prevenibles — en la industria de la limpieza. Siga estas reglas sin excepción.</CalloutBox>

              <p><strong>(a) Límite de levantamiento individual.</strong> No levante solo ningún objeto que pese más de <strong>50 libras</strong>. Por encima de 50 libras, <strong>debe</strong> usar un levantamiento en equipo de dos personas, un carrito, un diablito (dolly) o solicitar asistencia mecánica.</p>

              <p><strong>(b) Regla de las bolsas de basura.</strong> Si una bolsa de basura llena pesa más de <strong>40 libras</strong> o es incómoda de cargar, <strong>divídala en dos bolsas</strong>. Nunca arrastre una bolsa pesada por escaleras ni sobre superficies filosas que puedan romperla. Amarre bien las bolsas antes de moverlas. Nunca meta la mano en una bolsa sin guantes reforzados resistentes a perforaciones.</p>

              <p><strong>(c) Límite de empuje / jalado.</strong> Si mover un carrito, una cubeta de trapeador, una máquina de pisos o cualquier carga con ruedas requiere <strong>más que ambas manos y un esfuerzo normal al caminar</strong> — deténgase. Pida ayuda, divida la carga o use un diablito más grande. Si siente tensión en los hombros, opresión en el pecho o tensión en la espalda, deténgase de inmediato y repórtelo.</p>

              <p><strong>(d) Técnica correcta de levantamiento.</strong></p>
              <ListRules items={[
                "Planifique el levantamiento antes de tocar el objeto. Revise que el camino esté libre de obstáculos.",
                "Párese cerca del objeto, con los pies separados al ancho de los hombros.",
                "Agáchese doblando las rodillas y las caderas — no la espalda.",
                "Mantenga la carga cerca del cuerpo, a la altura de la cintura al cargarla.",
                "Levante suavemente con las piernas. Nunca haga movimientos bruscos ni gire el torso.",
                "Gire con los pies, no con la cintura.",
                "Baje la carga con la misma técnica — agáchese con las piernas.",
              ]} />

              <p><strong>(e) Movimientos repetitivos.</strong> Para tareas repetitivas (tallar, aspirar, trapear tramos largos), cambie de mano y tome micro-descansos cada 20–30 minutos. Reporte de inmediato cualquier dolor u hormigueo recurrente (vea la Sección 3).</p>

              <p><strong>(f) Posturas incómodas.</strong> No se doble, arrodille ni agache por períodos prolongados sin descansos. Use rodilleras para trabajo a nivel de piso. Si una tarea requiere una postura incómoda sostenida, deténgase y contacte a Miguel Garcia.</p>
            </Section>

            <Section number="6" title="Prevención de Resbalones, Tropiezos y Caídas — Reglas de Trapeado" flagged criticalLabel="Crítico">
              <CalloutBox>Los pisos mojados son la causa #1 de reclamos por lesiones en la limpieza. Estas reglas no son negociables.</CalloutBox>

              <p><strong>(a) Señales de piso mojado — Siempre.</strong> Coloque señales de &ldquo;Piso Mojado&rdquo; en ambos extremos de cualquier área que esté trapeando o recién limpiada, <strong>antes</strong> de comenzar a trapear. Las señales deben permanecer en su lugar hasta que el piso esté completamente seco. <strong>Sin excepciones</strong>, aunque el área sea pequeña o &ldquo;solo tome un minuto.&rdquo;</p>

              <p><strong>(b) Técnica de trapeado — Patrón en &ldquo;S&rdquo; hacia atrás.</strong></p>
              <ListRules items={[
                "Siempre trapee hacia atrás, alejándose de usted hacia la salida o el área ya limpia. Nunca camine sobre un piso que acaba de trapear.",
                "Use un patrón de figura 8 o en S para cubrir el área de manera uniforme sin pisar la sección mojada.",
                "Exprima bien el trapeador — un trapeador demasiado mojado deja agua estancada y crea riesgo de resbalones.",
                "Cambie el agua del trapeador con frecuencia (cada 500–1,000 pies cuadrados o cuando se vea sucia). El agua sucia deja un residuo más resbaloso que la tierra seca.",
                "No trapee un área con tráfico de personas sin bloquearla primero con señales o con un compañero como vigía.",
              ]} />

              <p><strong>(c) Su propio paso — Cómo caminar.</strong></p>
              <ListRules items={[
                "Use zapatos antiderrapantes en todo momento. Inspeccione las suelas semanalmente; reemplace los zapatos desgastados.",
                "Dé pasos más cortos sobre cualquier superficie mojada, encerada o recién trapeada.",
                "Mantenga su centro de gravedad sobre el pie delantero. No se incline hacia los lados.",
                "Si debe cruzar un área mojada, camine despacio, con los pies planos, y sujétese de una superficie estable si es posible.",
                "Nunca corra en un sitio de cliente. Nunca.",
                "Use los pasamanos en todas las escaleras — al subir y al bajar. No cargue objetos por las escaleras sin una mano libre para el pasamanos.",
              ]} />

              <p><strong>(d) Respuesta a derrames.</strong> Limpie los derrames de inmediato. No deje cables, mangueras, cubetas de trapeador ni equipos en los pasillos. Reporte cualquier peligro estructural (losetas sueltas, pisos dañados, pasamanos rotos, desniveles) a Miguel Garcia y al contacto del cliente el mismo día.</p>

              <p><strong>(e) Encerado y decapado de pisos.</strong> Solo los miembros del Personal capacitados en cuidado de pisos pueden decapar, encerar o pulir pisos. Toda el área debe acordonarse o bloquearse físicamente al paso de peatones durante todo el período de secado. Nunca realice trabajos de cuidado de pisos durante horas de operación del cliente sin autorización escrita del cliente.</p>
            </Section>

            <Section number="7" title="Seguridad con Químicos">
              <ListRules items={[
                "Use únicamente los químicos aprobados por la Compañía. No traiga productos de limpieza personales.",
                "Nunca mezcle químicos — especialmente cloro (blanqueador) y amoníaco, que crean gas cloramina tóxico.",
                "Nunca mezcle marcas diferentes del mismo tipo de producto sin aprobación del supervisor.",
                "Almacene los químicos en posición vertical, tapados y etiquetados en sus envases originales. Nunca transfiera químicos a botellas sin etiqueta.",
                "Revise la Hoja de Datos de Seguridad (SDS) de cualquier químico que no haya usado antes. Los archivos de SDS están disponibles con Miguel Garcia a solicitud.",
                "Ventile el área cuando use químicos fuertes. Abra ventanas o encienda extractores.",
                "Use las proporciones de dilución correctas. Más concentrado no es mejor y puede dañar superficies o causar quemaduras en la piel.",
                "Si un químico le salpica los ojos o la piel, enjuague con agua durante 15+ minutos y llame a Miguel Garcia de inmediato.",
              ]} />
            </Section>

            <Section number="8" title="Uso de Equipos">
              <ListRules items={[
                "No opere ningún equipo para el cual no haya sido capacitado — aspiradoras, pulidoras, fregadoras automáticas, hidrolavadoras o herramientas eléctricas.",
                "Inspeccione el equipo antes de cada uso. Revise que los cables no estén pelados, que los enchufes no estén dañados y que las partes móviles no tengan componentes sueltos.",
                "Reporte de inmediato a Miguel Garcia cualquier equipo dañado o con fallas. Etiquete el equipo dañado para que nadie más lo use.",
                "Nunca modifique, desarme ni anule las protecciones de seguridad de ningún equipo.",
                "Desconecte el equipo antes de cambiar bolsas, cepillos o filtros, o de despejar atascos.",
                "No tienda cables a través de pasillos sin protectores de cable o cinta adecuada.",
                "No use equipos eléctricos en condiciones mojadas a menos que estén certificados para uso en mojado.",
                "Devuelva todo el equipo a su área de almacenamiento designada limpio, con el cable enrollado y listo para el siguiente usuario.",
              ]} />
            </Section>

            <Section number="9" title="Política de Teléfonos y Dispositivos Personales" flagged criticalLabel="Crítico">
              <CalloutBox>La distracción por el teléfono es una de las principales causas de lesiones y quejas de clientes en la industria de la limpieza. Siga estas reglas estrictamente.</CalloutBox>

              <ListRules items={[
                "No use su teléfono personal durante las tareas activas de trabajo. Los teléfonos permanecen en bolsillos, bolsas o vehículos excepto en descansos autorizados.",
                "Absolutamente prohibido usar el teléfono mientras está en una escalera, operando equipos, manejando químicos o conduciendo un vehículo de la Compañía.",
                "No use audífonos, auriculares ni AirPods mientras trabaja en un sitio de cliente. Debe poder escuchar a sus compañeros, a los clientes, las alarmas y los sonidos del entorno en todo momento.",
                "No tome fotografías ni videos de ningún sitio de cliente, materiales del cliente, empleados del cliente o trabajo realizado, salvo por instrucción escrita específica de Miguel Garcia.",
                "No publique en redes sociales sobre los sitios de clientes, el personal del cliente ni ningún trabajo realizado. Cualquier violación es causa de despido inmediato.",
                "Las llamadas telefónicas de emergencia (familiares, médicas, etc.) siempre están permitidas. Salga del área de trabajo y avise a un compañero antes de tomar la llamada.",
                "Las llamadas relacionadas con asuntos del cliente requieren un área tranquila designada por el cliente y una breve notificación a Miguel Garcia.",
              ]} />
            </Section>

            <Section number="10" title="Política de Vehículos y Conducción">
              <ListRules items={[
                "Solo los miembros del Personal autorizados pueden operar vehículos de la Compañía. Debe tener una licencia de conducir vigente y entregar una copia a Miguel Garcia antes de conducir.",
                "El cinturón de seguridad debe usarse en todo momento — conductor y todos los pasajeros. Sin excepciones.",
                "No use el teléfono mientras conduce, incluidas llamadas con manos libres para cualquier cosa que no sea una comunicación esencial y breve. No envíe mensajes de texto ni correos, no navegue con el teléfono en la mano ni use redes sociales mientras el vehículo está en movimiento.",
                "No lleve pasajeros que no sean miembros del Personal de GreenPoint en vehículos de la Compañía sin autorización escrita.",
                "No fume, vapee, coma ni beba nada que no sea agua mientras conduce.",
                "Respete todos los límites de velocidad señalizados. Salga con suficiente anticipación para nunca tener que apresurarse.",
                "Inspeccione el vehículo antes de cada turno — llantas, luces, fluidos, espejos. Reporte cualquier problema a Miguel Garcia antes de conducir.",
                "Reporte cualquier accidente vehicular — sin importar la culpa o el daño aparente — a Miguel Garcia dentro de dos (2) horas. Todos los accidentes con vehículos de la Compañía también están sujetos a la regla de reporte de lesiones de la Sección 3.",
                "Mantenga los vehículos limpios y organizados. Asegure todos los suministros, químicos y equipos para que no se muevan durante el trayecto.",
              ]} />
            </Section>

            <Section number="11" title="Propiedad del Cliente y Confidencialidad">
              <ListRules items={[
                "Toque únicamente lo que está en su lista de limpieza asignada. No mueva, reacomode ni manipule artículos personales, objetos de valor del cliente, documentos, computadoras ni aparatos electrónicos a menos que se le instruya específicamente.",
                "Si un artículo del cliente estorba, limpie alrededor de él o notifique a Miguel Garcia para recibir instrucciones. Nunca mueva usted mismo objetos de valor.",
                "No fotografíe, grabe en video ni comparta en ninguna plataforma ningún sitio de cliente, materiales del cliente, empleados del cliente o trabajo realizado.",
                "Cualquier documento, código de acceso, llave, credencial o información que encuentre en un sitio de cliente es confidencial y no debe comentarse fuera del trabajo.",
                "No entregue información de contacto, direcciones ni detalles de seguridad de ningún cliente a nadie fuera de GreenPoint.",
                "Reporte de inmediato a Miguel Garcia cualquier actividad sospechosa, personas no autorizadas en el sitio o preocupaciones sobre la seguridad del lugar.",
                "Nunca entre a un área del cliente que no le haya sido asignada para limpiar — ni siquiera para usar el baño, a menos que esté específicamente autorizado.",
              ]} />
            </Section>

            <Section number="12" title="No Captación de Clientes y Obligaciones Posteriores al Empleo" flagged criticalLabel="Crítico">
              <p>Durante su relación laboral con GreenPoint y durante los <strong>doce (12) meses</strong> posteriores a su terminación, usted no deberá, directa o indirectamente:</p>

              <p><strong>(a) No captación de clientes — Alcance limitado.</strong> Solicitar, atender o aceptar trabajo competidor de limpieza o mantenimiento de instalaciones de ningún cliente de GreenPoint <strong>con quien usted personalmente haya prestado servicios o haya tenido contacto sustancial durante los doce (12) meses previos a su salida</strong>, y sobre el cual haya conocido información confidencial de precios, alcance o programación a través de GreenPoint. Usted puede trabajar en la industria de la limpieza en general; esta restricción aplica únicamente a los clientes específicos que usted atendió personalmente.</p>

              <p><strong>(b) No captación de compañeros.</strong> Solicitar, reclutar o alentar a cualquier miembro del Personal de GreenPoint con quien trabajó a dejar GreenPoint para trabajar para usted o para un tercero.</p>

              <p><strong>(c) Confidencialidad.</strong> No divulgue ni use los precios, métodos, listas de clientes, datos de JaniTrack, materiales de capacitación ni ninguna otra información no pública de GreenPoint para ningún propósito distinto al desempeño de sus funciones para GreenPoint. Esta obligación sobrevive a la terminación del empleo.</p>

              <p><strong>(d) Lo que esta sección NO restringe.</strong> Nada en esta Sección 12 le impide (i) trabajar para un competidor en una capacidad general, (ii) contactar a clientes con quienes tenía relaciones previas antes de unirse a GreenPoint, o (iii) aceptar empleo con cualquier compañía que no haya llegado a usted a través de GreenPoint.</p>

              <p><strong>(e) Remedios.</strong> La violación puede resultar en despido inmediato, una demanda por daños reales y medidas cautelares (injunctive relief).</p>
            </Section>

            <Section number="13" title="Política de Drogas y Alcohol">
              <p>GreenPoint mantiene un lugar de trabajo libre de drogas y alcohol. Usted puede estar sujeto a pruebas de drogas y alcohol (a) como parte de una investigación posterior a un accidente o por sospecha razonable; (b) de forma aleatoria en ciertos puestos sensibles a la seguridad; o (c) según lo requieran los contratos con clientes. Negarse a la prueba se trata como un resultado positivo y es causa de despido.</p>
            </Section>

            <Section number="14" title="Contra el Acoso y la Discriminación">
              <p>GreenPoint prohíbe el acoso o la discriminación por motivos de raza, color, religión, sexo, orientación sexual, identidad de género, origen nacional, edad, discapacidad, condición de veterano o cualquier otra característica protegida. Reporte cualquier inquietud directamente a Miguel Garcia en <strong>info@greenpointms.com</strong> o al <strong>347-332-9348</strong>. Los reportes se investigarán con prontitud y confidencialidad. Las represalias por un reporte de buena fe son en sí mismas una violación de esta política y son ilegales bajo la ley de Nueva York.</p>
            </Section>

            <Section number="15" title="Clima y Peligros Ambientales">
              <ListRules items={[
                "En calor extremo, tome descansos para hidratarse con más frecuencia y descanse en áreas con sombra o aire acondicionado. Reporte de inmediato señales de agotamiento por calor o golpe de calor.",
                "En frío extremo, vístase en capas y tome descansos para entrar en calor. Nunca intente trabajar al aire libre con sensación térmica severa sin el equipo adecuado.",
                "Durante tormentas eléctricas, no trabaje al aire libre ni toque escaleras metálicas.",
                "En condiciones de nieve o hielo, aplique sal en los pasillos antes de limpiar y use calzado con tracción para hielo al caminar hacia y desde los sitios de clientes.",
                "Si un sitio de cliente no es seguro para trabajar debido al clima, un incendio, una inundación, una fuga de gas o cualquier emergencia — evacúe de inmediato y llame a Miguel Garcia.",
              ]} />
            </Section>

            <Section number="16" title="Trabajo Fuera del Reloj — Estrictamente Prohibido" flagged criticalLabel="Crítico">
              <CalloutBox>Esta regla lo protege a usted (se le paga por todo su trabajo) y a la Compañía (sin reclamos salariales sorpresa). Sígala estrictamente.</CalloutBox>
              <p>Los miembros del Personal <strong>no</strong> deberán realizar tareas relacionadas con el trabajo antes de marcar su entrada ni después de marcar su salida. Esto incluye, entre otros:</p>
              <ListRules items={[
                "Preparación previa al turno, carga de equipos o recolección de suministros antes de marcar entrada.",
                "Limpieza de equipos, papeleo o reportes después de marcar salida.",
                "Conducir vehículos de la Compañía o transportar suministros fuera del reloj.",
                "Responder llamadas, mensajes de texto o correos relacionados con el trabajo fuera de las horas pagadas sin autorización previa.",
                "Realizar cualquier tarea en un sitio de cliente fuera de las horas registradas.",
              ]} />
              <p><strong>Si una tarea requiere más tiempo que su turno programado, contacte a Miguel Garcia para obtener autorización ANTES de realizar el trabajo.</strong> Realizar trabajo no registrado es una violación de la política de la Compañía. Al firmar esta Política, usted reconoce que cualquier trabajo no registrado realizado en violación de esta sección se hizo sin autorización de la Compañía, y renuncia a cualquier reclamo por salarios no pagados relacionados con dicho trabajo no autorizado.</p>
            </Section>

            <Section number="17" title="Condiciones Preexistentes y Divulgación Médica" flagged criticalLabel="Crítico">
              <p>Los miembros del Personal deben divulgar cualquier condición médica preexistente, lesión laboral previa o limitación física que pueda afectar su capacidad para desempeñar sus funciones de manera segura. Las divulgaciones deben hacerse directamente a Miguel Garcia y se mantendrán confidenciales en la medida permitida por la ley.</p>
              <p>Ejemplos de condiciones que deben divulgarse incluyen (entre otras):</p>
              <ListRules items={[
                "Lesiones previas de espalda, cuello, rodilla, hombro o articulaciones.",
                "Lesiones por estrés repetitivo (túnel carpiano, tendinitis).",
                "Condiciones crónicas que afecten el equilibrio, la visión, la audición o la resistencia.",
                "Condiciones cardíacas, respiratorias o neurológicas que afecten la capacidad de trabajo físico.",
                "Alergias o sensibilidad a químicos.",
                "Embarazo u otras condiciones temporales que afecten la capacidad de trabajo.",
              ]} />
              <p><strong>No divulgar una condición preexistente conocida</strong> puede resultar en (a) la negación de reclamos de compensación laboral relacionados con el agravamiento de esa condición en la medida permitida por la ley, y (b) medidas disciplinarias, incluyendo el despido. La divulgación no es motivo de acción laboral adversa; la Compañía trabajará de buena fe para brindar adaptaciones razonables conforme a la ADA y la Ley de Derechos Humanos de Nueva York cuando corresponda.</p>
            </Section>

            <Section number="18" title="Reconocimiento de Capacitación y Deber de Rechazar Trabajo sin Capacitación" flagged criticalLabel="Crítico">
              <p>Al firmar esta Política, el miembro del Personal confirma que ha recibido capacitación en:</p>
              <ListRules items={[
                "Seguridad con escaleras y la regla de dos personas (Sección 2).",
                "Técnica correcta de levantamiento y límites de peso (Sección 5).",
                "Prevención de resbalones, tropiezos y caídas, incluidos los protocolos de trapeado (Sección 6).",
                "Seguridad con químicos, dilución y revisión de SDS (Sección 7).",
                "Operación de los equipos asignados (Sección 8).",
                "Selección, uso y limitaciones del EPP (Sección 4).",
                "Procedimientos de emergencia y reporte de incidentes (Sección 3).",
              ]} />
              <p><strong>Deber de rechazar.</strong> Los miembros del Personal se comprometen a reportar de inmediato a Miguel Garcia cualquier tarea o condición para la cual NO hayan sido capacitados, y a <strong>negarse a realizar dicho trabajo hasta que se les proporcione la capacitación adecuada</strong>. Este deber aplica sin importar la presión del cliente, la presión de plazos o las instrucciones de cualquier persona ajena a GreenPoint.</p>
              <p><strong>Realizar trabajo sin capacitación sin plantear el problema renuncia a cualquier reclamo de que la capacitación fue insuficiente.</strong> Al firmar esta Política, el miembro del Personal afirma que cualquier trabajo realizado sin objeción previa estaba dentro del alcance de su capacitación, o era una tarea que debió haber rechazado conforme a esta sección.</p>
            </Section>

            <Section number="19" title="Cumplimiento del EPP y Cláusula de Pérdida de Beneficios" flagged criticalLabel="Crítico">
              <CalloutBox>No usar el EPP es una de las principales causas de lesiones prevenibles en la industria de la limpieza. Úselo cada vez, en cada tarea.</CalloutBox>
              <p>La Compañía proporciona todo el EPP requerido sin costo. Negarse a usar, quitarse o hacer mal uso intencional del EPP proporcionado durante el desempeño de las funciones de trabajo es una violación deliberada de la política de la Compañía.</p>
              <p>Las consecuencias de no usar el EPP pueden incluir:</p>
              <ListRules items={[
                "Negación de reclamos de compensación laboral relacionados, en la medida permitida por la ley de Nueva York.",
                "Medidas disciplinarias, incluyendo el despido inmediato.",
                "Responsabilidad personal por cualquier lesión propia o a terceros ocasionada por no usar el EPP.",
                "Pérdida de cualquier beneficio complementario por lesiones proporcionado por la Compañía más allá de la compensación laboral legal.",
              ]} />
              <p>Si el EPP está dañado, falta o es inadecuado para una tarea, el miembro del Personal debe <strong>detener el trabajo de inmediato y contactar a Miguel Garcia</strong> para su reemplazo. Trabajar sin el EPP adecuado por inconveniencia, presión de tiempo o preferencia personal nunca es aceptable.</p>
            </Section>

            <Section number="20" title="Conducta Excluida — Juegos Bruscos, Mala Conducta, Intoxicación" flagged criticalLabel="Crítico">
              <p>Conforme a las Secciones 10(1) y 10(3) de la Ley de Compensación Laboral de Nueva York, los beneficios de compensación laboral pueden negarse por lesiones resultantes de ciertas categorías de conducta excluida. Lo siguiente está <strong>estrictamente prohibido</strong> y cualquier lesión resultante de ello se reportará como conducta potencialmente excluida:</p>
              <ListRules items={[
                "Juegos bruscos, bromas pesadas o actividad física no relacionada con el trabajo durante las horas laborales.",
                "Peleas o altercados físicos con compañeros, clientes o miembros del público.",
                "Trabajar bajo la influencia de alcohol, cannabis, drogas ilegales o medicamentos recetados que causen deterioro, sin conocimiento de la Compañía.",
                "Violación intencional, imprudente o deliberada de cualquier regla de seguridad de esta Política.",
                "Lesiones autoinfligidas o sufridas al intentar dañar a otra persona.",
                "Lesiones sufridas al cometer un delito, incluido el robo en un sitio de cliente.",
              ]} />
              <p>Al firmar esta Política, el miembro del Personal reconoce que las lesiones resultantes de conducta excluida pueden quedar sin cobertura de compensación laboral bajo la ley de Nueva York, y que dichas lesiones también son causa de despido inmediato.</p>
            </Section>

            <Section number="21" title="Alcance del Empleo y Ubicaciones Autorizadas" flagged criticalLabel="Crítico">
              <p>Los miembros del Personal deben permanecer en su sitio de cliente asignado durante las horas de trabajo y realizar únicamente las funciones asignadas por GreenPoint. Lo siguiente está fuera del alcance del empleo:</p>
              <ListRules items={[
                "Visitar lugares no autorizados durante las horas de trabajo, incluidos mandados personales, trabajos por fuera o visitas a amigos/familiares.",
                "Realizar trabajo para cualquier parte que no sea GreenPoint mientras está en el reloj.",
                "Desviarse de las rutas asignadas al conducir vehículos de la Compañía entre asignaciones.",
                "Llevar el trabajo a un lugar no autorizado (por ejemplo, llevarse equipo de la Compañía a casa sin autorización).",
                "Realizar tareas que no estén en la lista de limpieza asignada o en la Declaración de Trabajo sin aprobación del supervisor.",
              ]} />
              <p><strong>Las lesiones sufridas en un lugar no autorizado, durante mandados personales en horas de trabajo, o mientras se realizan actividades fuera del alcance de las funciones asignadas no están dentro del curso y alcance del empleo</strong> y pueden no estar cubiertas por la compensación laboral de la Compañía. Al firmar esta Política, el miembro del Personal reconoce esta limitación.</p>
            </Section>

            <Section number="22" title="Cooperación Posterior a Incidentes e Investigación" flagged criticalLabel="Crítico">
              <p>Después de cualquier incidente reportado, el miembro del Personal se compromete a cooperar plenamente con todas las investigaciones de la Compañía y del seguro, incluyendo:</p>
              <ListRules items={[
                "Proporcionar una declaración escrita describiendo el incidente con sus propias palabras dentro de siete (7) días.",
                "Identificar y proporcionar información de contacto de cualquier testigo.",
                "Someterse a pruebas de drogas y alcohol posteriores al incidente cuando corresponda conforme a la Sección 13 (Política de Drogas y Alcohol).",
                "Preservar cualquier evidencia física (ropa, equipo, herramientas, empaques) relacionada con el incidente.",
                "Cooperar con recorridos del sitio, documentación en foto/video y reconstrucciones según se solicite.",
                "Asistir a todas las citas médicas requeridas, exámenes médicos independientes (IME) y declaraciones juradas (deposiciones).",
                "Proporcionar acceso a los registros médicos relevantes relacionados con la lesión.",
              ]} />
              <p><strong>No cooperar con la investigación posterior al incidente puede resultar en (a) la negación o suspensión de los beneficios de compensación laboral en la medida permitida por la ley, y (b) medidas disciplinarias, incluyendo el despido.</strong> Los derechos de investigación de la Compañía son independientes de cualquier proceso penal o civil.</p>
            </Section>

            <Section number="23" title="Trabajo Liviano y Regreso al Trabajo" flagged criticalLabel="Crítico">
              <p>Si un miembro del Personal recibe autorización médica para trabajo liviano, funciones modificadas o trabajo alternativo después de una lesión, la Compañía puede ofrecer trabajo alternativo razonable consistente con las restricciones médicas.</p>
              <p>El miembro del Personal se compromete a:</p>
              <ListRules items={[
                "Proporcionar documentación médica completa de autorización que especifique cualquier restricción.",
                "Aceptar el trabajo alternativo razonable ofrecido por la Compañía que esté dentro de las restricciones médicas.",
                "Comunicar con prontitud a Miguel Garcia cualquier cambio en su estado médico.",
                "Cooperar con el programa de regreso al trabajo de la Compañía, incluidos los controles o evaluaciones de progreso requeridos.",
              ]} />
              <p><strong>Rechazar el trabajo alternativo razonable</strong> ofrecido por la Compañía que esté dentro de las restricciones médicas documentadas del miembro del Personal <strong>puede resultar en la suspensión de beneficios salariales complementarios en la medida permitida por la Sección 15(7) de la Ley de Compensación Laboral de Nueva York.</strong> La Compañía trabajará de buena fe para encontrar trabajo alternativo adecuado, pero no está obligada a crear un puesto que de otro modo no exista.</p>
            </Section>

            <Section number="24" title="Responsabilidad Compartida de Seguridad y Negligencia Comparativa" flagged criticalLabel="Crítico">
              <p>La seguridad en el trabajo es una <strong>responsabilidad compartida</strong> entre la Compañía y cada miembro del Personal. Al aceptar empleo con GreenPoint y continuar realizando trabajo, el miembro del Personal reconoce que:</p>
              <ListRules items={[
                "Las reglas de seguridad de esta Política existen para la protección del propio miembro del Personal.",
                "El miembro del Personal tiene el deber personal de seguir todas las reglas de seguridad en todo momento, sin importar la presión del cliente, la presión de plazos o la inconveniencia percibida.",
                "El miembro del Personal tiene el deber de rechazar trabajo inseguro y de reportar de inmediato a Miguel Garcia las condiciones inseguras, los equipos defectuosos o los peligros de seguridad.",
                "El miembro del Personal tiene el deber de pedir aclaración o capacitación cuando no esté seguro de cómo realizar una tarea de manera segura.",
                "Las violaciones conscientes de las reglas de seguridad contribuyen a cualquier lesión resultante en la medida de dichas violaciones.",
              ]} />
              <p>El miembro del Personal además acepta que, en la máxima medida permitida por la ley de Nueva York, la doctrina de <strong>negligencia comparativa</strong> aplicará a cualquier reclamo contra la Compañía derivado de una lesión laboral, y que cualquier indemnización otorgada se reducirá en proporción a la contribución del propio miembro del Personal a la lesión por violación de esta Política.</p>
              <p><em>Nota: Esta sección no renuncia a los derechos del miembro del Personal bajo la Ley de Compensación Laboral de Nueva York, que es el remedio exclusivo para la mayoría de las lesiones laborales. Aplica a los reclamos que queden fuera de la exclusividad de la compensación laboral.</em></p>
            </Section>

            <Section number="25" title="Reconocimiento y Aceptación">
              <p>Al firmar abajo — o al continuar realizando trabajo para GreenPoint después de recibir esta política — usted reconoce que ha recibido, leído, entendido y aceptado cumplir con esta Política de Conducta y Seguridad del Personal <strong>en su totalidad</strong>, incluyendo específicamente:</p>
              <ListRules items={[
                "Sección 2 — Regla de Dos Personas para Seguridad con Escaleras.",
                "Sección 3 — Reporte de Lesiones (política de la Compañía de mismo día + máximo legal de 30 días en NY).",
                "Sección 5 — Límites de Levantamiento, Empuje y Jalado (50 lb solo / bolsa de basura de 40 lb).",
                "Sección 6 — Prevención de Resbalones/Tropiezos/Caídas y Reglas de Trapeado.",
                "Sección 9 — Política de Teléfonos y Dispositivos Personales.",
                "Secciones 16-24 — Trabajo Fuera del Reloj, Condiciones Preexistentes, Reconocimiento de Capacitación, Cumplimiento del EPP, Conducta Excluida, Alcance del Empleo, Cooperación Posterior a Incidentes, Trabajo Liviano y Responsabilidad Compartida de Seguridad.",
              ]} />
              <p>Usted además reconoce que ha tenido la oportunidad de hacer preguntas sobre cualquier disposición de esta Política y que entiende las consecuencias de violarla.</p>

              <div style={{
                marginTop: 24, padding: 28, background: '#f5f7f5', borderRadius: 10,
                border: '1px dashed #c7d4c9',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 14 }} className="ack-grid">
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Nombre del miembro del Personal (letra de molde)</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Fecha</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Firma</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Firma del supervisor</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                </div>
              </div>
            </Section>

            <div style={{
              marginTop: 48, padding: '32px 24px', background: 'linear-gradient(135deg, #0d2818, #1a4d2e)',
              borderRadius: 12, textAlign: 'center', color: '#fff',
            }}>
              <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>
                ¿Preguntas o dudas sobre esta política?
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Contacte a Miguel Garcia en <a href="mailto:info@greenpointms.com" style={{ color: '#C8A34D', fontWeight: 600 }}>info@greenpointms.com</a> o al <a href="tel:+13473329348" style={{ color: '#C8A34D', fontWeight: 600 }}>347-332-9348</a>
              </p>
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />

      <style>{`
        @media print {
          header, footer { display: none !important; }
          main { padding-top: 0 !important; background: #fff !important; }
          section { padding: 0 !important; background: #fff !important; }
        }
        @media (max-width: 600px) {
          .ack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
