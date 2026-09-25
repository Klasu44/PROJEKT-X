import {StateSnapshot} from './state';
import {PoliticalState} from './politics';
export type SaveGame={version:number;chapter:number;flags:string[];chapterLog:string[];seen:string[];eventLog:string[];state:StateSnapshot;politics:PoliticalState;actionDays?:Record<string,number>;savedAt:string};
const KEY='interregnum-save-v1';
export function saveGame(data:Omit<SaveGame,'version'|'savedAt'>){localStorage.setItem(KEY,JSON.stringify({...data,version:1,savedAt:new Date().toISOString()}));}
export function loadGame():SaveGame|null{try{const raw=localStorage.getItem(KEY);if(!raw)return null;const data=JSON.parse(raw);return data?.version===1?data:null}catch{return null}}
export function clearSave(){localStorage.removeItem(KEY)}
export function hasSave(){return !!localStorage.getItem(KEY)}
