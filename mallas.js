const materias = {
  audiovisual: [
    { id: "estetica", nombre: "Estética", semestre: 1 },
    { id: "expresion", nombre: "Expresión Escrita", semestre: 1 },
    { id: "foto1", nombre: "Fotografía", semestre: 1 },
    { id: "derecho", nombre: "Fund. de Derecho", semestre: 1 },
    { id: "intro_com", nombre: "Intro. a la Cción.", semestre: 1 },
    { id: "lectura1", nombre: "Lectura y Escritura I", semestre: 1 },
    { id: "grafico1", nombre: "Taller Gráfico I", semestre: 1 },
    { id: "ciencia", nombre: "Ciencia y Libertad", semestre: 2 },
    { id: "foto2", nombre: "Fotografía II", semestre: 2, prerequisitos: ["foto1"] },
    { id: "herr1", nombre: "Herramientas I", semestre: 2 },
    { id: "cine1", nombre: "Historia del Cine I", semestre: 2 },
    { id: "lectura2", nombre: "Lectura y Escritura II", semestre: 2, prerequisitos: ["lectura1"] },
    { id: "narrativa", nombre: "Taller Narrativa", semestre: 2, prerequisitos: ["retorica"] },
    { id: "teorias", nombre: "Teorías de la Comunicación", semestre: 2 },
    { id: "deporte", nombre: "Act. Deportiva", semestre: 3 },
    { id: "publicos", nombre: "Análisis de Públicos", semestre: 3, prerequisitos: ["intro_com"] },
    { id: "foto3", nombre: "Fotografía III", semestre: 3, prerequisitos: ["foto2"] },
    { id: "guion1", nombre: "Guión I", semestre: 3 },
    { id: "cine2", nombre: "Historia del Cine II", semestre: 3, prerequisitos: ["cine1"] },
    { id: "radio", nombre: "Radio", semestre: 3 },
    { id: "lectura3", nombre: "Lectura y Escritura III", semestre: 3, prerequisitos: ["lectura2"] },
    { id: "antro", nombre: "Antropología", semestre: 4 },
    { id: "guion2", nombre: "Guión II", semestre: 4, prerequisitos: ["guion1"] },
    { id: "herr2", nombre: "Herramientas II", semestre: 4, prerequisitos: ["herr1"] },
    { id: "libre1", nombre: "Libre Elección I", semestre: 4 },
    { id: "lit1", nombre: "Literatura I", semestre: 4 },
    { id: "psico", nombre: "Psicología Org.", semestre: 4 },
    { id: "tv", nombre: "Televisión", semestre: 4, prerequisitos: ["narrativa"] },
    { id: "digital", nombre: "Comunicación Digital", semestre: 5 },
    { id: "guion3", nombre: "Guión III", semestre: 5, prerequisitos: ["guion2"] },
    { id: "herr3", nombre: "Herramientas III", semestre: 5, prerequisitos: ["herr2"] },
    { id: "real_tv", nombre: "Realización TV", semestre: 5, prerequisitos: ["narrativa"] },
    { id: "libre2", nombre: "Libre Elección II", semestre: 5 },
    { id: "retorica", nombre: "Retórica y Arg.", semestre: 5 },
    { id: "socio", nombre: "Sociología Org.", semestre: 5 },
    { id: "gestion", nombre: "Gestión de la Cción.", semestre: 6, prerequisitos: ["publicos"] },
    { id: "guion4", nombre: "Guión IV", semestre: 6, prerequisitos: ["guion3"] },
    { id: "planvar", nombre: "Plan Variable", semestre: 6, prerequisitos: ["real_tv"] },
    { id: "libre3", nombre: "Libre Elección III", semestre: 6 },
    { id: "cuanti", nombre: "Métodos Cuantitativos", semestre: 6 },
    { id: "semio", nombre: "Semiótica", semestre: 6 },
    { id: "sonido1", nombre: "Sonido I", semestre: 6, prerequisitos: ["real_tv"] },
    { id: "musical", nombre: "Apreciación Musical", semestre: 7 },
    { id: "docu", nombre: "Documental", semestre: 7, prerequisitos: ["planvar"] },
    { id: "linea1", nombre: "Línea de Énfasis I", semestre: 7 },
    { id: "metod", nombre: "Metodología Invest.", semestre: 7 },
    { id: "produccion", nombre: "Producción Ejecutiva", semestre: 7, prerequisitos: ["docu"] },
    { id: "histgeo", nombre: "Hist. y Geografía", semestre: 7 },
    { id: "sonido2", nombre: "Sonido II", semestre: 7, prerequisitos: ["sonido1"] },
    { id: "geopol", nombre: "Geopolítica", semestre: 8 },
    { id: "herr4", nombre: "Herramientas IV", semestre: 8, prerequisitos: ["herr3"] },
    { id: "histarte", nombre: "Historia del Arte", semestre: 8 },
    { id: "legis", nombre: "Legislación Comunicación", semestre: 8 },
    { id: "linea2", nombre: "Línea de Énfasis II", semestre: 8, prerequisitos: ["linea1"] },
    { id: "lit2", nombre: "Literatura II", semestre: 8, prerequisitos: ["lit1"] },
    { id: "plancom", nombre: "Plan de Comunicación", semestre: 8 },
    { id: "actores", nombre: "Dirección de Actores", semestre: 9 },
    { id: "arte", nombre: "Dirección de Arte", semestre: 9 },
    { id: "etica", nombre: "Ética", semestre: 9 },
    { id: "herr5", nombre: "Herramientas V", semestre: 9, prerequisitos: ["herr4"] },
    { id: "argumental", nombre: "Audiovisual IV: Argumental", semestre: 9, prerequisitos: ["docu"] },
    { id: "linea3", nombre: "Línea de Énfasis III", semestre: 9, prerequisitos: ["linea2"] },
    { id: "ciencia_soc", nombre: "Ciencia y Sociedad", semestre: 9 },
    { id: "proyecto", nombre: "Práctica/Grado", semestre: 10, prerequisitos: ["linea3"] }
  ],
  grafica: [
    { id: "estetica_g", nombre: "Estética", semestre: 1 },
    { id: "expresion_g", nombre: "Expresión Escrita", semestre: 1 },
    { id: "foto1_g", nombre: "Fotografía", semestre: 1 },
    { id: "derecho_g", nombre: "Fund. de Derecho", semestre: 1 },
    { id: "intro_com_g", nombre: "Intro. a la Cción.", semestre: 1 },
    { id: "lectura1_g", nombre: "Lectura y Escritura I", semestre: 1 },
    { id: "grafico1_g", nombre: "Taller Gráfico I", semestre: 1 },
    { id: "ciencia_g", nombre: "Ciencia y Libertad", semestre: 2 },
    { id: "escuelas", nombre: "Escuelas de Diseño", semestre: 2 },
    { id: "herr1_g", nombre: "Herramientas I", semestre: 2 },
    { id: "lectura2_g", nombre: "Lectura y Escritura II", semestre: 2, prerequisitos: ["lectura1_g"] },
    { id: "narrativa_g", nombre: "Taller Narrativa Audiovisual", semestre: 2, prerequisitos: ["retorica_g"] },
    { id: "teorias_g", nombre: "Teorías de la Comunicación", semestre: 2 },
    { id: "grafico2_g", nombre: "Taller Gráfico II", semestre: 2, prerequisitos: ["grafico1_g"] },
    { id: "publicos_g", nombre: "Análisis de Públicos", semestre: 3, prerequisitos: ["intro_com_g"] },
    { id: "fotodisenio", nombre: "Fotodiseño y Publicidad", semestre: 3, prerequisitos: ["foto1_g"] },
    { id: "herr2_g", nombre: "Herramientas II", semestre: 3, prerequisitos: ["herr1_g"] },
    { id: "grafico3_g", nombre: "Taller Gráfico III", semestre: 3, prerequisitos: ["grafico2_g"] },
    { id: "radio_g", nombre: "Radio", semestre: 3 },
    { id: "lectura3_g", nombre: "Lectura y Escritura III", semestre: 3, prerequisitos: ["lectura2_g"] },
    { id: "antro_g", nombre: "Antropología Cultural", semestre: 4 },
    { id: "apreciacion", nombre: "Apreciación Cinematográfica", semestre: 4 },
    { id: "herr3_g", nombre: "Herramientas III", semestre: 4, prerequisitos: ["herr2_g"] },
    { id: "libre1_g", nombre: "Libre Elección I", semestre: 4 },
    { id: "psico_g", nombre: "Psicología Org.", semestre: 4 },
    { id: "tv_g", nombre: "Televisión", semestre: 4 },
    { id: "grafico4_g", nombre: "Taller Gráfico IV", semestre: 4, prerequisitos: ["grafico3_g"] },
    { id: "digital_g", nombre: "Comunicación Digital", semestre: 5 },
    { id: "espacios", nombre: "Espacios Públicos", semestre: 5 },
    { id: "herr4_g", nombre: "Herramientas IV", semestre: 5, prerequisitos: ["herr3_g"] },
    { id: "libre2_g", nombre: "Libre Elección II", semestre: 5 },
    { id: "retorica_g", nombre: "Retórica y Arg.", semestre: 5 },
    { id: "socio_g", nombre: "Sociología Org.", semestre: 5 },
    { id: "grafico5_g", nombre: "Taller Gráfico V", semestre: 5, prerequisitos: ["grafico4_g"] },
    { id: "gestion_g", nombre: "Gestión de la Comunicación", semestre: 6, prerequisitos: ["publicos_g"] },
    { id: "herr5_g", nombre: "Herramientas V", semestre: 6, prerequisitos: ["herr4_g"] },
    { id: "libre3_g", nombre: "Libre Elección III", semestre: 6 },
    { id: "cuanti_g", nombre: "Métodos Cuantitativos", semestre: 6 },
    { id: "planvar1_g", nombre: "Plan Variable Gráfico I", semestre: 6, prerequisitos: ["foto1_g", "grafico4_g"] },
    { id: "semio_g", nombre: "Semiótica", semestre: 6 },
    { id: "grafico6_g", nombre: "Taller Gráfico VI", semestre: 6, prerequisitos: ["grafico5_g"] },
    { id: "herr6_g", nombre: "Herramientas VI", semestre: 7, prerequisitos: ["herr5_g"] },
    { id: "linea1_g", nombre: "Línea de Énfasis I", semestre: 7 },
    { id: "mercadeo", nombre: "Mercadeo", semestre: 7 },
    { id: "metod_g", nombre: "Metodología Investigación", semestre: 7 },
    { id: "planvar2_g", nombre: "Plan Variable Gráfico II", semestre: 7, prerequisitos: ["planvar1_g"] },
    { id: "histgeo_g", nombre: "Hist. y Geografía", semestre: 7 },
    { id: "grafico7_g", nombre: "Taller Gráfico VII", semestre: 7, prerequisitos: ["grafico6_g"] },
    { id: "geopol_g", nombre: "Geopolítica", semestre: 8 },
    { id: "finanzas", nombre: "Gestión Financiera", semestre: 8 },
    { id: "legis_g", nombre: "Legislación Comunicación", semestre: 8 },
    { id: "linea2_g", nombre: "Línea de Énfasis II", semestre: 8, prerequisitos: ["linea1_g"] },
    { id: "marca", nombre: "Marca Personal", semestre: 8 },
    { id: "plancom_g", nombre: "Plan de Comunicación", semestre: 8 },
    { id: "grafico8_g", nombre: "Taller Gráfico VIII", semestre: 8, prerequisitos: ["grafico7_g"] },
    { id: "medios", nombre: "Administración de Medios", semestre: 9 },
    { id: "transmedia", nombre: "Contenidos Transmedia", semestre: 9 },
    { id: "emprende", nombre: "Emprendimiento e Innovación", semestre: 9 },
    { id: "etica_g", nombre: "Ética", semestre: 9 },
    { id: "linea3_g", nombre: "Línea de Énfasis III", semestre: 9, prerequisitos: ["linea2_g"] },
    { id: "ciencia_soc_g", nombre: "Ciencia y Sociedad", semestre: 9 },
    { id: "grafico9_g", nombre: "Taller Gráfico IX", semestre: 9, prerequisitos: ["grafico8_g"] },
    { id: "proyecto_g", nombre: "Práctica/Grado", semestre: 10, prerequisitos: ["linea3_g"] }
  ]
};


