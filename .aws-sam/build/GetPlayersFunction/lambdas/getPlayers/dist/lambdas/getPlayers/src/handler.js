"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    const player = {
        name: "Ryan Herb",
        skillLevel: 3,
        yearsActive: 2,
        email: "rherb94@gmail.com",
        phoneNumber: "443-683-2820",
    };
    const players = [];
    players.push(player);
    const team = {
        name: "Towson Cowboys",
        homeLocation: "CnR",
        address: "1 Philadelphia ave",
        players: players,
    };
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(players),
    };
    return response;
};
exports.handler = handler;
