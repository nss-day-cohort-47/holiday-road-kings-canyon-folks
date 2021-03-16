console.log("lets go to a park!")
import { displayAttractions } from './attractions/AttractionList.js'

displayAttractions();

import {useParks, getParks} from "./parks/ParkProvider"
useParks();
getParks();