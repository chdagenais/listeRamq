const COL_FORMAT = {
    code_facturation: {
        columnPosition: 1,
        size: 8
    },
    date_debut_effectivite: {
        columnPosition: 9,
        size: 6
    },
    date_fin_effectivite: {
        columnPosition: 15,
        size: 6
    },
    date_mise_en_production: {
        columnPosition: 21,
        size: 6
    },
    indicateur_changement: {
        columnPosition: 27,
        size: 1
    },
    ancien_code_din: {
        columnPosition: 28,
        size: 8
    },
    classe_ahf_1: {
        columnPosition: 36,
        size: 6
    },
    classe_ahf_2: {
        columnPosition: 42,
        size: 6
    },
    code_denomination_commune:{
      columnPosition:48,
      size:5
    },
    code_forme: {
      columnPosition: 53,
      size: 5
  },
  code_teneur: {
      columnPosition: 58,
      size: 5
  },
  denomination_commune: {
      columnPosition: 63,
      size: 150
  },
  forme: {
      columnPosition: 213,
      size: 18
  },
  teneur: {
      columnPosition: 231,
      size: 36
  },
  marque_de_commerce: {
      columnPosition: 267,
      size: 24
  },
  fabriquant: {
      columnPosition: 291,
      size: 10
  },
  categorie_medicament: {
      columnPosition: 301,
      size: 3
  },
  nature_medicament: {
      columnPosition: 304,
      size: 3
  },
  indicateur_produit_unique: {
      columnPosition: 307,
      size:1
  },
  categorie_beneficiaire: {
      columnPosition: 308,
      size: 3
  },
  code_sexe: {
      columnPosition: 311,
      size: 1
  },
  codes_programmes: {
      columnPosition: 312,
      size: 40
  },
  pvg: {
      columnPosition: 352,
      size: 4
  },
  element_remplissage: {
      columnPosition: 356,
      size: 11
  },
  unite_des_formats: {
      columnPosition: 367,
      size: 2
  },
  indicateur_format_DMEP: {
    columnPosition: 369,
    size: 1
  },
  groupe_formats: {
    columnPosition: 370,
    size: 300
  },
  };
  module.exports.COL_FORMAT = COL_FORMAT;


  const FORMAT_FORMAT = {
    indicateur_format: {
        columnPosition: 1,
        size: 1
    },
    quantite_format: {
        columnPosition: 2,
        size: 5
    },
    prix_format: {
        columnPosition: 7,
        size: 7
    },
    prix_unitaire: {
        columnPosition: 14,
        size: 9
    },
    ppb_unitaire: {
        columnPosition: 23,
        size: 9
    },
    pmp_unitaire: {
        columnPosition: 32,
        size: 9
    },
    indicateur_indivisibilite: {
        columnPosition: 41,
        size: 1
    },
    statut_assurabilite: {
        columnPosition: 42,
        size: 2
    },
    raison_assurabilite: {
        columnPosition: 44,
        size: 2
    },
    marge_maximum_grossiste: {
        columnPosition: 46,
        size: 1
    },
  };
  module.exports.FORMAT_FORMAT = FORMAT_FORMAT;
