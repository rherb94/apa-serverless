import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Player } from "../../../shared/domain/Player";
import { Team } from "../../../shared/domain/Team";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const player: Player = {
    name: "Ryan Herb",
    skillLevel: 3,
    yearsActive: 2,
    email: "rherb94@gmail.com",
    phoneNumber: "443-683-2820",
  };
  const players: Player[] = [];
  players.push(player);
  const team: Team = {
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
