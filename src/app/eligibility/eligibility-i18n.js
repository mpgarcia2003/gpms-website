// eligibility-i18n.js — EN/ES strings for the GreenPoint Eligibility intake.
// Mirrors careers-i18n.js: submitted values are ALWAYS the English canonical
// `value`; only the on-screen label changes by language, so Supabase data
// stays consistent regardless of the language used.
//
// LEGAL NOTE: The acknowledgments (ACKS) are legally operative consent.
// The Spanish is provided for comprehension only; the English version
// prevails in case of conflict (see disclaimer). Have the Spanish — and the
// plain-language consent wording itself — reviewed by counsel before relying
// on it. The official signed state forms (TRS-52, JC CBC 4, LDSS-3370) are
// completed/signed in person at fingerprinting; this intake captures the data
// and a consent record.

// ---- Option lists (canonical English value + bilingual labels) ----
export const SEX = [
  { value: "Male", en: "Male", es: "Masculino" },
  { value: "Female", en: "Female", es: "Femenino" },
  { value: "X", en: "X / Non-binary", es: "X / No binario" },
];

export const EYE_COLORS = [
  { value: "Black", en: "Black", es: "Negro" },
  { value: "Blue", en: "Blue", es: "Azul" },
  { value: "Brown", en: "Brown", es: "Marrón" },
  { value: "Gray", en: "Gray", es: "Gris" },
  { value: "Green", en: "Green", es: "Verde" },
  { value: "Hazel", en: "Hazel", es: "Avellana" },
  { value: "Maroon", en: "Maroon", es: "Granate" },
  { value: "Multicolored", en: "Multicolored", es: "Multicolor" },
  { value: "Pink", en: "Pink", es: "Rosa" },
  { value: "Unknown", en: "Unknown", es: "Desconocido" },
];

export const HAIR_COLORS = [
  { value: "Bald", en: "Bald", es: "Calvo" },
  { value: "Black", en: "Black", es: "Negro" },
  { value: "Blond or Strawberry", en: "Blond / Strawberry", es: "Rubio / Rojizo claro" },
  { value: "Brown", en: "Brown", es: "Castaño" },
  { value: "Gray", en: "Gray", es: "Gris" },
  { value: "Red or Auburn", en: "Red / Auburn", es: "Rojo / Caoba" },
  { value: "Sandy", en: "Sandy", es: "Arena" },
  { value: "White", en: "White", es: "Blanco" },
  { value: "Unknown", en: "Unknown", es: "Desconocido" },
];

export const RACE = [
  { value: "American Indian or Alaska Native", en: "American Indian or Alaska Native", es: "Indígena Americano o Nativo de Alaska" },
  { value: "Asian", en: "Asian", es: "Asiático" },
  { value: "Black or African American", en: "Black or African American", es: "Negro o Afroamericano" },
  { value: "Native Hawaiian or Pacific Islander", en: "Native Hawaiian or Pacific Islander", es: "Nativo de Hawái o de las Islas del Pacífico" },
  { value: "White", en: "White", es: "Blanco" },
  { value: "Two or More Races", en: "Two or More Races", es: "Dos o Más Razas" },
  { value: "Unknown", en: "Unknown / Decline", es: "Desconocido / Prefiero no decir" },
];

export const ETHNICITY = [
  { value: "Hispanic or Latino", en: "Hispanic or Latino", es: "Hispano o Latino" },
  { value: "Not Hispanic or Latino", en: "Not Hispanic or Latino", es: "No Hispano o Latino" },
  { value: "Decline to answer", en: "Decline to answer", es: "Prefiero no responder" },
];

export const CONVICTION = [
  { value: "none", en: "I have NOT been convicted of a crime.", es: "NO he sido condenado/a por un delito." },
  { value: "convicted", en: "I have been convicted of a crime in New York State or any other jurisdiction.", es: "He sido condenado/a por un delito en el Estado de Nueva York o en cualquier otra jurisdicción." },
  { value: "pending", en: "I have pending arrest charges.", es: "Tengo cargos de arresto pendientes." },
];

// Vaccination options (shared structure for flu + COVID). Value 'greenpoint'
// corresponds to "received it through a GreenPoint-arranged provider / CityMD".
export const VAX_OPTIONS = [
  { value: "provider", en: "I received it from my own health care provider.", es: "La recibí de mi propio proveedor de atención médica." },
  { value: "greenpoint", en: "I received it through a GreenPoint-arranged provider or CityMD.", es: "La recibí a través de un proveedor coordinado por GreenPoint o CityMD." },
  { value: "exemption", en: "I have an exemption (DOH-4482 — I will bring it in person). I understand I must still wear PPE.", es: "Tengo una exención (DOH-4482 — la traeré en persona). Entiendo que aún debo usar EPP." },
  { value: "refuse", en: "I decline the vaccination. I understand I must wear a surgical mask while providing services.", es: "Rechazo la vacuna. Entiendo que debo usar una mascarilla quirúrgica al prestar servicios." },
];

// ---- The six legally operative acknowledgments (e-signed by checkbox) ----
// `key` values match the `signatures` jsonb keys in the Supabase table.
export const ACKS = [
  { key: "fingerprint_notice",
    en: "I acknowledge that the law requires GreenPoint and its affiliated facilities to request a criminal history check from the NYS Division of Criminal Justice Services (DCJS), the FBI, and the Justice Center, and to review the results. Criminal history is considered under Article 23-A of the NYS Correction Law and is kept confidential and retained for six years as required by law. I understand I may request a copy of my FBI record from the FBI CJIS Division.",
    es: "Reconozco que la ley exige que GreenPoint y sus instalaciones afiliadas soliciten una verificación de antecedentes penales a la División de Servicios de Justicia Penal de NY (DCJS), al FBI y al Justice Center, y que revisen los resultados. Los antecedentes penales se consideran bajo el Artículo 23-A de la Ley de Corrección de NY y se mantienen confidenciales y se conservan durante seis años según lo exige la ley. Entiendo que puedo solicitar una copia de mi expediente del FBI a la División CJIS del FBI." },
  { key: "trs52",
    en: "OASAS consent: I consent to having my fingerprints taken and submitted to DCJS and the FBI for a criminal history check, and I consent to OASAS sharing a summary of any NYS criminal history with GreenPoint. I understand my Social Security number is requested so GreenPoint may check the Staff Exclusion List (SEL), and that I may withdraw my application without prejudice at any time before employment is offered or declined. I affirm the fingerprints will be my own and the information I provide is true.",
    es: "Consentimiento de OASAS: Doy mi consentimiento para que se tomen mis huellas dactilares y se envíen a DCJS y al FBI para una verificación de antecedentes penales, y consiento que OASAS comparta un resumen de cualquier antecedente penal de NY con GreenPoint. Entiendo que se solicita mi número de Seguro Social para que GreenPoint pueda consultar la Lista de Exclusión de Personal (SEL), y que puedo retirar mi solicitud sin perjuicio en cualquier momento antes de que se ofrezca o rechace el empleo. Afirmo que las huellas serán las mías y que la información que proporciono es verdadera." },
  { key: "jc_cbc4",
    en: "Justice Center consent: I consent to having my fingerprints submitted to DCJS and the FBI and to the Justice Center sharing a summary of any NYS criminal history with GreenPoint as part of its review of my suitability. I understand my Social Security number is requested to check the Staff Exclusion List, that procedures exist to review and correct my criminal history information, and that I may withdraw without prejudice at any time before employment is offered or declined.",
    es: "Consentimiento del Justice Center: Doy mi consentimiento para que mis huellas dactilares se envíen a DCJS y al FBI y para que el Justice Center comparta un resumen de cualquier antecedente penal de NY con GreenPoint como parte de su revisión de mi idoneidad. Entiendo que se solicita mi número de Seguro Social para consultar la Lista de Exclusión de Personal, que existen procedimientos para revisar y corregir mi información de antecedentes penales, y que puedo retirarme sin perjuicio en cualquier momento antes de que se ofrezca o rechace el empleo." },
  { key: "scr_affirmation",
    en: "Statewide Central Register: I consent to a check of the NYS Statewide Central Register (SCR) of child abuse and maltreatment, and I affirm that all information on this form — including my address history and household members — is true to the best of my knowledge. I understand that knowingly giving false statements may be grounds for denial or dismissal from employment.",
    es: "Registro Central Estatal: Doy mi consentimiento para una verificación del Registro Central Estatal (SCR) de abuso y maltrato infantil de NY, y afirmo que toda la información en este formulario —incluyendo mi historial de direcciones y los miembros de mi hogar— es verdadera según mi leal saber y entender. Entiendo que dar declaraciones falsas a sabiendas puede ser motivo de denegación o despido del empleo." },
  { key: "flu",
    en: "Influenza attestation: I attest that the vaccination information above is accurate. If I am not vaccinated, I understand I must wear a surgical mask while providing services to patients, and that failure to do so may result in disciplinary action up to and including termination.",
    es: "Declaración sobre la influenza: Declaro que la información de vacunación anterior es exacta. Si no estoy vacunado/a, entiendo que debo usar una mascarilla quirúrgica al prestar servicios a los pacientes, y que no hacerlo puede resultar en medidas disciplinarias hasta el despido inclusive." },
  { key: "covid",
    en: "COVID attestation: I attest that the vaccination information above is accurate. If I am not vaccinated, I understand I must wear a surgical mask while providing services to patients, and that failure to do so may result in disciplinary action up to and including termination.",
    es: "Declaración sobre el COVID: Declaro que la información de vacunación anterior es exacta. Si no estoy vacunado/a, entiendo que debo usar una mascarilla quirúrgica al prestar servicios a los pacientes, y que no hacerlo puede resultar en medidas disciplinarias hasta el despido inclusive." },
];

export const T = {
  en: {
    "intro.heading": "GreenPoint Eligibility Packet",
    "intro.sub": "This packet is required for placement at GreenPoint healthcare-facility accounts. Please complete every section as accurately as possible — incomplete packets delay your start date.",
    "intro.required": "All fields marked * are required.",
    "notice.title": "Why we collect this",
    "notice.body": "New York State law requires a criminal background check (fingerprinting through DCJS, the FBI, and the Justice Center) and certain health documentation for staff at these facilities. Your information is kept confidential, used only for these checks, and retained as required by law. Sensitive answers are encrypted.",
    "sec.identity": "1. Identity & Contact",
    "sec.names": "2. Names & Aliases",
    "sec.address": "3. Home Address",
    "sec.mailing": "Mailing Address",
    "sec.history": "4. 28-Year Address History",
    "sec.citizenship": "5. Citizenship & Birth",
    "sec.physical": "6. Physical Description",
    "sec.criminal": "7. Criminal History",
    "sec.household": "8. Household Members",
    "sec.flu": "9. Influenza Vaccination (2025\u20132026)",
    "sec.covid": "10. COVID Vaccination (2025\u20132026)",
    "sec.review": "11. Review & Sign",
    "f.firstName": "First Name", "f.mi": "M.I.", "f.lastName": "Last Name",
    "f.dob": "Date of Birth", "f.ssn": "Social Security Number",
    "f.email": "Email", "f.phone": "Mobile Phone",
    "f.reprint": "Who should we contact if fingerprints need to be retaken?",
    "ph.ssn": "XXX-XX-XXXX", "ph.reprint": "Defaults to your email/phone above",
    "f.usedPrev": "Have you ever used a maiden or previous name?",
    "f.prevNames": "Previous / maiden name(s)",
    "f.usedAlias": "Have you ever used an alias?",
    "f.aliases": "Alias(es)",
    "f.street": "Street Address", "f.apt": "Apt #", "f.city": "City", "f.state": "State", "f.zip": "ZIP",
    "f.mailingSame": "Is your mailing address the same as your home address?",
    "history.intro": "List every address where you have lived for the past 28 years, with no gaps. New York State requires this, and it is the section applicants most often leave incomplete \u2014 please do not skip it.",
    "history.current": "Current address (carried over from above)",
    "history.from": "From (MM/YYYY)", "history.to": "To (MM/YYYY)",
    "history.add": "+ Add previous address",
    "f.countryBirth": "Country of Birth", "f.stateBirth": "State of Birth (if US)", "f.countryCitizenship": "Country of Citizenship",
    "f.height": "Height", "f.weight": "Weight", "f.gender": "Gender",
    "ph.height": "e.g. 5'10\"", "ph.weight": "e.g. 175 lbs",
    "f.language": "Preferred Language", "f.race": "Race", "f.ethnicity": "Ethnicity",
    "f.eye": "Eye Color", "f.hair": "Hair Color",
    "criminal.helper": "Note: You have NOT been convicted of a crime if the conviction was sealed, dismissed, reversed, resulted in a youthful offender or juvenile delinquency adjudication, was a non-criminal violation, or you were acquitted; if you received an ACD that has elapsed; or if you withdrew your plea after a treatment program and were not convicted of a felony or misdemeanor.",
    "f.criminalDetails": "Please provide details",
    "criminal.secure": "This answer is encrypted and visible only to authorized GreenPoint staff.",
    "household.intro": "List your spouse, children, and any other person living in your home now.",
    "f.noHousehold": "I have no other household members.",
    "f.relationship": "Relationship", "f.hhSex": "Sex",
    "household.add": "+ Add household member",
    "f.site": "Site / Location",
    "vax.provider": "Provider details",
    "f.vaxDate": "Date of Vaccination", "f.lot": "Lot #", "f.expiration": "Expiration Date",
    "f.providerName": "Provider Name", "f.providerAddress": "Provider Address", "f.providerPhone": "Provider Phone",
    "acks.instruction": "Read and check each box to sign.",
    "acks.allRequired": "All are required.",
    "acks.disclaimer": "This is a translation of the official English-language consent. In case of any conflict or ambiguity, the English version prevails.",
    "f.isMinor": "Is the applicant under 18 years old?",
    "f.guardianName": "Parent / Guardian full name",
    "sig.legalName": "Type your full legal name to sign", "sig.date": "Date",
    "sig.cert": "By typing my name and submitting, I certify that all information above is true and complete, and I agree to each acknowledgment I have checked.",
    "common.yes": "Yes", "common.no": "No", "opt.select": "Select...",
    "btn.submit": "Submit Packet", "btn.submitting": "Submitting...",
    "btn.secure": "Submitted securely. Sensitive data is encrypted and stored confidentially.",
    "success.title": "Packet Submitted",
    "success.body": "Thank you. GreenPoint has received your information and will contact you to schedule fingerprinting and finish onboarding.",
    "err.required": "Please complete all required fields (marked *).",
    "err.ssn": "Please enter a valid 9-digit Social Security Number.",
    "err.history": "Please complete your full address history, including From/To dates.",
    "err.criminal": "Please provide details for your criminal-history answer.",
    "err.acks": "Please read and check all acknowledgments.",
    "err.sig": "Please type your legal name and date to sign.",
    "err.failed": "Failed to submit. Please try again.",
    "err.network": "Network error. Please try again.",
  },
  es: {
    "intro.heading": "Paquete de Elegibilidad de GreenPoint",
    "intro.sub": "Este paquete es obligatorio para la colocación en cuentas de instalaciones de salud de GreenPoint. Complete cada sección con la mayor exactitud posible \u2014 los paquetes incompletos retrasan su fecha de inicio.",
    "intro.required": "Todos los campos marcados con * son obligatorios.",
    "notice.title": "Por qué recopilamos esto",
    "notice.body": "La ley del Estado de Nueva York exige una verificación de antecedentes penales (huellas dactilares a través de DCJS, el FBI y el Justice Center) y cierta documentación de salud para el personal de estas instalaciones. Su información se mantiene confidencial, se usa solo para estas verificaciones y se conserva según lo exige la ley. Las respuestas sensibles están encriptadas.",
    "sec.identity": "1. Identidad y Contacto",
    "sec.names": "2. Nombres y Alias",
    "sec.address": "3. Domicilio",
    "sec.mailing": "Dirección Postal",
    "sec.history": "4. Historial de Direcciones de 28 Años",
    "sec.citizenship": "5. Ciudadanía y Nacimiento",
    "sec.physical": "6. Descripción Física",
    "sec.criminal": "7. Antecedentes Penales",
    "sec.household": "8. Miembros del Hogar",
    "sec.flu": "9. Vacuna contra la Influenza (2025\u20132026)",
    "sec.covid": "10. Vacuna contra el COVID (2025\u20132026)",
    "sec.review": "11. Revisar y Firmar",
    "f.firstName": "Nombre", "f.mi": "Inicial", "f.lastName": "Apellido",
    "f.dob": "Fecha de Nacimiento", "f.ssn": "Número de Seguro Social",
    "f.email": "Correo Electrónico", "f.phone": "Teléfono Móvil",
    "f.reprint": "¿A quién debemos contactar si hay que repetir las huellas?",
    "ph.ssn": "XXX-XX-XXXX", "ph.reprint": "Por defecto, su correo/teléfono de arriba",
    "f.usedPrev": "¿Alguna vez ha usado un nombre de soltera o anterior?",
    "f.prevNames": "Nombre(s) anterior(es) / de soltera",
    "f.usedAlias": "¿Alguna vez ha usado un alias?",
    "f.aliases": "Alias",
    "f.street": "Dirección", "f.apt": "Apto #", "f.city": "Ciudad", "f.state": "Estado", "f.zip": "Código Postal",
    "f.mailingSame": "¿Su dirección postal es la misma que su domicilio?",
    "history.intro": "Indique todas las direcciones donde ha vivido durante los últimos 28 años, sin vacíos. El Estado de Nueva York lo exige y es la sección que los solicitantes dejan incompleta con más frecuencia \u2014 por favor no la omita.",
    "history.current": "Dirección actual (traída de arriba)",
    "history.from": "Desde (MM/AAAA)", "history.to": "Hasta (MM/AAAA)",
    "history.add": "+ Agregar dirección anterior",
    "f.countryBirth": "País de Nacimiento", "f.stateBirth": "Estado de Nacimiento (si es EE. UU.)", "f.countryCitizenship": "País de Ciudadanía",
    "f.height": "Estatura", "f.weight": "Peso", "f.gender": "Género",
    "ph.height": "ej. 5'10\"", "ph.weight": "ej. 175 lbs",
    "f.language": "Idioma Preferido", "f.race": "Raza", "f.ethnicity": "Etnia",
    "f.eye": "Color de Ojos", "f.hair": "Color de Cabello",
    "criminal.helper": "Nota: NO ha sido condenado/a por un delito si la condena fue sellada, desestimada, revocada, resultó en una adjudicación de delincuente juvenil, fue una infracción no penal o fue absuelto/a; si recibió un ACD que ya transcurrió; o si retiró su declaración tras un programa de tratamiento y no fue condenado/a por un delito grave o menor.",
    "f.criminalDetails": "Proporcione los detalles",
    "criminal.secure": "Esta respuesta está encriptada y solo es visible para el personal autorizado de GreenPoint.",
    "household.intro": "Indique su cónyuge, hijos y cualquier otra persona que viva en su hogar actualmente.",
    "f.noHousehold": "No tengo otros miembros en el hogar.",
    "f.relationship": "Parentesco", "f.hhSex": "Sexo",
    "household.add": "+ Agregar miembro del hogar",
    "f.site": "Sitio / Ubicación",
    "vax.provider": "Datos del proveedor",
    "f.vaxDate": "Fecha de Vacunación", "f.lot": "Lote #", "f.expiration": "Fecha de Vencimiento",
    "f.providerName": "Nombre del Proveedor", "f.providerAddress": "Dirección del Proveedor", "f.providerPhone": "Teléfono del Proveedor",
    "acks.instruction": "Lea y marque cada casilla para firmar.",
    "acks.allRequired": "Todas son obligatorias.",
    "acks.disclaimer": "Esta es una traducción del consentimiento oficial en inglés. En caso de cualquier conflicto o ambigüedad, prevalecerá la versión en inglés.",
    "f.isMinor": "¿El solicitante es menor de 18 años?",
    "f.guardianName": "Nombre completo del padre / tutor",
    "sig.legalName": "Escriba su nombre legal completo para firmar", "sig.date": "Fecha",
    "sig.cert": "Al escribir mi nombre y enviar, certifico que toda la información anterior es verdadera y completa, y acepto cada reconocimiento que he marcado.",
    "common.yes": "Sí", "common.no": "No", "opt.select": "Seleccionar...",
    "btn.submit": "Enviar Paquete", "btn.submitting": "Enviando...",
    "btn.secure": "Enviado de forma segura. Los datos sensibles están encriptados y almacenados confidencialmente.",
    "success.title": "Paquete Enviado",
    "success.body": "Gracias. GreenPoint ha recibido su información y se comunicará con usted para programar las huellas dactilares y finalizar la incorporación.",
    "err.required": "Complete todos los campos obligatorios (marcados con *).",
    "err.ssn": "Ingrese un Número de Seguro Social válido de 9 dígitos.",
    "err.history": "Complete su historial de direcciones, incluidas las fechas Desde/Hasta.",
    "err.criminal": "Proporcione los detalles de su respuesta sobre antecedentes penales.",
    "err.acks": "Lea y marque todos los reconocimientos.",
    "err.sig": "Escriba su nombre legal y la fecha para firmar.",
    "err.failed": "Error al enviar. Inténtelo de nuevo.",
    "err.network": "Error de red. Inténtelo de nuevo.",
  },
};

export const label = (item, lang) => item[lang] ?? item.en;
