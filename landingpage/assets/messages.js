/**
 * CAIO-Institut Message-Match — Botschafts-Schlüssel (Freigabe Dennis 21.11.2026)
 * Standard: Abschnitt 7 des Briefings v3 (BRIEFING_CAIO_Message-Match.md)
 *
 * Aufbau: window.CAIO_MESSAGES[<lp>][<schlüssel>] = { h1Pre, h1Em, h1Post, sub }
 * lp = "a" (Du-Anrede, Einzelpersonen) | "b" (Sie-Anrede, Geschäftsführung)
 * Auslöser: ?ad=<schlüssel> (QA) oder ?utm_content=<Meta-{{ad.name}}>
 * Namensschema der Anzeigen: CAIO26_<A|B><Nr>_<schlüssel>_v<Version>
 */
window.CAIO_MESSAGES = {
  a: {
    sichtbar: {
      h1Pre: 'Gute Prompts sieht niemand. ', h1Em: 'Fünf unterschriebene Dokumente', h1Post: ' schon.',
      sub: 'Das CAIO-Handbuch zeigt dir in 30 Tagen, wie du deine KI-Ergebnisse messbar, datiert und unterschrieben vorlegst. 85 Seiten, integriertes Workbook.'
    },
    ohnetechnik: {
      h1Pre: 'KI-Verantwortung übernehmen, ', h1Em: 'ohne Technik-Studium und ohne Code.', h1Post: '',
      sub: 'Die Rolle braucht Urteil, Kommunikation und Dokumentation. Das Handbuch zeigt den Weg in 30 Tagen, mit fünf Vorlagen im Workbook.'
    },
    gehalt: {
      h1Pre: 'Eine Rolle, die real ist ', h1Em: 'und bezahlt wird.', h1Post: '',
      sub: 'Laut Kienbaum (02/2025) liegt eine CAIO-Rolle im Mittelstand bei 90.000–130.000 € im Jahr. Das Handbuch zeigt dir den ersten Schritt dorthin.'
    },
    aufstieg: {
      h1Pre: 'Vom KI-Nutzer zum ', h1Em: 'Ansprechpartner für KI', h1Post: ' im Unternehmen.',
      sub: 'Mit den ersten zehn Gesprächen als Vorlage: Chefin, Team, Anbieter, Betriebsrat. 85 Seiten, 18 Kapitel, 8 Praxis-Anhänge.'
    },
    foerderung: {
      h1Pre: 'Das Handbuch für 17,50 €. ', h1Em: 'Die Ausbildung danach ist förderfähig.', h1Post: '',
      sub: 'Stufe 1 zum Beispiel über das KOMPASS-Programm für Solo-Selbständige mit bis zu 90 %. Welcher Weg für dich passt, klären wir im Erstgespräch.'
    }
  },
  b: {
    nachweis: {
      h1Pre: 'Wer KI einsetzt, muss die KI-Kompetenz seines Teams fördern. ', h1Em: 'Dieses Handbuch macht daraus Ihren Nachweis.', h1Post: '',
      sub: 'Art. 4 AI Act gilt seit Februar 2025. Der Fahrplan für Geschäftsführung und Verantwortliche: 25 Nutzenfälle, Reifegrad-Check, 20 Kennzahlen, integriertes Workbook.'
    },
    verantwortung: {
      h1Pre: 'Jemand muss KI in Ihrem Unternehmen verantworten. ', h1Em: 'In 30 Tagen ist klar, wer und wie.', h1Post: '',
      sub: 'Mit Richtlinie, Werkzeug-Prüfung und Kennzahlen als Vorlage. Ohne Technik-Studium, ohne Code.'
    },
    betriebsrat: {
      h1Pre: 'KI einführen mit Betriebsrat, Team und Datenschutz: ', h1Em: 'die ersten zehn Gespräche als Vorlage.', h1Post: '',
      sub: 'Dazu EU AI Act und DSGVO verständlich aufbereitet. 85 Seiten, 8 Praxis-Anhänge.'
    },
    reifegrad: {
      h1Pre: 'Wo steht Ihr Unternehmen bei KI? ', h1Em: 'Reifegrad-Check für sieben Bereiche.', h1Post: '',
      sub: 'Mit 20 Messgrößen aus der Kennzahlen-Bibliothek und 25 Nutzenfällen zum direkten Abgleich.'
    },
    foerderung: {
      h1Pre: 'Das Handbuch für 17,50 €. ', h1Em: 'Die Qualifizierung danach ist förderfähig.', h1Post: '',
      sub: 'Je nach Weg mit 30 bis 100 %, etwa über INQA-Coaching, BAFA-Beratungsförderung oder regionale Programme. Welcher Weg für Ihr Unternehmen passt, klären wir im Erstgespräch.'
    }
  }
};
