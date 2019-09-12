import { ACTION_SET_COUNT_LINKS } from '../constants'


export default function setCountLinks(countLinks){
    console.log('Экшон setCountLinks', countLinks);
    return {
        type: ACTION_SET_COUNT_LINKS,
        countLinks: countLinks
    }
}
