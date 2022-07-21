export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
}

export const goToHomePage = (navigate) => {
  navigate("/");
}

export const goDetailsPage = (navigate, id) => {
  navigate(`/details/${id}`);
}
export const goBack = (navigate) => {
  navigate(-1)
}