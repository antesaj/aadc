const neo4j = require("neo4j-driver").v1;
const keys = require("../key");

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || keys.bolt_url;
const grapheneDbUser = process.env.GRAPHENEDB_BOLT_USER || keys.bolt_user;
const grapheneDbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || keys.bolt_pw;

const driver = neo4j.driver(
  graphenedbURL,
  neo4j.auth.basic(grapheneDbUser, grapheneDbPass)
);

const getSession = () => {
  return driver.session();
};

const closeSession = session => {
  session.close(() => {
    console.log("Session closed...");
  });
};

const addBook = (title, genre, concept) => {
  // TODO: Need a method to construct these queries based on inputs, which
  //  can be lists of values (except title).
  const session = getSession();
  session
    .run(
      `CREATE (a:Book {title: $title})-[:HAS_GENRE]->
        (b:Genre {name: $name})-[:IS_IN]->(a)-[:HAS_CONCEPT]->
        (c:Concept {concept: $concept})-[:IS_IN]->(a) RETURN a,b,c`,
      {
        title: title,
        name: genre,
        concept: concept
      }
    )
    .then(result => {
      closeSession(session);
    });
};

addBook("The Selfish Gene", "Biology", "Memes");

module.exports = {
  addBook
};
