import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { getRickAndMortyChars } from "../services/RickAndMortyService";

function RickAndMortyList() {
    const [characters, setCharacters] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const apiURL = "https://rickandmortyapi.com/api/character/?page=1";

    useEffect(() => {
        async function fetchData(params) {
            let response = await getRickAndMortyChars(apiURL);
            setCharacters(response.results);
        }
        fetchData();
    }, []);

    const openModal = (character) => {
        setSelectedCharacter(character);
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    return (
        <div style={{ maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto" }}>
            <h1>Personajes de Rick and Morty</h1>
            <ul style={{ listStyleType: "none" }}>
                {characters.map((character) => (
                    <li key={character.id} style={{ marginBottom: "20px" }}>
                        <img
                            src={character.image}
                            alt={character.name}
                            onClick={() => openModal(character)}
                            style={{ cursor: "pointer" }}
                        />
                        <br />
                        <span style={{ fontWeight: "bold" }}>{character.name}</span>
                    </li>
                ))}
            </ul>

            {selectedCharacter && (
                <Modal open={modalIsOpen} onClose={closeModal}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            border: "2px solid #000",
                            p: 4,
                        }}
                    >
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                            {selectedCharacter.name}
                        </Typography>
                        <Typography>Estado: {selectedCharacter.status}</Typography>
                        <Typography>Especie: {selectedCharacter.species}</Typography>
                        <Typography>Género: {selectedCharacter.gender}</Typography>
                        <Typography>Locación: {selectedCharacter.origin.name}</Typography>
                    </Box>
                </Modal>
            )}
        </div>
    );
}

export default RickAndMortyList;
