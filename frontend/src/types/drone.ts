import { Drone } from "../../database/schemas/drone_schema"

export type DroneReducerAction = {
  drone_id: number,
  to_address: string,
}

const deepCopy = (x) =>{
  return JSON.parse(JSON.stringify(x));
}

export const droneReducer = (state: Drone[], action: DroneReducerAction) => {
  const new_state: Drone[] = deepCopy(state)
  const updDrone = state[action.drone_id]
  new_state[action.drone_id] = {
    id: updDrone.id,
    charge: updDrone.charge,
    position: action.to_address,
  }
  return new_state
}
