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

const addBook = (title, genres, concepts) => {
  const session = getSession();

  session
    .run(`CREATE (a:Book {title: $title}) RETURN a`, { title: title })
    .then(result => console.log(result));

  genres.forEach(genre => {
    session
      .run(`CREATE (g:Genre {name: $name}) RETURN g`, { name: genre })
      .then(
        session
          .run(
            `MATCH (b:Book {title: ${title}}), (g:Genre {name: ${genre}}),
              CREATE (b)-[:HAS_GENRE]->(g)-[:IS_IN]->(b)`
          )
          .then(result => {
            console.log(result);
          })
      );
  });

  concepts.forEach(concept => {
    session
      .run(`CREATE (c:Concept {name: $name}) RETURN c`, { name: concept })
      .then(
        session
          .run(
            `MATCH (b:Book {title: ${title}}), (c:Concept {name: ${concept}}),
              CREATE (b)-[:HAS_CONCEPT]->(c)-[:IS_IN]->(b)`
          )
          .then(result => {
            console.log(result);
          })
      );
  });
};

module.exports = {
  addBook
};
