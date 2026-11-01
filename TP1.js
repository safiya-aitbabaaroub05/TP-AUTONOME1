if (produitsDisponibles.length === 0) {
  console.log("Aucun produit disponible.");
} else {
  const produitMoinsCher = produitsDisponibles.reduce((moinsCher, produit) =>
    produit.prix < moinsCher.prix ? produit : moinsCher
  );

  console.log(
    "Produit disponible le moins cher :",
    produitMoinsCher.nom,
    "-",
    produitMoinsCher.prix,
    "MAD"
  );
}
