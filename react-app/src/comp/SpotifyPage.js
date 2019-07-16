import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

var artistQuery = gql`
  query Artists($artistName: String!) {
    queryArtists(byName: $artistName) {
      albums {
        id
        name
        image
      }
      name
      id
      image
    }
  }
`;

const DisplayArtists = ({ artistName }) => (
  <Query query={artistQuery} variables={{ artistName }}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner animation="border" variant="primary" />;
      if (error) return <p>Error :(</p>;

      return data.queryArtists.map(({ name, id, image, albums }) => {
        const dedupedAlbums = dedupAlbums(albums);
        // console.log(dedupedAlbums);
        return (
          <Container key={id}>
            <Row className="justify-content-md-center">
              <Col>
                <p>
                  <h1>{name}</h1>
                  {image && <img src={image} height="290" width="290" />}
                </p>
              </Col>
            </Row>

            <Row>
              {Object.keys(dedupedAlbums).map(albumName => {
                let album = dedupedAlbums[albumName];

                return (
                  <Col key={album.id}>
                    <p>{album.name} </p>
                    {album.image && (
                      <img src={album.image} height="100" width="100" />
                    )}
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      });
    }}
  </Query>
);

function dedupAlbums(albums) {
  return albums.reduce(
    (acc, album) => ({
      ...acc,
      [album.name]: { name: album.name, id: album.id, image: album.image }
    }),
    {}
  );
}

function SpotifyPage() {
  const [query, changeQuery] = useState("");

  const [artist, changeArtist] = useState("");

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Artist Name"
          onChange={e => {
            changeArtist(e.target.value);
          }}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => {
              changeQuery(artist);
            }}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {query && <DisplayArtists artistName={query} />}
    </>
  );
}

export default SpotifyPage;
