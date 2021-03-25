import client from "./client";

export class Api {
  // LES ROUTES DOIVENT TOUS ÊTRE LE NOM DU SERVICE FEATHER JS
  // PAR EXEMPLE, POUR ACCÉDERR /USERS SUR L'API FEATHER
  // ON PASSERA USERS DANS LE CHAMP ROUTE DE LA MÉTHODE APELLÉ

  constructor() {}

  async find(route, query = {}) {
    // Permet la recherche de plusieurs éléments dans la table
    // la query sont les conditions de recherches dans la table
    // voir https://docs.feathersjs.com/api/databases/querying.html#limit
    // pour plus d'informatiions

    if (query == undefined) {
      return await client.service(route).find();
    } else {
      return await client.service(route).find(query);
    }
  }

  async get(route, id) {
    // Permet d'aller chercher l'information par ID dans la table
    // Retourne l'information pour seulement le ID recherhé

    return await client.service(route).get(id);
  }

  async create(route, datas) {
    // Création de nouvelles colonnes dans ce service --> INSERT INTO

    return await client.service(route).create(datas);
  }

  async update(route, datas) {
    // Permet la mise-à-jour d'une table --> UPDATE FROM

    return await client.service(route).update(datas);
  }

  async patch(route, datas) {
    return await client.service(route).patch(datas);
  }

  async remove(route, id) {
    // Permet de retirer des données de la BD, tel un DELETE FROM de SQL

    return await client.service(route).remove(id);
  }

  async auth(user) {
    // Le user doit être dans ce format
    // { email : 'exemple@gmail.com', password : 'mode_de_passe'

    try {
      return await client.reAuthenticate();
    } catch (error) {
      return await client.authenticate({
        strategy: "local",
        email: user.email,
        password: user.password,
      });
    }
  }

  async logout() {
    //Permet de déconnecter le user du back-end

    return await client.logout();
  }
}
