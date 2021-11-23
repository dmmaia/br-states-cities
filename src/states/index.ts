import statesJson from './states.json';
import cititesJson from './cities.json'

function getStates(){
  return statesJson.UF
}

function getCitiesByInitials(uf:string){
  const state = statesJson.UF[statesJson.UF.findIndex(state=>state.sigla==="uf")]
  if(!state){
    return {error: "Sigla fornecida é inválida"}
  }
  let cities = cititesJson.cities.filter(city=>city.state_id===state.id)
  return cities

}

export {getStates, getCitiesByInitials}